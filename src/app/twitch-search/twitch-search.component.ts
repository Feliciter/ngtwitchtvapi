import { Component, OnInit } from '@angular/core';
import { TwitchSearchService } from '../twitch-search.service';
import { TwitchSearch } from '../twitch-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-twitch-search',
  templateUrl: './twitch-search.component.html',
  styleUrls: ['./twitch-search.component.css']
})

export class TwitchSearchComponent implements OnInit {
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
    }, (error) => {
      // alert('Error:' + error.statusText);

      console.log ('Error:' + error.statusText);
    });
  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery]);
  }

}
