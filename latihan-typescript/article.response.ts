interface article {
    type: string,
    id: string,
    attributes: attributes,
    author: author,
    comments: comments[]
}

interface articleResponse {
    data: article[]
}

interface attributes {
    title: string,
    body: string
    created: string
    updated: string
    published: boolean
}

interface author {
    id: string,
    type: string
    name: string
    age: number
    role: string
}

interface comments {
    name: string,
    body: string
    created: string
    updated: string
}

export let data: articleResponse = {
    "data": [
        {
            "type": "articles",
            "id": "1",
            "attributes": {
                "title": "Tugas Belajar TypeScript",
                "body": "Latihan dulu biar ngerti",
                "created": "2021-12-27T14:56:29.000Z",
                "updated": "2021-12-27T14:56:28.000Z",
                "published": true
            },
            "author": {
                "id": "42",
                "type": "people",
                "name": "John Dear",
                "age": 80,
                "role": "contributor"
            },
            "comments": [
                {
                    "name": "John Dear",
                    "body": "Tes komen",
                    "created": "2021-12-27T14:56:29.000Z",
                    "updated": "2021-12-27T14:56:28.000Z"
                }
            ]
        }
    ]
}

