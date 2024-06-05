import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  ModalController,
  IonButton,
  IonFooter,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular/standalone';

import { PlayerService } from 'src/app/services/player.service';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { DatePipe } from '@angular/common';
import { MiniPlayerComponent } from '../mini-player/mini-player.component';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    ThumbnailComponent,
    DatePipe,
    IonFooter,
    MiniPlayerComponent,
  ],
})
export class PlayerModalComponent implements OnInit, AfterViewInit, OnDestroy {
  private modalCtrl = inject(ModalController);
  public player = inject(PlayerService);

  showPlayer = false;

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.showPlayer = true;
  }

  ngAfterViewInit(): void {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ionViewWillLeave() {
    this.showPlayer = false;
  }

  ngOnDestroy() {}
}
