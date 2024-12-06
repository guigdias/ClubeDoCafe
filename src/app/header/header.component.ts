import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/login']);
    console.log("BOTAO LOGIN");
  }
}
