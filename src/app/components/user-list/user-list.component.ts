import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [];
  originalUsers: any[] = [];
  sortOrder: string = '';
  selectedRole: string = '';
  currentPage: number = 1; // Tracks the current page
  itemsPerPage: number = 5; // Number of items per page

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.originalUsers = data;
    });
  }

  sortUsers(): void {
    let filteredUsers = [...this.originalUsers];

    // Apply role filter
    if (this.selectedRole) {
      filteredUsers = filteredUsers.filter(user => user.role === this.selectedRole);
    }

    // Sort users based on selected sort order
    if (this.sortOrder === 'asc') {
      filteredUsers = filteredUsers.sort((a, b) => a.age - b.age);
    } else if (this.sortOrder === 'desc') {
      filteredUsers = filteredUsers.sort((a, b) => b.age - a.age);
    }

    this.users = filteredUsers;
  }

  onSortOrderChange(event: Event): void {
    this.sortOrder = (event.target as HTMLSelectElement).value;
    this.sortUsers();
  }

  onRoleFilterChange(event: Event): void {
    this.selectedRole = (event.target as HTMLSelectElement).value;
    this.sortUsers();
  }

}
