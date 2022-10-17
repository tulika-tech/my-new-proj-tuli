import { Component } from '@angular/core';
import { DataService } from './data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<h1>hey guys</h1>
  <p>{{myobject.age}}</p>
  <ul><li *ngIf = "!myarray">yeah not i exist</li></ul>
  <ul><li *ngIf = "myarray">yeah i exist</li></ul>
  <ul><li *ngIf = "myarray1 == 'TULIKA'">yeah tulika exist</li></ul>
  <ul><li *ngIf = "myarray1 != 'TULIKA'">yeah tulika no exist</li></ul>
  <ul><li *ngIf = "myarray1 == 'TULIKA1'">yeah tulika1 exist</li></ul>
  <ul><li *ngIf = "myarray2; else othertemp1">yeah </li></ul>

  <ng-template #othertemp1> NO </ng-template>
  <div *ngIf = "myarray3; then temp1  else temp2">yeah </div>
  

  <ng-template #temp1> test yes </ng-template>
  <ng-template #temp2> test NO </ng-template>
  <img src="{{ angularlogo}}">
  <img [src]="angularlogo">
  <img bind-src="angularlogo">
  <button [disabled] = "buttonstatus">my button </button>
  <button [disabled] = "buttonstatus1">my button </button>
  <button [disabled] = "buttonstatus2 == 'e'">my button </button>
  <button [disabled] = "buttonstatus3 == 'disabled'">my button </button>
  <h1 [class] = "titleclass">hello</h1>
  <h1 [class.red-title] = "titleclass1">hello1</h1>
  <h1 [ngClass]= "titleclass2">hello1</h1>
  <h1 [style.color]= "titleclass3">hello2</h1>
  <h1 [style.font-size]= "titleclass4">hello3</h1>
  <h1 [style.color]= "titleclass5? 'green':'yellow'">hello3</h1>
  <h1 [ngStyle]= "titleclass6">hello3</h1>
  <p>{{someProperty}}</p>
  <p [@myawsomeanimations]= 'state' (click) = "animateme()"> i will animate </p>
  
  `,
  //styleUrls: ['./app.component.css']
  styles: [`
  p{
    width: 200px;
    background:pink;
    text-align:center;
    font-size:15 em;
  }
  h1  {
    text-decoration:underline;
  }
  .red-title
  {
    color:red;
  }
  .large-title
  {
    font-size:4em;
  }
  `],
  animations:[
    trigger('myawsomeanimations',[
    state('small',style({transform:'scale(1)',})),
    state('small',style({transform:'scale(1.2)',})),
    transition('small => large', animate('300ms ease-in')),
  ])
  ]


  

})
export class AppComponent {

  

  myobject = {
     gender: 'female',
     age: 28
  }
  myarray = ['him','hers','yours']
  myarray1 = 'TULIKA1';
  myarray2 = false;
  // myarray3 = true;
  //myarray3 = "";
  myarray3 = true;
  angularlogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  buttonstatus = true
  buttonstatus1 = false
  buttonstatus2 = "e1";
  buttonstatus3 = "disabled";
  titleclass = "red-title";
  titleclass1 = true;
  titleclass2 ={
    'red-title':true,
    'large-title':true
  }
  titleclass3 = 'pink'
  titleclass4 = '4em'
  titleclass5 = true
  titleclass6 = {

    'color':'orange',
    'font-size':'3em'

    
  }

  constructor(private DataService: DataService)
    {
      
    }
    someProperty:string = '';
    ngOnInit()
    {
      console.log(this.DataService.cars);
      this.someProperty = this.DataService.mydata();
    }

    state: string = 'small'
    animateme()
    {
      this.state = (this.state === 'small' ? 'large' :'small');
    }
}
