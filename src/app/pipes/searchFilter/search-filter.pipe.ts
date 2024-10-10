import { Pipe, PipeTransform } from '@angular/core';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: InterfaceArtisans[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return [];
    if (searchText == "") return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText.toLowerCase().trim())
      || it.location.toLowerCase().includes(searchText.toLowerCase().trim())
      || it.specialty.toLowerCase().includes(searchText.toLowerCase().trim());
    });
  }

}
