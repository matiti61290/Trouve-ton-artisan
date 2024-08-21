import { Pipe, PipeTransform } from '@angular/core';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';

@Pipe({
  name: 'sortByRating',
  standalone: true
})
export class SortByRatingPipe implements PipeTransform {

  transform(value: InterfaceArtisans[], order: "asc" | "desc" = "asc"): InterfaceArtisans[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return b.note - a.note;
      } else if (order === "desc") {
        return a.note - b.note
      }
      return 0;
    });
  }

}
