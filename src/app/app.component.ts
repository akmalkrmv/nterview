import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nterview';

  public isHeadset$: Observable<BreakpointState>;
  public hasSubmenu$ = new BehaviorSubject(false);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    // public auth: AuthService,
    // public title: TitleService
  ) {
    this.isHeadset$ == this.breakpointObserver.observe(Breakpoints.Handset);
  }

  ngOnInit(): void {}

  closeApp(): void {
    this.router.navigate(['/']);
    window.close();
  }

}
