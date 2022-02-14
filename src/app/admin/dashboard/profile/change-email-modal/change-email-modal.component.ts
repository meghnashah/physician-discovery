import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core'; 
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-change-email-modal',
  templateUrl: './change-email-modal.component.html',
  styleUrls: ['./change-email-modal.component.scss']
})
export class ChangeEmailModalComponent implements OnInit {

  doctorsService: any; 
  doctorsForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  doctors: any;

  constructor( 
    public dialogRef: MatDialogRef<ChangeEmailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.doctorsForm = this.formBuilder.group({
       
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
      
      });
     
    }

    formControl = new FormControl('', [
      Validators.required
      // Validators.email,
    ]);
    getErrorMessage() {
      return this.formControl.hasError('required')
        ? 'Required field'
        : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  public confirmAdd(): void {
    this.doctorsService.addDoctors(this.doctorsForm.getRawValue());
  }
  

}
