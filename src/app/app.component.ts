import { CorService } from './model/services/cor.service';
import { Component, OnInit } from '@angular/core';
import { Icor } from './model/services/icor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers:[CorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  newColor: string = '#000000';
  colors: Icor[] = [];

  constructor(private corService: CorService) {}

  ngOnInit(): void {
    this.colors = this.corService.getColors();
  }

  addColor(): void {
    const newColor: Icor = {
      id: Date.now(),
      value: this.newColor
    };
    this.corService.addColor(newColor);
    this.colors = this.corService.getColors();
  }
}
