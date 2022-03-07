import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ChangeEmailModalComponent } from './change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { DeleteCreditCardComponent } from './delete-credit-card/delete-credit-card.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  labelPosition: 'before' | 'after' = 'after';
  doctorsService: any;
  exampleDatabase: any;
  doctors: any;
  constructor(public dialog: MatDialog,) { }
  showform : boolean = false ;
  uploadImg : boolean = false;
  deleteImg : boolean = false;
  addInfo1 : boolean = false;
  addInfo2 : boolean = false;
  addPayment : boolean = false;
  credit : boolean =false;
  debit : boolean = false;
  ngOnInit(): void {
  }

  editInfo() {
    this.showform = true;
  } 

  uploadImageFuc(){
    this.uploadImg =true ;
  }

  deleteImageFuc(){
    this.deleteImg = true;
  }


  profileEditInfo1() {
    this.addInfo1 = true;
  } 

  profileEditInfo2() {
    this.addInfo2 = true;
  } 


  addPaymentFuc(){
    this.addPayment = true;
  }
  
  creditSave(){
    this.credit = true;
  }
  

  debitSave(){
    this.debit = true;
  }
  
  addNew() {
    const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
      data: {
        doctors: this.doctors,
        action: "add",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.doctorsService.getDialogData()
        );       
        this.showNotification(
          "snackbar-success",
          "Add Record Successfully...!!!",
          "bottom",
          "center"
        );
      }
    });
  }

  changeEmail(){
    const dialogRef = this.dialog.open(ChangeEmailModalComponent, {
      data: {
        doctors: this.doctors,
        action: "add",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.doctorsService.getDialogData()
        );       
        this.showNotification(
          "snackbar-success",
          "Add Record Successfully...!!!",
          "bottom",
          "center"
        );
      }
    });
  }

  deleteCreditCard() {
    const dialogRef = this.dialog.open(DeleteCreditCardComponent, {
      data: {
        doctors: this.doctors,
        action: "add",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.doctorsService.getDialogData()
        );       
        this.showNotification(
          "snackbar-success",
          "Add Record Successfully...!!!",
          "bottom",
          "center"
        );
      }
    });
  }



  showNotification(arg0: string, arg1: string, arg2: string, arg3: string) {
    throw new Error('Method not implemented.');
  }
  

}
