import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args[0] === 'all') {
      return value;
    } else {
      return value.filter(article => article.slug !== 'ad' ? article.categories.filter(category => args.filter(arg => arg === category).length !== 0).length !== 0 : null)
    }
  }

}

@Pipe({
  name: 'textCut'
})
export class TextCutPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('').length < args[0] ? value : value.split('').slice(0, args[0]).join('') + '...'
  }

}
