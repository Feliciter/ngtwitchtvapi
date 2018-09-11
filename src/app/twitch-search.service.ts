import { Injectable } from '@angular/core';
import { TwitchSearch } from './twitch-search';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class TwitchSearchService {

  cachedValues: Array<{
    [query: string]:  TwitchSearch
}> = [];

  constructor(private http: HttpClient) { }

  twitchSearch = (query: string) => {
    const promise = new Promise<TwitchSearch>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      }
      else {
         // this.http.get('https://wind-bow.glitch.me/twitch-api/streams/' + query)

          this.http.get('https://wind-bow.glitch.me/twitch-api/streams/featured/'  )
        // this.http.get('https://api.github.com/search/repositories?q=' + query)
        // https://wind-bow.glitch.me/twitch-api/streams/featured
        // this.http.get('https://wind-bow.glitch.me/twitch-api/streams/featured?' + query)
                .toPromise()
           .then( (response) => {
            resolve(response as TwitchSearch);
        }, (error) => {
            reject(error);
        });
      }

    });
    return promise;

  }

}
