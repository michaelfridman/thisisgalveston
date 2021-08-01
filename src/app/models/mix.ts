import { Fix } from './fix';
import { Article } from './article';

export interface Mix {
  data: {
    keywords: String,
    fix: Fix[],
    article: Article[]
  }
};
