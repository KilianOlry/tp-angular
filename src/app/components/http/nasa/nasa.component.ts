import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NasaService} from '@/services/http/nasa.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-nasa',
  imports: [CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NasaComponent implements OnInit {
  photo: any;
  loading: boolean = true;

  constructor(private nasaService: NasaService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.nasaService.getPictureOfTheDay().subscribe({
      next: (data) => {
        this.photo = data;
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
