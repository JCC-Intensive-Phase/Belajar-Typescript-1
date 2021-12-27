"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const article_response_1 = require("../article.response");
let getItems = (type, callback, timeout) => __awaiter(void 0, void 0, void 0, function* () {
    let request = () => {
        return new Promise((resolve, reject) => {
            console.log(`fetching data... [${type}]`);
            let resp = article_response_1.responseData.data.filter(({ type: _type }) => _type === type);
            setTimeout(() => {
                if (resp.length > 0) {
                    resolve({ status: 200, data: resp });
                }
                else {
                    reject({ status: 204, type: type });
                }
            }, timeout);
        });
    };
    try {
        let resp = yield request();
        if (resp.status == 200) {
            if (typeof callback !== 'undefined') {
                callback(resp.data);
            }
        }
    }
    catch (error) {
        console.log(`error: ${error.status} [${error.type}]`);
    }
});
exports.getItems = getItems;
