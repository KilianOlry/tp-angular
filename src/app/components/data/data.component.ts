import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '@/services/http/data.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-data',
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent implements OnInit {
  posts: any[] = [];
  loading = true;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.loading = false;
      }
    });
  }
}
