import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,private cdRef : ChangeDetectorRef,private router: Router, private route: ActivatedRoute) {
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

  // navigate(path: any) {
  //   this.router.navigate([{outlets: {primary: path, sidemenu:path}}],
  //     {relativeTo: this.route});
  // }

  navigate(path: any) {
    this.router.navigate(['/'+path, {  }]);
  }

}
