import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from "../../../../commons/wrapper/interfaces/title-broadcast";
import {ToolbarService} from "../../../../commons/wrapper/services/toolbar.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, BroadcastTitle {

  title:string = 'default page';

  showLeftButton:boolean = true;
  showRightButton:boolean = true;

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
