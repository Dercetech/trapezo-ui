import {Component, OnInit, Input, Inject, OnDestroy} from '@angular/core';
import {SideMenuService} from "../../services/side-menu.service";

@Component({
  selector: 'app-secondary-toolbar',
  templateUrl: './secondary-toolbar.component.html',
  styleUrls: ['./secondary-toolbar.component.scss']
})
export class SecondaryToolbarComponent implements OnInit, OnDestroy {

  @Input() title: string;

  constructor(@Inject(SideMenuService) private sideMenuService: SideMenuService) {
  }

  ngOnInit() {
  }


  ngOnDestroy(){
  }

  toggleMenu(){
    this.sideMenuService.toggleMenu();
  }
}
