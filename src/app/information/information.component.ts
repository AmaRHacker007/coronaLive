import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from './information.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  month="";
  day;
  year;
  data=[];
  name="";
  code="";
  routerPath="";
  TotalCC=0;
  TotalCR=0;
  TotalCD=0;
  TotalCL=0;
  TodayCC=0;
  TodayCD=0;
  TotalPL=0;
  locate="";
  constructor(private router: Router,private _httpService:InformationService){ }
  sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return -1;  
       else if(a[property] < b[property])  
          return 1;  
   
       return 0;  
    }  
 }
  ngOnInit() {
    let myItem=-1;
    if(parseInt(localStorage.getItem('index'))){
      myItem = parseInt(localStorage.getItem('index'));
      myItem-=1;
    }
    
    let myName = localStorage.getItem('name');
    localStorage.clear();

    console.log(myName);
    var today = new Date();
    this.day=today.getDate();
    this.year=today.getFullYear();
    
    switch (today.getMonth()+1) {
      case 1:
          this.month="January";
        break;
      case 2:
        this.month="February";
        break;
      case 3:
        this.month="March";
        break;
      case 4:
        this.month="April";
        break;
      case 5:
        this.month="May";
        break;
      case 6:
        this.month="June";
        break;
      case 7:
        this.month="July";
        break;
      case 8:
        this.month="Agust";
        break;
      case 9:
        this.month="Septmber";
        break;
      case 10:
        this.month="October";
        break;
      case 11:
        this.month="November";
        break; 
      default:
        this.month="December";
        break;
    }

    //Live data From API

    this._httpService.getLiveData().subscribe((res:any[])=>{
      for(let i=0;i<res['data'].length;i++){
        var temp={
          name:res['data'][i]['name'],
          code:res['data'][i]['code'],
          date:res['data'][i]['updated_at'],
          todayDeath:res['data'][i]['today']['deaths'],
          todayComfirm:res['data'][i]['today']['confirmed'],
          population:res['data'][i]['population'],
          totalDeath:res['data'][i]['latest_data']['deaths'],
          totalConfirm:res['data'][i]['latest_data']['confirmed'],
          totalrecovered:res['data'][i]['latest_data']['recovered'],
          totalCritical:res['data'][i]['latest_data']['critical'],
          death_rate:res['data'][i]['latest_data']['calculated']['death_rate'],
          recovery_rate:res['data'][i]['latest_data']['calculated']['recovery_rate'],
          recovered_vs_death_ratio:res['data'][i]['latest_data']['calculated']['recovered_vs_death_ratio'],
          cases_per_million_population:res['data'][i]['latest_data']['calculated']['cases_per_million_population'],
          latitude:res['data'][i]['coordinates']['latitude'],
          longitude:res['data'][i]['coordinates']['longitude'],
          
        }
        this.data.push(temp);
      }
      this.data.sort(this.sortByProperty("totalConfirm"));
      if(myItem>=0){
        this.name=this.data[myItem]['name'];
        this.code=this.data[myItem]['code'];
        this.TotalCC=this.data[myItem]['totalConfirm'];
        this.TotalCD=this.data[myItem]['totalDeath'];
        this.TotalCR=this.data[myItem]['totalrecovered'];
        this.TotalCL=this.data[myItem]['totalCritical'];
        this.TodayCC=this.data[myItem]['todayComfirm'];
        this.TodayCD=this.data[myItem]['todayDeath'];
        this.TotalPL=this.data[myItem]['population']; 
        this.routerPath="/home";
      }
      if(myName){
        var index = this.data.map(function(e) { return e.name; }).indexOf(myName);
        myItem=index;
        this.name=this.data[myItem]['name'];
        this.code=this.data[myItem]['code'];
        this.TotalCC=this.data[myItem]['totalConfirm'];
        this.TotalCD=this.data[myItem]['totalDeath'];
        this.TotalCR=this.data[myItem]['totalrecovered'];
        this.TotalCL=this.data[myItem]['totalCritical'];
        this.TodayCC=this.data[myItem]['todayComfirm'];
        this.TodayCD=this.data[myItem]['todayDeath'];
        this.TotalPL=this.data[myItem]['population'];
        this.routerPath="/list";
      }
             

    });
    
  }
  back(){
    this.router.navigate(["/list"]);
  }


}
