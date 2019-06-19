import { List } from 'src/app/models/list.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {
  /**
   * Returns all the list which completed field value is equals
   * to the pipe's "completed" argument.
   * @param lists 
   * @param completed 
   */
  transform(lists: List [], completed: boolean = true): List [] {
     return lists.filter(list => list.completed === completed );
  }

}
