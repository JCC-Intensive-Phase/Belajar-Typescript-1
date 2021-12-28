import { data, Article } from "./article.response";

var articles = data.data;

/* Generic Function */
function getPublished(articles: Article[]): Article[] {
  return articles.filter((article) => article.attributes.published == true);
}

function getArticle<Type>(article: Type): Type {
  return article
}

console.log(getPublished(articles));
console.log(getArticle);
