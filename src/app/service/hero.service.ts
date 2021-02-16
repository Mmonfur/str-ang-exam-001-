import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Hero[] = [
    {
      id: 1,
      name: "Pista",
      superpower: "metszés",
      address: "Fő utca"
    },
  
    {
      id: 2,
      name: "Bodri",
      superpower: "ugatás",
      address: "Cifra utca"
    },
  
    {
      id: 3,
      name: "Mici",
      superpower: "nyávogás",
      address: "Egér út"
    },
  
    {
      id: 4,
      name: "Rigó",
      superpower: "giliszta keresés",
      address: "Park utca"
    },
  
    {
      id: 5,
      name: "Marika",
      superpower: "gyomlálás",
      address: "Fő utca"
    }
  ]

  getAll(): Hero[] {
    return this.heroList;
  };

}
