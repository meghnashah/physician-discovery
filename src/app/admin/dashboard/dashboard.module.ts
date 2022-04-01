import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgApexchartsModule } from "ng-apexcharts";
import { ProfileComponent } from './profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangePasswordModalComponent } from './profile/change-password-modal/change-password-modal.component';
import { ChangeEmailModalComponent } from './profile/change-email-modal/change-email-modal.component';
import { ChangePasswordSuccessModalComponent } from './profile/change-password-success-modal/change-password-success-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { DeleteCreditCardComponent } from './profile/delete-credit-card/delete-credit-card.component'; 
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { NotificationComponent } from './notification/notification.component';
import { MatSnackBarModule } from "@angular/material/snack-bar"; 
import { MatDatepickerModule } from "@angular/material/datepicker";  
import { MyAppoinmentComponent } from './my-appoinment/my-appoinment.component';
import { ViewDetailsComponent } from './view-details/view-details.component';   
import { AppointmentsService } from "./my-appoinment/my-appoinment.service";
import { RejectAppoinmentComponent } from './my-appoinment/reject-appoinment/reject-appoinment.component';
import { CancelAppoinmentComponent } from './my-appoinment/cancel-appoinment/cancel-appoinment.component'; 
 
@NgModule({
  declarations: [MainComponent, Dashboard2Component, ProfileComponent, ChangePasswordModalComponent, ChangeEmailModalComponent, ChangePasswordSuccessModalComponent, DeleteCreditCardComponent, NotificationComponent, MyAppoinmentComponent, ViewDetailsComponent, RejectAppoinmentComponent, CancelAppoinmentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTabsModule, 
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    NgxDatatableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDatepickerModule
    
  ],
  providers: [AppointmentsService]

})
export class DashboardModule {}
