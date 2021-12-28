"use strict";
exports.__esModule = true;
var article_response_1 = require("./article.response");
var articles = article_response_1.data.data;
function getPublished(articles) {
    return articles.filter(function (article) { return article.attributes.published == true; });
}
console.log(getPublished(articles));
