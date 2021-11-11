## API Specifications

<hr>

## BID

### /api/bid
#### **Method**: POST
#### **Body**
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
### /api/{id}/highest-bid
#### **Method**: GET

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
<hr>

## CHAT

### /add-endpoint-create-chat
#### **Method**: POST
#### **Body**
```json
{
  //send creator from frontend if extra validation of user is done
  //if only findCurrentUser is used, no need to send creator from frontend
  "creator": {
      "id": "Number"
    },
  "receiver": {
      "id": "Number"
    },
  "auction": {
      "id": "Number"
    }
}
```

#### **Response**
```json 
{
"id": "Number",
"creator": {
    "id": "Number",
    "username": "string"
  },
"receiver": {
    "id": "Number",
    "username": "string"
  },
"auction": {
    "id": "Number",
    "title": "string"
  }
}
```

### /add-endpoint-get-chat-by-{id}
#### **Method**: GET
#### **Response**
```json 
{
  "id": "Number",
  "creator": {
    "id": "Number",
    "username": "string"
  },
"receiver": {
    "id": "Number",
    "username": "string"
  },
"auction": {
    "id": "Number",
    "title": "string"
  }
}
```

### /add-endpoint-get-chats-by-currentUser
#### **Method**: GET
#### **Response**
```json 
[
  {
  "id": "Number",
  "creator": {
      "id": "Number",
      "username": "string"
    },
  "receiver": {
      "id": "Number",
      "username": "string"
    },
  "auction": {
      "id": "Number",
      "title": "string"
    }
  }
]
```
<hr>

## MESSEGE
### /add-endpoint/{chatId}/create-message
#### **Method**: POST

**Body**
```json
{
  "writer": {
      "id": "Number",
    },
  "message": "string",
  "createdDate": "Date"
}
```
#### **Response**
```json 
{
  "id": "Number",
  "writer": {
      "id": "Number",
      "username": "string"
    },
  "message": "string",
  "createdDate": "Date"
}
```

### /add-endpoint-get-messages-by-chat-id
#### **Method**: GET

#### **Response**
```json 
[
  {
    "id": "Number",
    "writer": {
      "id": "Number",
      "username": "string"
      },
    "message": "string",
    "createdDate": "Date"
  }
]
```
<hr>

## NOTIFICATION
### /api/notifications
#### **Method**: GET
#### **Response**
```json
  {
    "id": "Number",
    "message": "string",
    "auction": {
      "id": "Number"
    },
    "user": {
      "id": "Number"
    },
    "isRead": "boolean"
  }
```
### /api/notifications/update/all
#### **Method**: PUT
#### **Response**
```json
[
  {
    "id": "Number",
    "message": "string",
    "auction": {
      "id": "Number"
    },
    "user": {
      "id": "Number"
    },
    "isRead": "boolean"
  }
]
```