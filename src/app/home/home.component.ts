import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headers: any[] = ["ID", "Name", "Age", "Gender", "Country"];

    rows = [
      {
        "ID" : "1",
        "Name" : "Rahul",
        "Age" : "21",
        "Gender" : "Male",
        "Country" : "India"
      },
      {
        "ID" : "2",
        "Name" : "Ajay",
        "Age" : "25",
        "Gender" : "Male",
        "Country" : "India"
      },
      {
        "ID" : "3",
        "Name" : "Vikram",
        "Age" : "31",
        "Gender" : "Male",
        "Country" : "Australia"
      },
      {
        "ID" : "4",
        "Name" : "Riya",
        "Age" : "20",
        "Gender" : "Female",
        "Country" : "India"
      },
      {
        "ID" : "5",
        "Name" : "John",
        "Age" : "23",
        "Gender" : "Male",
        "Country" : "USA"
      },
      {
        "ID" : "6",
        "Name" : "Raman",
        "Age" : "27",
        "Gender" : "Male",
        "Country" : "India"
      },
      {
        "ID" : "7",
        "Name" : "Mohan",
        "Age" : "39",
        "Gender" : "Male",
        "Country" : "India"
      },
      {
        "ID" : "8",
        "Name" : "Shreya",
        "Age" : "21",
        "Gender" : "Female",
        "Country" : "India"
      }
    ]

  ngOnInit(): void {
  }

}
