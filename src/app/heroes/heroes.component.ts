import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  name = "clemy";
  constructor() { }

  ngOnInit(): void {
  }
  direBonjour() {
    console.log("bonjour");

}
}
