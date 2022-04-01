import {  MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { DeleteDialogComponent } from "src/app/patient/appointments/upcoming-appointment/dialogs/delete/delete.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cancel-appoinment',
  templateUrl: './cancel-appoinment.component.html',
  styleUrls: ['./cancel-appoinment.component.scss']
})
export class CancelAppoinmentComponent implements OnInit {

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
  selector: 'ssnack-bar-component-cancel-snack',
  templateUrl: 'snack-bar-component-cancel-snack.html',
  styles: [
    `
    .Cancel-msg { 
      color: #ffffff;
      font-size: 14px;
      font-weight: normal;
    }
  `,
  ],
})
export class deleteMsgComponent {}
