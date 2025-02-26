import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css'
})
export class HarryPotterComponent implements OnInit {

  spells: any[] = [];

  constructor(private harryPotterService: HarryPotterService) {}
  
  ngOnInit(): void {
    console.log('harry potter api');
    this.fetchSpells();
  }

  // getSpells() {
  //   this.harryPotterService.getSpells().subscribe(spells => this.spells = spells);
  // }

  fetchSpells() {
    this.harryPotterService.getSpells().subscribe(
      (data) => {
        this.spells = data;
        console.log('harry potter spells: ', this.spells);
      }
    )
  }

}
