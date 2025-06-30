import { Component, Input, Output, EventEmitter, output, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridColumn, TeamMember } from '../../../core/models/user.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges{
  @Input() columns: GridColumn[] = [];
  @Input() users: TeamMember[] = [];

  @Output() edit = new EventEmitter<TeamMember>();
  @Output() delete = new EventEmitter<TeamMember>();
  
  get totalPages(): number[] {
    const total = Math.ceil(this.users.length / this.itemsPerPage);
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  currentPage = 1;
  itemsPerPage = 10;
  paginatedUsers: TeamMember[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['users'] && this.users.length > 0) {
        this.currentPage = 1;
        this.updatePagination();
      }
  }

  getUserField(user: TeamMember, column: GridColumn): any {
    switch (column.column_key) {
      case 'name':
        return `${user.name.first_name} ${user.name.last_name} ${user.name.handle}`;
      case 'status':
        return user.status;
      case 'role':
        return user.role;
      case 'license_used':
        return user.license_used;
      case 'teams':
        return user.teams;
      default:
        return user[column.column_key as keyof TeamMember];
    }
}

updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedUsers = this.users.slice(start, end);
  }

goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

   

}