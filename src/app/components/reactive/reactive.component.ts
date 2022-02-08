import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma : FormGroup

  constructor(private fb:FormBuilder, private validatorService:ValidatorsService) {
    this.forma = this.fb.group({});
    this.crearForm();
   }

  ngOnInit(): void {
  }

  crearForm(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      paterno:['', [Validators.required, Validators.minLength(3), this.validatorService.noSmith]],
      materno:['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  guardar(){
    console.log(this.forma);    
  }

}
