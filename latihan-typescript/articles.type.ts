type AttributeType = {
  title: string;
  body: string;
  created: string;
  updated: string;
  published: boolean;
};

type AuthorType = {
  id: number;
  type: string;
  name: string;
  age: number;
  role: string;
};

type CommentsType = {
  name: string;
  body: string;
  created: string;
  updated: string;
};

export type ArticlesType = {
  type: string;
  id: number;
  attributes: AttributeType;
  author: AuthorType;
  comments: CommentsType[];
};
