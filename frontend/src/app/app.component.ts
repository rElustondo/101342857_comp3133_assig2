import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  _userDetails:any;
  userDetails:any;
  constructor(private router:Router) {}
  ngOnInit(): void {
    this._userDetails = localStorage.getItem('assignment2-login-details');
    this.userDetails = this._userDetails ? JSON.parse(this._userDetails) : null;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.onRouteChange();
      }
    });
  }
  onRouteChange(): void {
    console.log('Route changed');
    this.updateUserDetails()
  }
  logout() {
    localStorage.removeItem('assignment2-login-details');
    this.userDetails = null;
    this._userDetails = null;
    this.router.navigate(['/login']);
  }
  public updateUserDetails(){
    this._userDetails = localStorage.getItem('assignment2-login-details');
    this.userDetails = this._userDetails ? JSON.parse(this._userDetails) : null;
  }
}
