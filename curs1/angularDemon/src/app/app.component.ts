import { Component } from '@angular/core';
import { AlertaService } from 'src/models/alerta.service';
import { User} from '../models/user';

const HEROES = [
  {id:1, name: 'Iron Man'},
  {id:2, name: 'Dr Strange'},
  {id:3, name: 'The Hulk'},
  {id:4, name: 'Ghost Rider'},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemon';

  descriere:string = "O scurta descriere a aplicatiei"
  culoare:string = 'red';
  nr:number = 0;
  imgSrc:string = 'https://steamuserimages-a.akamaihd.net/ugc/2022709340384064311/D2FA5B9348CC2EF1A3D903E3102FFF7AD2471924/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
  imgSrc2:string = 'https://media.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif'
  valoare:string = 'Valoare input';

  persoana: User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Ion',
  }

  eroi = HEROES;

  constructor(private alertaService: AlertaService){

  }

  showImg(){
    if (this.imgSrc !== ''){
      this.imgSrc = ''
    }
    else {
      this.imgSrc = 'https://steamuserimages-a.akamaihd.net/ugc/2022709340384064311/D2FA5B9348CC2EF1A3D903E3102FFF7AD2471924/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    }
  }

  showImg2(){
    if (this.imgSrc2 !== ''){
      this.imgSrc2 = ''
    }
    else {
      this.imgSrc2 = 'https://media.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif'
    }
  }

  inputCount(){
    if(this.valoare.length > 60){
      this.alertaService.afiseazaMesaj('The number of input is greater than 60.');
      this.valoare = '';
    }
  }
}
