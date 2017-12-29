import {Component, Inject, OnInit} from '@angular/core';
import {BroadcastTitle} from '../../../../commons/wrapper/interfaces/title-broadcast';
import {ToolbarService} from '../../../../commons/wrapper/services/toolbar.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, BroadcastTitle {

  title: string = 'my profile';

  showBackButton: boolean = false;
  showActionButtons: boolean = false;

  constructor(@Inject(ToolbarService) private toolbarService: ToolbarService) { }

  ngOnInit() {
  }

  broadcastTitle(): void {
    this.toolbarService.setTitle(this.title);
  }

  isSubmitButtonDisabled(): boolean {
    return false;
  }

  onSubmit() {

  }
}
