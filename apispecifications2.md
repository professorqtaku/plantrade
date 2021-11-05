## API Specifications

<hr>

## BID

### /api/bid
#### **Method**: POST

```json
{
  "userId": "Number",
  "auctionId": "Number",
  "price": "number",
  "createdDate": "Date"
}
```

#### **Response**

```json
{
  "id": "Number",
  "user": {
    "id": "Number",
    "username": "string",
  },
  "auction": {
    "id": "Number",
    "title": "string",
    "description": "string",
    "startPrice": "Number",
    "status": "string",
    "endDate": "Date",
    "host": {
      "id": "Number",
      "username": "string",
    },
    "winner": {
      "id": "Number",
      "username": "string"
      },
    "Category": [
      {
        "id": "Number",
        "name": "string"
      }
    ],
    "images": [
      {
        "id": "Number",
        "path": "string",
        "auction": {
          "id": "Number"
        }
      }
    ]
  },
  "price": "Number",
  "createdDate": "Date"
}
```
<hr>

## CATEGORY

### /rest/categories
#### **Method**: GET

#### **Response**
```json
[
  {
    "id": "Number",
    "name": "string"
  }
]
```

<hr>

## SEARCH

### /rest/auctions/search?
**Optionals**
* title=string 
* status=string
* category=string 

**Notis, optinals can be combined** <br>
*example:*
#### /rest/auctions/search?title=string&category=string&status=string
#### **Method**: GET

#### **Response**

```json
[
  {
    "id": "Number",
    "title": "string",
    "description": "string",
    "startPrice": "Number",
    "status": "string",
    "endDate": "Date",
    "host": {
      "id": "Number",
      "username": "string"
    },
    "winner": {
      "id": "Number",
      "username": "string"
    },
    "categories": [
      {
        "id": "Number",
        "name": "string"
      }
    ],
    "bids": [
      {
        "id": "Number",
        "user": {
          "id": "Number",
          "username": "string"
        },
        "price": "number",
        "createdDate": "Date"
      }
    ],
    "images": [
      {
        "id": "Number",
        "path": "string",
        "auction": {
          "id": "Number"
        }
      },
      {
        "id": "Number",
        "path": "string",
        "auction": {
          "id": "Number"
        }
      }
    ]
  }
]
```