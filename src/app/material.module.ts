import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
//import {MatSelectModule} from '@angular/material/select';
//import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSelectModule,
  MatGridListModule,MatPaginatorModule,MatCheckboxModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSnackBarModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatGridListModule,
   MatPaginatorModule,
   MatCheckboxModule,
   MatSelectModule,
   MatSnackBarModule
   ],
})
export class MaterialModule { }
