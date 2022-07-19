import { Component } from '@angular/core';

@Component({
  selector: 'porko',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIRSTANGULARPROJECT';
  name = "Porkodi"
  imgsrc = "https://www.sattvagroup.in/wp-content/uploads/2018/05/Image-Tower.jpg"


  OnClick(){
    alert("button clicked!!!")
  }
}
