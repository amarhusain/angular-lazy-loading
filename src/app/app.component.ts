import { Component, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
   

  constructor( ) {

  } // End of Constructor 

  
ngOnInit(){

  
   
}



sendMessage(): void {
  // send message to subscribers via observable subject
  // this._layoutService.sendMessage(false);
  this.clearMessages();
}

clearMessages(): void {
  // clear messages
  // this._layoutService.clearMessages();
}

public onIndexChange(index: number) {
  console.log('Swiper index: ', index);
}


}
