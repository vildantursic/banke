import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { sortBy, filter, includes } from 'lodash';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args[0].length > 0) {
      return value.filter(article => {
        return article.categories.filter(category => {
          return args[0].filter(arg => arg === category).length !== 0;
        }).length !== 0
      })
    } else {
      return value;
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

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).format(args[0])
  }
}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort(function(a, b) {
      a = new Date(a.created_at);
      b = new Date(b.created_at);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }
}

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    return filter(value, function (obj) {
      if (args[2]) {
        return includes(obj[args[0][0]].toLowerCase(), args[1].toLowerCase()) ||
               includes(obj[args[0][1]].toLowerCase(), args[1].toLowerCase())
      } else {
        return includes(obj[args[0]].toLowerCase(), args[1].toLowerCase())
      }
    });
  }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
