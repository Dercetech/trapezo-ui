import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {BroadcastTitle} from "../../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../../commons/wrapper/services/toolbar.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, BroadcastTitle {

  title:string = 'add user';

  showLeftButton:boolean = true;
  showRightButton:boolean = true;

  userForm = this._formBuilder.group({
    username: ["", Validators.required],
    displayName: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    passwordConfirm: ["", Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              @Inject(ToolbarService) private toolbarService: ToolbarService) { }

  ngOnInit() {
  }

  broadcastTitle():void{
    this.toolbarService.setTitle(this.title);
  }

  isSubmitButtonDisabled():boolean{
    return false;
  }

  onSubmit(){

  }
}
