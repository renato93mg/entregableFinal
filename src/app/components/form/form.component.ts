import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CapitalLetter } from '../customValidator/CapitalLetter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  perfil:FormGroup

  ngOnInit(): void {
    this.perfil=this.fb.group({
      nombre:['',[Validators.required,CapitalLetter()]],
      apellido:['',[Validators.required,CapitalLetter()]],
      edad:['',Validators.required]
    })
  }

  enviar():void{
    if(this.perfil.valid){
      alert('Todo correcto')
    }
  }

}

