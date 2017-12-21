import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from "../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../commons/wrapper/services/toolbar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit, BroadcastTitle {

  title:string = 'users';

  showLeftButton:boolean = false;
  showRightButton:boolean = true;

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              @Inject(ToolbarService) private toolbarService: ToolbarService) { }

  ngOnInit() {
  }

  broadcastTitle():void{
    this.toolbarService.setTitle(this.title);
  }

  isSubmitButtonDisabled():boolean{
    return false;
  }

  onAdd(){
    this.router.navigate(['add-user'], { relativeTo: this.activatedRoute });
  }
}
