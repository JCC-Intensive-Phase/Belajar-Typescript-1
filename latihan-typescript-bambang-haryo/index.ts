import { getItems } from "./functions";

const getRandomTimeout = () => {
  return Math.random() * 3000 + 1000
}

getItems("news", (resp: any) => console.log(resp), getRandomTimeout())
getItems("articles", (resp: any) => console.log(resp), getRandomTimeout())
getItems("ads", (resp: any) => console.log(resp), getRandomTimeout())
