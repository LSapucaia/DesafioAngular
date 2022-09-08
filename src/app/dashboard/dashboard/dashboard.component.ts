import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {

    $('#main').children('div').hide()

    $('#select').on('change',function(){
      var selectValor = '#'+$(this).val();
      $('#main').children('div').hide();
      $('#main').children(selectValor).show();
    })
  }

}
