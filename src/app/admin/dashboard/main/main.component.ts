import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { DataSource } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators"; 
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { SelectionModel } from "@angular/cdk/collections";  
import { MatMenuTrigger } from "@angular/material/menu";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit  {
  
  showform : boolean = false ;
  oppinment : boolean = false;


  skipFuction() {
    this.showform = true
  }

  showAppoinment (){
    this.oppinment = true
    }
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
     
    private snackBar: MatSnackBar
  ) {}
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
   
  ngOnInit() {
    
  }
  



 
}
