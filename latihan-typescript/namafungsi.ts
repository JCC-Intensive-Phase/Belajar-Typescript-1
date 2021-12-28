import { data } from './article.response';

function what<Type>(arg: Type): Type {
    return arg
}
    console.log(what(data))
