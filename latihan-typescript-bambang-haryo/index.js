"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const getRandomTimeout = () => {
    return Math.random() * 3000 + 1000;
};
(0, functions_1.getItems)("news", (resp) => console.log(resp), getRandomTimeout());
(0, functions_1.getItems)("articles", (resp) => console.log(resp), getRandomTimeout());
(0, functions_1.getItems)("ads", (resp) => console.log(resp), getRandomTimeout());
