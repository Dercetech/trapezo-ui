import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

import {Subscription} from 'rxjs/Subscription';

import {BroadcastTitle} from "../../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../../commons/wrapper/services/toolbar.service";
import {UsersService} from '../../../../commons/users/services/users.service';
import {CustomValidators} from '../../../../commons/validators/custom-validators';
import {User} from '../../../../commons/users/interfaces/user';

@Component({
  selector: 'app-upsert-user',
  templateUrl: './upsert-user.component.html',
  styleUrls: ['./upsert-user.component.scss']
})
export class UpsertUserComponent implements OnInit, BroadcastTitle {

  title:string = 'add user';
  titleUpdate:string = 'update user';
  isNewUser: boolean = true;

  showLeftButton:boolean = true;
  showRightButton:boolean = true;

  roles: string[] = [];

  userForm = this._formBuilder.group({
    user: [{value: '', disabled: false }, Validators.required],
    displayName: ["", Validators.required],
    email: ["", [Validators.required, this.customValidators.getEmailValidator()]],
    roleAdmin: ["", []],
    password: ["", [() => (this.isNewUser ? Validators.required : null)] ],
    passwordConfirm: ["", [() => (this.isNewUser ? Validators.required : null), this.customValidators.matchOtherValidator('password')] ],
  });

  private subscriptions:Subscription[] = [];

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute:ActivatedRoute,
              @Inject(ToolbarService) private toolbarService: ToolbarService,
              @Inject(CustomValidators) private customValidators: CustomValidators,
              @Inject(UsersService) private usersService: UsersService) {

    this.subscriptions.push(this.activatedRoute.params.subscribe(params => {
      if(params.user){

        this.isNewUser = false;

        // Recover data for this user
        this.loadUserData(params.user);

        // Adjust to the title
        this.toolbarService.setTitle(this.titleUpdate);
      }
    }) );
  }

  ngOnInit() {
  }

  broadcastTitle():void{
    this.toolbarService.setTitle(this.isNewUser ? this.title : this.titleUpdate);
  }


  loadUserData(user:string){
    this.usersService.getUser(user).first().subscribe(user => {

        if(!user){
          this.navigateToParent();
        }

        else{
          // Set mode to "edit"
          this.isNewUser = false;
          this.userForm.controls['user'].disable();

          // Keep roles
          if(user.roles){
            this.roles = user.roles;
            this.userForm.controls['roleAdmin'].setValue(user.roles.indexOf('admin') !== -1);
          }

          // Pre-fill form
          this.userForm.controls['user'].setValue(user.user);
          this.userForm.controls['displayName'].setValue(user.displayName);
          this.userForm.controls['email'].setValue(user.email);
        }
      },
      (err) => {
        console.log('error: ' + err);
        this.navigateToParent();
      });
  }

  isSubmitButtonDisabled():boolean{
    return false;
  }

  private navigateToParent(){
    this.isNewUser ?
      this.router.navigate( ['..'], { relativeTo: this.activatedRoute }) :
      this.router.navigate( ['../..'], { relativeTo: this.activatedRoute });
  }

  onCancel(){
    this.navigateToParent();
  }

  onSubmit(){
    const value = this.userForm.value;
    const user: User = {
      user : this.userForm.controls.user.value, // must use control as no value property created for disabled fields
      displayName : value.displayName,
      email : value.email,
      roles: [],
    }

    user.roles = this.roles;
    if(value.roleAdmin && user.roles.indexOf('admin') === -1 ) user.roles.push('admin');
    else if(!value.roleAdmin) user.roles.splice(user.roles.indexOf('admin'), 1);

    // Password reset?
    if(value.password){
      user.password = value.password;
    }

    if(this.isNewUser){
      this.usersService.createUser(user).first().subscribe( () => {
        this.navigateToParent();
      })
    }
    else{
      this.usersService.updateUser(user).first().subscribe( () => {
        this.navigateToParent();
      })
    }
  }
}
