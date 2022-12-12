import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


constructor() { }

onSlideWillChange(){
  console.log("slide will change")
}

onSlideDidChange() {
  console.log("slide did change")
}
}