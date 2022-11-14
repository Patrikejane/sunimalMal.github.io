import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,private cdRef : ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over' as MatDrawerMode;
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side' as MatDrawerMode;
        this.sidenav.open();
      }
      this.cdRef.detectChanges();
    });
  }

  ngOnInit(): void {
  }
}
