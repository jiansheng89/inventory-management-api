# Inventory Management API


* [Overview](#overview)
* [Run Locally](#run-locally)
* [Authentication](#authentication)
* [Request & Response Examples](#request--response-examples)
* [Author](#author)

## Overview

This API is developed for usage of [Inventory Management App](https://github.com/jiansheng89/inventory-management-app)

Technology used:
- NodeJS

Database integrated:
- MongoDB

## Run locally

git clone to local, navigate to sorce folder in terminal, run `npm start` or `nodemon` or `pm2 app.js` (depending on which library you prefer.)

API will run on http://localhost:4000 by default

## Authentication

No authentication needed to consume API at the moment.

## Request & Response Examples

### API Resources

- [GET /:version/info](#get-version-info)
- [GET /:version/:entity](#get-version-entity)
- [GET /:version/:entity/:id](#get-version-entity-id)
- [POST /:version/:entity](#post-version-entity)
- [PUT /:version/:entity/:id](#put-version-entity-id)
- [DELETE /:version/:entity/:id](#delete-version-entity-id)

### Path Variable LOV

| Path Variable  | LOV | Remark |
| ------------- | ------------- |---|
| version  | v1  | version number
| entity | sales, product, inventory, outlet, employee | Targer entity to perdoem CRUD|
| id | | Object ID |

### GET /:version/info

Example: http://localhost:4000/v1/info

Response body:

    {
        "sales": 1,
        "product": 3,
        "inventory": [
            {
                "_id": "5e0c53f15026f8003e52ae80",
                "name": "Apple",
                "cost": 3,
                "totalQualtity": 2,
                "alertCount": 10,
                "quantity": [],
                "relatedProduct": [],
                "__v": 0
            },
            {
                "_id": "5e0c53985026f8003e52ae7f",
                "name": "Flour",
                "cost": 50,
                "totalQualtity": 8,
                "alertCount": 5,
                "quantity": [],
                "relatedProduct": [],
                "__v": 0
            },
            {
                "_id": "5e0c53fa5026f8003e52ae81",
                "name": "Banana",
                "cost": 1,
                "totalQualtity": 19,
                "alertCount": 20,
                "quantity": [],
                "relatedProduct": [],
                "__v": 0
            }
        ],
        "outlet": 1,
        "employee": 1
    }


### GET /:version/:entity
Retrieve all data from entity

### GET /:version/:entity/:id
Retrieve data from single entity

### POST /:version/:entity
Insert data to entity

### PUT /:version/:entity/:id
Update specific data in an entity

### DELETE /:version/:entity/:id
Update specific data in an entity


## Author
Jian Sheng - ian.low.jian.sheng@gmail.com
