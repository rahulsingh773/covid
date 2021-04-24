import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';

  constructor(){
    let first_time = false
    if(!localStorage.getItem("visited")){
      first_time = true
      localStorage.setItem("visited","true");
    }

    console.log(this.isMobile(), first_time)
    if(this.isMobile() && first_time){
      alert("Welcome visitor, website works well with bigger screen, please turn on desktop mode or use desktop!")
    }
  }

  isMobile(){
      // if we want a more complete list use this: http://detectmobilebrowsers.com/
      // str.test() is more efficent than str.match()
      // remember str.test is case sensitive
      var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test
           (navigator.userAgent.toLowerCase());
      return isMobile;
  }
}
