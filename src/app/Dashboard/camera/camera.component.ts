import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stream:any = null;
  trigger: Subject<void> = new Subject();
  get $trigger(): Observable<void>{
    return this.trigger.asObservable();
  }
  snapshot(event:WebcamImage){
    console.log(event);
  }

  checkPermissions(){
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 300,
        height: 800
      }
    }).then((res) => {
      this.stream = res;
    }).catch(err => {
      return err;
    })
  }

  captureImage(){
    this.trigger.next();
  }

}
