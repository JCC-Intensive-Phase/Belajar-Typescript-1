"use strict";
exports.__esModule = true;
exports.data = void 0;
exports.data = {
    data: [
        {
            type: "articles",
            id: 1,
            attributes: {
                title: "Tugas Belajar TypeScript",
                body: "Latihan dulu biar ngerti",
                created: new Date("2021-12-27T14:56:29.000Z"),
                updated: new Date("2021-12-27T14:56:28.000Z"),
                published: true
            },
            author: {
                id: 42,
                type: "people",
                name: "John Dear",
                age: 80,
                role: "contributor"
            },
            comments: [
                {
                    name: "John Dear",
                    body: "Tes komen",
                    created: new Date(),
                    updated: new Date()
                },
            ]
        },
        {
            type: "articles",
            id: 2,
            attributes: {
                title: "Tugas Belajar TypeScript",
                body: "Latihan dulu biar ngerti",
                created: new Date("2021-12-27T14:56:29.000Z"),
                updated: new Date("2021-12-27T14:56:28.000Z"),
                published: false
            },
            author: {
                id: 42,
                type: "people",
                name: "John Dear",
                age: 80,
                role: "contributor"
            },
            comments: [
                {
                    name: "John Dear",
                    body: "Tes komen",
                    created: new Date(),
                    updated: new Date()
                },
            ]
        },
    ]
};
