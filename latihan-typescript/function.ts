import { data } from "./article.response";

const showArticle = <type>(article: type):type => {
    return article;
};
// const addArticle = <type>(article:type):type => {
//     return article.
// }

console.log(showArticle(data.data))