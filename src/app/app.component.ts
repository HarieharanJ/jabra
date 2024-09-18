import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import "amazon-connect-streams"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const ccpUrl="https://ej-icc-amazonconnect-dev.my.connect.aws/ccp-v2";
    connect.core.initCCP(this.ccpDiv.nativeElement,{
      ccpUrl,
      loginPopup:false,
      loginPopupAutoClose:true,
      softphone:{
        allowFramedSoftphone:true
      }
      
    })
  }
  title = 'app';
  
  @ViewChild('ccpDiv')
  public ccpDiv:ElementRef|any
  
  
}
