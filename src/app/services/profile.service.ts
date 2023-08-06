import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private profileSubject = new BehaviorSubject<string|null>(null);
name$ = this.profileSubject.asObservable();

getName(name:string){
  const message = `Hi ${name}!`;
  this.profileSubject.next(message);
}
  constructor() { }
}
