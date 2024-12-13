import { Injectable } from '@angular/core';
import { Icor } from './icor';
import { MOCK_COLORS } from '../data/mock-dados';

@Injectable({
  providedIn: 'root'
})
export class CorService {
  private localStorageKey = 'colors';

  getColors(): Icor[] {
    const colors = localStorage.getItem(this.localStorageKey);
    if (colors) {
      return JSON.parse(colors);
    } else {
      // Retorna dados mocados e salva no localStorage
      localStorage.setItem(this.localStorageKey, JSON.stringify(MOCK_COLORS));
      return MOCK_COLORS;
    }
  }

  addColor(color: Icor): void {
    const colors = this.getColors();
    colors.push(color);
    localStorage.setItem(this.localStorageKey, JSON.stringify(colors));
  }
}
