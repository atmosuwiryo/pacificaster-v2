import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  ModalController,
} from '@ionic/angular/standalone';
import { IEpisode } from 'src/app/interfaces/episode.interface';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { PodcastService } from 'src/app/services/podcast.service';
import { IPodcast } from 'src/app/interfaces/podcast.interface';

@Component({
  selector: 'app-episode-info-modal',
  templateUrl: './episode-info-modal.component.html',
  styleUrls: ['./episode-info-modal.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    DatePipe,
    PlayButtonComponent,
    ThumbnailComponent,
  ],
})
export class EpisodeInfoModalComponent implements OnInit {
  @Input() episode!: IEpisode;

  podcast!: IPodcast;

  isModalOpen = false;
  private podcastService = inject(PodcastService);

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.podcast =
      this.podcastService.findPodcast(this.episode.podcast_id) ??
      ({} as IPodcast);
  }

  setOpen(isOpen: boolean) {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
