import { asNativeElements, Component } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'Angular-task';
  // name = 'Aasim';
  // getName() {
  //   alert('Mohammed Aasim');
  // }
  // getValue(x: any, y: any) {
  //   alert(x + y);
  // }
  // crntVal = '';
  // event(evt: any) {
  //   console.log(evt);
  //   this.crntVal = evt;
  // }
  // color = 'powderblue';
  // name = ['kumar', 'senthil', 'basha', 'tommy', 'ahmed'];

  objName = [
    { name: 'md Aasim', age: 21 },
    { name: 'md Aasif', age: 22 },
    { name: 'Ibrahim', age: 23 },
    { name: 'Mufeez', age: 25 },
  ];

  color = 'blue';
  Err = false;
  styleBinding() {
    this.color = 'orange';
  }
}
