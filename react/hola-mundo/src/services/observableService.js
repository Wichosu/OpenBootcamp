import { Observable } from 'rxjs';

export const getNumbers = new Observable(subscriber => {
  // We emit values:
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete(); //Finally, the Observable completes & finishes
  }, 1000); //Wait 1s
})