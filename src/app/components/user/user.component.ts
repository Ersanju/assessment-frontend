import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  @Input() user: any;
  showDetails: boolean = false; // Flag to toggle details view

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
