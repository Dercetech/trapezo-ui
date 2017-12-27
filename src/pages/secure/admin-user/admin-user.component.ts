import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from "../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../commons/wrapper/services/toolbar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../commons/users/services/users.service";
import {User} from "../../../commons/users/interfaces/user";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit, BroadcastTitle {

  title:string = 'users';

  showLeftButton: boolean = false;
  showRightButton: boolean = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              @Inject(ToolbarService) private toolbarService: ToolbarService,
              @Inject(UsersService) public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.reloadUsers();
  }

  broadcastTitle(): void {
    this.toolbarService.setTitle(this.title);
  }

  isSubmitButtonDisabled():boolean{
    return false;
  }

  formatRoles(user: User) {
    return (user && user.roles) ? user.roles.join(', ') : 'n/a';
  }

  onUserRowClicked(user: User){
    this.router.navigate(['upsert', user.user], { relativeTo: this.activatedRoute });
  }

  onAdd(){
    this.router.navigate(['upsert'], { relativeTo: this.activatedRoute });
  }
}
