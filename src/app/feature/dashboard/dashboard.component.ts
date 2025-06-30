import { Component, signal, effect, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user//user.reducer';
import { loadUsers,deleteUser } from '../../store/user/user.actions';
import { selectColumns, selectUsers, selectLoading } from '../../store/user/user.selectors';
import { ChartComponent } from '../../shared/components/chart/chart.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import {  TeamMember } from '../../core/models/user.model';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CustomModalComponent } from "../../shared/components/custom-modal/custom-modal.component";


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ChartComponent,
    TableComponent,
    LoaderComponent,
    NavbarComponent,
    CustomModalComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  private readonly store = inject(Store<UserState>);
  users=this.store.selectSignal(selectUsers);
  columns=this.store.selectSignal(selectColumns);
  loading$ = this.store.select(selectLoading);
  showEditModal = false;
  showDeleteModal=false;
  editedUserName:string='';
  userId:string='';
  constructor() {}
   

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
  openModal() {
    this.showEditModal=true;
  }

  handleSave() {
    console.log('Saved!');
    this.showEditModal=false;
  }

  onEdit(user:TeamMember) {
    
    this.editedUserName=user.name.first_name+' '+user.name.last_name;
    this.openModal();
  }
  handleEditConfirm(){
    console.log('handle edit confirmation')
  }
  onDelete(user:TeamMember) {
     this.editedUserName=user.name.first_name+' '+user.name.last_name;
     this.showDeleteModal=true;
     this.userId=user.id;
  }

  handleDeleteConfirm(){
      this.store.dispatch(deleteUser({userId:this.userId}));
  }
}
