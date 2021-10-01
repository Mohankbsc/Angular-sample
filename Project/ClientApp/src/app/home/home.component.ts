import { Component } from '@angular/core';

interface Information {
  name: string;
  item: string;
  units: number;
  unitcost: number;
  total: number;
  status: string;
}

const CustomerInformations: Information[] = [
  {
    name: 'Smith',
    item: 'Desk',
    units: 2,
    unitcost: 125.00,
    total: 250.00,
    status: "Success"
  },
  {
    name: 'Kivell',
    item: 'Desk',
    units: 5,
    unitcost: 125.00,
    total: 625.00,
    status: "Success"
  },
  {
    name: 'Gill',
    item: 'Pencil',
    units: 7,
    unitcost: 1.29,
    total: 9.03,
    status: "Failed"
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  inputvalue: string = "";
  private options: string[] = ["Red", "Blue", "Black"];
  selectedName = "Red";
  mySwitch = "one";

  items = ["sales@ciglobaltechnologies.com", "+91-44-48646685", "+1-917-546-9237"];
  showData = false;
  message = "MON-FRI, 10.00AM - 7.00PM";

  constructor() { }
  ngOnInit() { }

  submitclick() {
    alert(this.inputvalue)
    alert(this.selectedName)
    console.log(Error)
  }

  deleteRow(name) {
    for (let i = 0; i < this.informations.length; i++) {
      if (this.informations[i].name === name) {
        this.informations.splice(i,1);
      }
    }
  }

  public toggle() {
    this.showData = !this.showData;
  }

  informations = CustomerInformations;

}
