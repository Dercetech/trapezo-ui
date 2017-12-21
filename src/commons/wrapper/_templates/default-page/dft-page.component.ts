import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from "../../interfaces/title-broadcast";
import {ToolbarService} from "../../services/toolbar.service";

/*
@Component({
  selector: 'app-dft-page',
  templateUrl: './dft-page.component.html',
  styleUrls: ['./dft-page.component.scss']
})
*/
export class DefaultPageComponent implements OnInit, BroadcastTitle {

  title:string = 'default page';

  showLeftButton:boolean = false;
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
