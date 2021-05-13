import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private addInteraction = new Subject<string>()
  add$ = this.addInteraction.asObservable()
  constructor() { }

  sendMessage(message: string) {
    this.addInteraction.next(message)
  }
}
