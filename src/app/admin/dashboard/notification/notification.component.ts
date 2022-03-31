import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  showNotification : boolean = false ;
  clearNotification : boolean =false ;


  showNotificationFuc() {
    this.showNotification = true
  }

  clearAllNotification(){
    this.clearNotification = true ;
  } 

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
  }

  


}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
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
export class PizzaPartyComponent {}