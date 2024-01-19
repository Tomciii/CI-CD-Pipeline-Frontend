import {Component, OnInit} from '@angular/core';
import {ArtFacade} from "../../facades/art.facade";
import {Observable} from "rxjs";
import {Art} from "../../model/art.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  artList: Observable<Art[]> = new Observable<Art[]>();

  constructor(private artFacade: ArtFacade) {
    this.artList;
}

  ngOnInit(): void {
    this.artList = this.artFacade.getArtList();
  }
}
