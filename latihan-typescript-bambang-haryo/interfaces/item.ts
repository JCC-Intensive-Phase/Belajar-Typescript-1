import { Attributes } from "./attributes"
import { Author } from "./author"
import { Comment } from "./comment"

export interface Item {
  type: string;
  id: string;
  attributes: Attributes;
  author: Author;
  comments: Comment[];
}