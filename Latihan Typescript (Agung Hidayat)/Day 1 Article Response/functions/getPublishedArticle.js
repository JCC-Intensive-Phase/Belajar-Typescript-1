"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAuthor(articles) {
    let data = articles.filter((article) => {
        return article.attributes.published === true;
    });
    return data;
}
exports.default = getAuthor;
