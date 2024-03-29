import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
  isScrollEnabled = true;

  constructor() { }

  ngOnInit() {
  }


  toggleNavMenu() {
    document.getElementsByClassName('bar')[0].classList.toggle("bar1");
    document.getElementsByClassName('bar')[1].classList.toggle("bar2");
    document.getElementsByClassName('bar')[2].classList.toggle("bar3");

    let sideNavLinksElement = document.getElementById("sidenav-links");
    if (sideNavLinksElement.classList.contains("hide-nav-links")) {
      sideNavLinksElement.classList.remove("hide-nav-links");
      sideNavLinksElement.classList.add("show-nav-links");
    } else {
      sideNavLinksElement.classList.remove("show-nav-links");
      sideNavLinksElement.classList.add("hide-nav-links");
    }

    if (window.pageYOffset > 100) {
      document.getElementById("nav-button-container").classList.add("grey-background");
    } else {
      document.getElementById("nav-button-container").classList.toggle("grey-background");
    }
  }
}
