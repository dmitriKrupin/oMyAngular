import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.component.css'],
  providers: [NgbNavConfig]
})

export class AboutComponent {
  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
}
