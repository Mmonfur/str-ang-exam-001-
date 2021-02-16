import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList: Hero[] = [];

  constructor(private heroService: HeroService,) { }

  ngOnInit(): void {
    this.heroList = this.heroService.getAll();
    }
  }