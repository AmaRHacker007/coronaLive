import { Component ,OnInit} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomeComponent implements OnInit{

  month="";
  day;
  year;
  data=[];
  c1name="";
  c2name="";
  c3name="";
  c4name="";
  c5name="";
  c1code="";
  c2code="";
  c3code="";
  c4code="";
  c5code="";
  WorldTotalCC=0;
  WorldTotalDC=0;
  WorldTotalRC=0;
  c1TotalCC=0;
  c1TotalCR=0;
  c1TotalCD=0;
  c2TotalCC=0;
  c2TotalCR=0;
  c2TotalCD=0;
  c3TotalCC=0;
  c3TotalCR=0;
  c3TotalCD=0;
  c4TotalCC=0;
  c4TotalCR=0;
  c4TotalCD=0;
  c5TotalCC=0;
  c5TotalCR=0;
  c5TotalCD=0;
  constructor(private router: Router,private _httpService:HomeService){ }
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
        this.WorldTotalCC+=res['data'][i]['latest_data']['confirmed'];
        this.WorldTotalDC+=res['data'][i]['latest_data']['deaths'];
        this.WorldTotalRC+=res['data'][i]['latest_data']['recovered'];
        this.data.push(temp);
      }
      this.data.sort(this.sortByProperty("totalConfirm"));
      
      this.c1name=this.data[0]['name'];
      this.c2name=this.data[1]['name'];
      this.c3name=this.data[2]['name'];
      this.c4name=this.data[3]['name'];
      this.c5name=this.data[4]['name'];

      this.c1code=this.data[0]['code'];
      this.c2code=this.data[1]['code'];
      this.c3code=this.data[2]['code'];
      this.c4code=this.data[3]['code'];
      this.c5code=this.data[4]['code'];

      this.c1TotalCC=this.data[0]['totalConfirm'];
      this.c2TotalCC=this.data[1]['totalConfirm'];
      this.c3TotalCC=this.data[2]['totalConfirm'];
      this.c4TotalCC=this.data[3]['totalConfirm'];
      this.c5TotalCC=this.data[4]['totalConfirm'];

      this.c1TotalCD=this.data[0]['totalDeath'];
      this.c2TotalCD=this.data[1]['totalDeath'];
      this.c3TotalCD=this.data[2]['totalDeath'];
      this.c4TotalCD=this.data[3]['totalDeath'];
      this.c5TotalCD=this.data[4]['totalDeath'];

      this.c1TotalCR=this.data[0]['totalrecovered'];
      this.c2TotalCR=this.data[1]['totalrecovered'];
      this.c3TotalCR=this.data[2]['totalrecovered'];
      this.c4TotalCR=this.data[3]['totalrecovered'];
      this.c5TotalCR=this.data[4]['totalrecovered'];

      
    });
    
  }
  SendData(value){
    localStorage.setItem('index',value);
    this.router.navigate(['/info']);
    //console.log(localStorage.getItem('index'));
  }

}
