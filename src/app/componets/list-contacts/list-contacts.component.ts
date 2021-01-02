import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contactForm: FormGroup;
  contacts: any = [];
  listContacts: any = [];

  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getContact();
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dateOfBirth: ['']
    });
  }

  open(addContact) {
    this.modalService.open(addContact)
  }

  getContact() {
    this.listContacts = JSON.parse(localStorage.getItem('contactos'))
  }

  saveContact() {
    if (this.contactForm.valid) {
      this.contacts.push(this.contactForm.value);
      localStorage.setItem('contactos', JSON.stringify(this.contacts))
      Swal.fire({
        title: 'En hora buena!',
        text: 'Contacto agregado con exito',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.getContact();
      this.contactForm.reset();
      this.modalService.dismissAll();
    }
  }

  // buscar(e) {
  //   console.log(e.target.value);
  //   this.listContacts = this.listContacts.filter(contact => contact.name == e);
  // }

  delete(index) {
    if (index) {
      this.contacts.splice(index, 1)
      localStorage.setItem('contactos', JSON.stringify(this.contacts))
      this.getContact()
      Swal.fire(
        'Eliminado!',
        'El contacto fue eliminado',
        'success'
      )
    }
  }

  close() { this.modalService.dismissAll(); }

}
