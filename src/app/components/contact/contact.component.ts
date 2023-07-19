import { Component, ViewChild } from '@angular/core';
//import * as $ from 'jquery';
declare const $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public widthSlider: number | undefined;
  public anchuraToSlider!: any;
  public captions: boolean;
  public autor!: any;

  @ViewChild('textos', {static: true}) textos: any;

  constructor(){
    this.captions = true;
  }

  ngOnInit(){
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;

    console.log(this.textos.nativeElement);
    console.log(opcion_clasica);
  } 

  cargarSlider(){
    setTimeout(() => {
      this.anchuraToSlider = this.widthSlider;
    }, 1);
    this.anchuraToSlider = false;
  }

  getAutor(event:any){
    this.autor = event;
    console.log(event);
  }

}
