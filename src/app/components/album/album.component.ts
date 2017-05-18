import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Artist} from '../.././Artist';
import {Album} from '../.././Album';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  moduleId:module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  providers:[SpotifyService]
})
export class AlbumComponent implements OnInit  { 

    //artist:Artist[];
    album:Album[];
    id:string;
    minutes:number;


findDuration(milliseconds:number){


    this.minutes = ((milliseconds / (1000*60)) % 60);
    return this.minutes.toFixed(1);

    }


constructor(
    private _spotifyService: SpotifyService,
    private _route:ActivatedRoute)
    {}

    ngOnInit(){

        this._route.params
        .map(params => params['id']) // extracted id values
        // from params in activated route
        .subscribe(id => { // subscribed that id 
            this._spotifyService.getAlbum(id)
            .subscribe(album => {
            // finally got the album
                this.album=album;
                console.log(album);
            } )

        })  

        
    }



}
