import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = []; 
  newRow: any = {}; 
  tid: number = 0;
  tname: string = '';
  phno: number = 0;
  pacage: string = '';
  trainer: string = '';


  constructor(private s1: DemoService) { }

  ngOnInit() {
    this.loadTrainData();
  }
  
  loadTrainData() {
    this.s1.viewdata1().subscribe((data) => {
      this.data = data;
    });
  }
  insertdata(insertform:any)
  {
     return this.s1.insertdata1(insertform.value).subscribe(() => {
      this.loadTrainData();
  });
     
 }
 
  updateRow(train: any) {
    this.s1.update(train).subscribe(() => {
      this.loadTrainData(); 
    });
  }

  deleteRow(train: any) {
    this.s1.delete(train).subscribe(() => {
      this.loadTrainData(); 
    });
  }
}
