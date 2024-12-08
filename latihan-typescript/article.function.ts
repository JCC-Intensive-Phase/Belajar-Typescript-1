import { data, Article } from "./article.response";

var articles = data.data;

function getPublished(articles: Article[]): Article[] {
    return articles.filter((article) => article.attributes.published == true);
  }

console.log(getPublished(articles));