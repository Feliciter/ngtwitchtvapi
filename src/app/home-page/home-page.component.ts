

import { Component, OnInit } from '@angular/core';
import { TwitchSearchService } from '../twitch-search.service';
import { TwitchSearch } from '../twitch-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent  implements OnInit {
  searchResults: TwitchSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;
  constructor(private TwitchSearchService: TwitchSearchService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.twitchSearch();
    });
    this.route.data.subscribe( (result) => {
      this.title = result.title;
    });
  }

  twitchSearch = () => {
    this.TwitchSearchService.twitchSearch(this.searchQuery).then( (response) => {
      this.searchResults = response;
     // console.dir (this.searchResults.featured.length);
    }, (error) => {
      // alert('Error:' + error.statusText);

     // console.log ('Error:' + error.statusText);


    });
  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery]);
  }

}
