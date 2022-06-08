import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loaderCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public isShowLoader = false;

  constructor(
    
  ){
    this.loaderCounter.subscribe((counter: number) => {
      this.handleLoaderCounter(counter);
    });
  }

  handleLoaderCounter(counter: number) {
    this.isShowLoader = counter !== 0;
  }

  enable(): void {
    const counter = this.loaderCounter.value + 1;
    this.loaderCounter.next(counter);
    this.isShowLoader = true;
  }

  disable(): void {
    const counter = this.loaderCounter.value - 1;
    this.loaderCounter.next(counter);
  }

  disableAll() {
    this.loaderCounter.next(0);
  }
}
