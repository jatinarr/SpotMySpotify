import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Artist} from '../.././Artist';
import {Album} from '../.././Album';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  moduleId:module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit  { 

    artist:Artist[];
    albums:Album[];
    id:string;


constructor(
    private _spotifyService: SpotifyService,
    private _route:ActivatedRoute)
    {}

    ngOnInit(){

        this._route.params
        .map(params => params['id']) // extracted id values
        // from params in activated route
        .subscribe(id => { // subscribed that id 
            this._spotifyService.getArtist(id)
            .subscribe(artist => {
            // finally got the artist 
                this.artist=artist;
            } )

            this._spotifyService.getAlbums(id)
            .subscribe(albums => {
            // finally got the artist 
                this.albums=albums.items;
            } )

        })  

        
    }



}
