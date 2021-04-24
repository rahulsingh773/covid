import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {
      this.REST_API_SERVER = environment.server
  }

  public findAllResources(callback: any){
      this.httpClient.post<DetailsResponse>(this.REST_API_SERVER+"/help/find", {}, {}).subscribe(data => {
        console.log(data);
        if(data.success == true){
          return callback(null, data.data)
        }else{
          return callback(data.data)
        }
      });
  }

  public findResources(filters, callback: any){
        this.httpClient.post<DetailsResponse>(this.REST_API_SERVER+"/help/find", filters, {}).subscribe(data => {
          console.log(data);
          if(data.success == true){
            return callback(null, data.data)
          }else{
            return callback(data.data)
          }
        });
    }

    public addResources(resources, callback: any){
            this.httpClient.post<any>(this.REST_API_SERVER+"/help", resources, {}).subscribe(data => {
              console.log(data);
              if(data.success == true){
                this.showStatus("Success", true)
                return callback(null, data.data)
              }else{
                return callback(data.data)
              }
       }, err_data=>{
          return callback(err_data.data)
       });
    }

    showStatus(status, isSuccess){
      if(this.isMobile()){
         alert(status)
      }else{
        let statusbar = document.getElementById('statusbar')
              statusbar.innerHTML = status
              statusbar.hidden = false

              if(isSuccess){
                statusbar['style']['background-color'] = 'lightgreen'
              }else{
                statusbar['style']['background-color'] = 'red'
              }
              setTimeout(()=>{
                statusbar.innerHTML = ""
                statusbar.hidden = true
              }, 3000)
      }
    }

    isMobile(){
              var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test
                   (navigator.userAgent.toLowerCase());
              return isMobile;
          }
}

interface DetailsResponse{
  success: boolean,
  data: Details[]
}

interface Details {
  uuid: string,
  name: string,
  address: string,
  city: string,
  pincode: number,
  state: string,
  remedisivir: boolean,
  beds: boolean,
  oxygen: boolean,
  phone: number[]
}
