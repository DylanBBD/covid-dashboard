import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = ['Search', 'List'];
  activeLink = this.links[0];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = this.links[event.url === '/country-search' ? 0 : 1];
      }
    })
    
  }

  navigateLink(link: string) {
    this.activeLink = link;
    const url = '/' + (link === 'Search' ? 'country-search' : 'country-list');
    this.router.navigateByUrl(url);
  }
}
