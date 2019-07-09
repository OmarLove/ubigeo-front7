import { Component, OnInit } from '@angular/core';
import { UbigeoService } from './ubigeo.service';
import { IUbigeo } from '../shared/interface/ubigeo';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.scss']
})
export class UbigeoComponent implements OnInit {

  public ubigeos: IUbigeo[]=[];

  public ubigeosDepartamento: IUbigeo[]=[];
  public ubigeosProvincia: IUbigeo[]=[];
  public ubigeosDistrito: IUbigeo[]=[];

  constructor(private ubigeoService: UbigeoService) { }

  ngOnInit() {
    this.getUbigeos();
  }

  getUbigeos(){
    this.ubigeoService.getUbigeos().subscribe(
      (response: IUbigeo[]) => {
        this.ubigeos = response
        for(var i = 0; i < this.ubigeos.length; i++){
          if (this.ubigeos[i].tipo == 1){
            this.ubigeosDepartamento.push(this.ubigeos[i]);
          }
          if (this.ubigeos[i].tipo == 2){
            this.ubigeosProvincia.push(this.ubigeos[i]);
          }
          if (this.ubigeos[i].tipo == 3){
            this.ubigeosDistrito.push(this.ubigeos[i]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
