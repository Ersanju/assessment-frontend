import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {

  constructor(private router: Router) {}
  @Input() user: any;

  showDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
}
