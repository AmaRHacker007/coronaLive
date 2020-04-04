import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ListService } from './list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  month="";
  day;
  year;
  data=[];
  c1name="";
  c2name="";
  c3name="";
  c4name="";
  c5name="";
  constructor(private router: Router,private _httpService:ListService){ }
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
        this.data.push(temp);
      }
      console.log(this.data[0]['code']);
      this.data.sort(this.sortByProperty("totalConfirm"));
      //this.data.length
        for(let k=0;k<50;k++){
          var markup = "<div class='card' id="+this.data[k]['name']+"><img class='flag' src=https://www.countryflags.io/"+this.data[k]['code']+"/flat/24.png><label class='country'>"+this.data[k]['name']+"</label></div>"; 
          var listDiv = $(".scrolling-wrapper");                                              
          listDiv.append(markup); 
          if(window.matchMedia("(max-width: 320px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","70px");
            $(".card").css("width","260px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          } 
          else if(window.matchMedia("(max-width: 360px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","65px");
            $(".card").css("width","270px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
           else if(window.matchMedia("(max-width: 375px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if((window.matchMedia("(max-width: 411px)").matches) && (window.matchMedia("(max-height: 731px)").matches)) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if(window.matchMedia("(max-width: 414px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if(window.matchMedia("(max-width: 768px)").matches) {  
            $(".flag").css("width","130px"); 
            $(".flag").css("height","93px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","35px"); 
            $(".country").css("left","165px"); 
            $(".country").css("font-size","38px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","120px");
            $(".card").css("width","545px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else{
            $(".flag").css("width","60px"); 
            $(".flag").css("height","60px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","30px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","20px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","315px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");  
          }
        }


        $(".card").click(function(){
          var name = $(this).attr('id');
          localStorage.setItem("name",name);
          window.location.href = "/info";
        });
    });
           
  }

  onKey(searchItem){
      $(".scrolling-wrapper").empty();
      let len=this.data.length;
      if(!searchItem){
        len=50;
      }
      for(let i=0;i<len;i++){
        if(this.data[i]['name'].toLowerCase().includes(searchItem.toLowerCase())){
          var markup = "<div class='card' id="+this.data[i]['name']+"><img class='flag' src=https://www.countryflags.io/"+this.data[i]['code']+"/flat/24.png><label class='country'>"+this.data[i]['name']+"</label></div>"; 
          var listDiv = $(".scrolling-wrapper");                                              
          listDiv.append(markup); 
          if(window.matchMedia("(max-width: 320px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","70px");
            $(".card").css("width","260px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          } 
          else if(window.matchMedia("(max-width: 360px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","65px");
            $(".card").css("width","270px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
           else if(window.matchMedia("(max-width: 375px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if((window.matchMedia("(max-width: 411px)").matches) && (window.matchMedia("(max-height: 731px)").matches)) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if(window.matchMedia("(max-width: 414px)").matches) {  
            $(".flag").css("width","45px"); 
            $(".flag").css("height","45px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","23px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","18px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","310px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else if(window.matchMedia("(max-width: 768px)").matches) {  
            $(".flag").css("width","130px"); 
            $(".flag").css("height","93px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","35px"); 
            $(".country").css("left","165px"); 
            $(".country").css("font-size","38px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","120px");
            $(".card").css("width","545px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");
          }
          else{
            $(".flag").css("width","60px"); 
            $(".flag").css("height","60px"); 
            $(".flag").css("left","20px"); 
            $(".flag").css("border-radius","40px");
            $(".flag").css("position","absolute");
            $(".flag").css("top","10px"); 
            $(".country").css("top","30px"); 
            $(".country").css("left","110px"); 
            $(".country").css("font-size","20px"); 
            $(".country").css("color","black"); 
            $(".country").css("position","absolute");
            $(".card").css("background-color","white"); 
            $(".card").css("font-weight","bold"); 
            $(".card").css("left","20px"); 
            $(".card").css("border-radius","15px");
            $(".card").css("height","75px");
            $(".card").css("width","315px"); 
            $(".card").css("margin-top","10px");
            $(".card").css("margin-left","10px");
            $(".card").css("margin-right","10px");
            $(".card").css("box-shadow","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");  
          }
        }
      }
      $(".card").click(function(){
        var name = $(this).attr('id');
        localStorage.setItem("name",name);
        window.location.href = "/info";
      });
  }
  
  back(){
    window.location.href = "/home";
  }
}
