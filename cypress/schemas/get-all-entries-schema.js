export const getAllEntriesSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "Items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "cat": {
                        "type": "string"
                    },
                    "desc": {
                        "type": "string"
                    },
                    "id": {
                        "type": "number"
                    },
                    "img": {
                        "type": "string"
                    },
                    "price": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    }
                },
                "required": [
                    "cat",
                    "desc",
                    "id",
                    "img",
                    "price",
                    "title"
                ]
            }
        },
        "LastEvaluatedKey": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                }
            },
            "required": [
                "id"
            ]
        }
    },
    "required": [
        "Items",
        "LastEvaluatedKey"
    ]
};