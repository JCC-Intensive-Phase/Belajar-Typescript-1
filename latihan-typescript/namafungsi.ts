import { articles } from './article.response';
import type { ArticlesType } from './articles.type';

const getArticles = <T>(articles: T): T => {
  return articles;
};

const result = getArticles<ArticlesType[]>(articles);
console.info(result);
