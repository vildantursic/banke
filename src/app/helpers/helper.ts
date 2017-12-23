import { cloneDeep, filter } from 'lodash';

export default class Helpers {

  getCategoryArticles(articles, type) {
    let tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }
}
