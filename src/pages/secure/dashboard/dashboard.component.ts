import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from "../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../commons/wrapper/services/toolbar.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, BroadcastTitle {

  title:string = 'dashboard';

  showLeftButton:boolean = false;
  showRightButton:boolean = false;

  constructor(@Inject(ToolbarService) private toolbarService: ToolbarService) { }

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
