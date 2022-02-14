import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core'; 
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ChangePasswordSuccessModalComponent } from '../change-password-success-modal/change-password-success-modal.component';
 

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {
  doctorsService: any; 
  doctorsForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  doctors: any;

  constructor( 
    public dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private FormBuilder: FormBuilder,
    public dialog: MatDialog) { }

    ngOnInit() {
      this.doctorsForm = this.FormBuilder.group({
        oldpassword: ['', Validators.required],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
      });
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
  }

  successDialog(){
    const dialogRef = this.dialog.open(ChangePasswordSuccessModalComponent, {
      data: {
        doctors: this.doctors,
        action: "add",
      },
    });
  }

}
