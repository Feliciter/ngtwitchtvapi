import { Component, OnInit } from '@angular/core';
import { TwitchSearchService } from './twitch-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitchSearchService]
})
export class AppComponent implements OnInit {
  constructor (private TwitchSearchService: TwitchSearchService ) {

  }
  ngOnInit() {
    this.TwitchSearchService.twitchSearch('').then( (response) => {
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }
  }
