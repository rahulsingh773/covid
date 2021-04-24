import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../details.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headers: any[] = ["name", "address", "city", "provision", "pincode", "remedisivir", "oxygen", "beds", "plasma", "phone"];

  rows = []

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.clearAllFilters()
  }

  capitalize(str): string{
     if(str == null || typeof str != 'string' || str.length == 0){
      return str
     }
     return str[0].toUpperCase() + str.slice(1)
  }

  getValue(value): any{
    if(typeof value == 'object' && Array.isArray(value)){
      return value.join(',').replace(/,/g, ' , ')
    }
    return value
  }

  clearAllFilters(){
    this.detailsService.findAllResources((err, data)=>{
            if(err == null){
              this.rows = data
            }else{
              alert(err)
            }
        })
  }

  applyFilters(){
    var filters = {
      city: document.getElementById('city')['value'],
      provision: document.getElementById('provision')['value'],
      pincode: document.getElementById('pincode')['value'],
      contact: document.getElementById('contact')['value'],
      remedisivir: this.getResourcesValue(document.getElementById('remedisivir')['value']),
      oxygen: this.getResourcesValue(document.getElementById('oxygen')['value']),
      beds: this.getResourcesValue(document.getElementById('beds')['value']),
      plasma: this.getResourcesValue(document.getElementById('plasma')['value'])
    }

    console.log("filter", filters)
    this.detailsService.findResources(filters, (err, data)=>{
      if(err == null){
        this.rows = data
      }else{
         alert(err)
      }
    })
  }

  getResourcesValue(val): any{
    if(val == 0){
      return null
    }else if(val == 1){
      return true
    }
    return false
  }
}
