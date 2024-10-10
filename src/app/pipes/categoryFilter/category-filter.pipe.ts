import { Pipe, PipeTransform } from '@angular/core';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: InterfaceArtisans[], category: string): any[] {
    if (!items) return [];
    if (!category) return [];
    if (category == "") return items;

    return items.filter( it => {
      return it.category.includes(category);
    });
  }
}
