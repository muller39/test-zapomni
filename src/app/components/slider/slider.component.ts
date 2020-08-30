import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private _hhtpS: HttpService) { }

  ngOnInit(): void {
    this._hhtpS.getToken().pipe(
      map(res => {
        console.log(res);
        console.log(res.headers);
      })
    ).subscribe();
  }

}
