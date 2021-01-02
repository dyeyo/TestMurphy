import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listContacts: any = [];
  listContactsHappyBry: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllcontacts();
  }

  getAllcontacts() {
    let fechaHoy = new Date();
    let cumpleAnio;
    let dia = fechaHoy.getDate();
    let mes = fechaHoy.getMonth() + 1;
    let diaStr = dia.toString();
    let mesStr = mes.toString();
    if (diaStr.length === 1 && mesStr.length === 1) {
      let diaOne = '0' + diaStr
      let mesOne = '0' + mesStr
      cumpleAnio = fechaHoy.getFullYear() + '-' + mesOne + '-' + diaOne;
    } else {
      cumpleAnio = fechaHoy.getFullYear() + '-' + mes + '-' + dia;
    }
    this.listContacts = JSON.parse(localStorage.getItem('contactos'))
    this.listContactsHappyBry = this.listContacts.filter(contact => contact.dateOfBirth == cumpleAnio);
  }

}
