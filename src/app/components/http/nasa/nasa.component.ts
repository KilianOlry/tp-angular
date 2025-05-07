import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NasaService} from '@/services/http/nasa.service';
import {CommonModule} from '@angular/common';

export interface NasaDataInterface {
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  thumbnail_url: string;
}

@Component({
  selector: 'app-nasa',
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NasaComponent implements OnInit {
  nasaData!: NasaDataInterface;
  loading: boolean = true;

  constructor(private nasaService: NasaService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.nasaService.getPictureOfTheDay().subscribe({
      next: (data: NasaDataInterface) => {
        this.nasaData = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
