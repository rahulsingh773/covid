import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {CitiesService} from '../cities.service'
import {DetailsService} from '../details.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Add Saviour Details";
  formGroup;

  constructor(private formBuilder: FormBuilder, private citiesService: CitiesService, private detailsService: DetailsService) {
      this.formGroup = this.formBuilder.group({
        name: '',
        city: '',
        provision: '',
        address: '',
        pincode: 0,
        beds: 0,
        remedisivir: 0,
        plasma: 0,
        oxygen: 0,
        phone: []
      });
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
      var name = formData['name'];
      console.log(formData)

      if(formData['address'].trim().length == 0 && (formData['phone'] == null || formData['phone'].length == 0)){
        this.detailsService.showStatus("both address and phone can't be empty", false)
        return
      }

      this.detailsService.addResources(formData, (err, data)=>{
        if(err != null){
          this.detailsService.showStatus(err, false)
          return
        }
          window.location.reload();
      });
    }

    getStates(){
      return this.citiesService.getStates()
    }

    getCities(formData){
      return this.citiesService.getCities(formData['provision'])
    }

    clearCities(formData){
      document.getElementById('city')['value'] = ''
      formData['city'] = ''
    }
}
