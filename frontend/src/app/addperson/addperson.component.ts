import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../model/person.service';
import { Person } from '../model/person.model';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css'],
  providers:[PersonService]
})
export class AddpersonComponent implements OnInit {

  constructor(private personService: PersonService) {

   }

  ngOnInit() {
    this.resetForm();
    this.refreshPersonList();
  }
  resetForm(form?: NgForm)
  {
    if (form)
      form.reset();
    this.personService.selectedPerson = {
      _id:"",
      name: "",
      job_desc: "",
    }
  }
  onSubmit(form: NgForm){
    if (form.value._id == "") {
     this.personService.postPerson(form.value).subscribe((res) => {
       this.resetForm(form);
       this.refreshPersonList();

     });
   }
   else {
     this.personService.putPerson(form.value).subscribe((res) => {
       this.resetForm(form);
       this.refreshPersonList();

     });
   }
  }
  refreshPersonList() {
    this.personService.getPersonList().subscribe((res) => {
      this.personService.persons = res as Person[];
    });
  }
  onEdit(per: Person) {
   this.personService.selectedPerson = per;
 }

  onDelete(_id: string, form: NgForm) {
     this.personService.deletePerson(_id).subscribe((res) => {
       this.refreshPersonList();
       this.resetForm(form);
     });
  }
}
