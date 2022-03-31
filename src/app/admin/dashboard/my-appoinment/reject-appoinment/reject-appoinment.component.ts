import {  MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { DeleteDialogComponent } from "src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-reject-appoinment',
  templateUrl: './reject-appoinment.component.html',
  styleUrls: ['./reject-appoinment.component.scss']
})
export class RejectAppoinmentComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
     
  openSnackBar() {
    this._snackBar.openFromComponent(deleteMsgComponent, {
      duration: 2000,
    });
  }

}

@Component({
  selector: 'ssnack-bar-component-delete-snack',
  templateUrl: 'snack-bar-component-delete-snack.html',
  styles: [
    `
    .delete-msg { 
      color: #ffffff;
      font-size: 14px;
      font-weight: normal;
    }
  `,
  ],
})
export class deleteMsgComponent {}