# API Specifications Plantrade
## *Prefix for the following endpoints*: ***localhost:4000***
<br>

## AUTH
### /api/login
#### **Method**: POST
**Body**: application/json
```json
{
  "username": "string",
  "password": "string"
}
```
#### **Response**:
```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

### /api/register
#### **Method**: POST
**Body**: application/json

```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

#### **Response**:
```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

### /api/whoami
#### **Method**: GET
**Response**:
```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

### /api/logout
#### **Method**: DELETE
#### **Response**: void

<hr>

## USER
### /rest/users
*send in one to many fields to update on current user*
#### **Method**: POST
**Body**: application/json
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### **Response**
```json
{
  "id": "Number",
  "username": "string",
  "email": "string",
}
```
<hr>

## AUCTION

### /rest/auctions
*get all auctions*
#### **Method**: GET
**Response**:
```json
[
  {
    "id": "Number",
    "title": "string",
    "description": "string",
    "startPrice": "Number",
    "status": "OPEN/NOT_SOLD/SOLD",
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
        }
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
  }
]
```

<hr>


### /rest/auctions/{id}
*get specific auction by id*
#### **Method**: GET
**Response**:
```json
{
  "id": "Number",
  "title": "string",
  "description": "string",
  "startPrice": "Number",
  "status": "OPEN/NOT_SOLD/SOLD",
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
      }
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
}
```

<hr>

### /rest/auctions
#### **Method**: POST
**Body**: formdata

```json
auction:
    {
        "title": "string",
        "description": "string",
        "startPrice": "Number",
        "endDate": "Date",
    }
),
categories:
    [
        {
            "id": "Number",
            "name": "string"
        }
    ]
    ),
files: List<MultipartFile> files
```
**Response**:
```json
{
  "id": "Number",
  "title": "string",
  "description": "string",
  "startPrice": "Number",
  "status": "OPEN",
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
  "bids": [],
  "images": []
}
```

<hr>


### /rest/auctions/user
*get all auctions for current user*
#### **Method**: GET
**Response**:
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
        }
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
  }
]
```

<hr>

### /rest/auctions/won
*get won auctions for current user*
#### **Method**: GET
**Response**:

```json
[
  {
    "id": "Number",
    "title": "string",
    "description": "string",
    "startPrice": "Number",
    "status": "OPEN/NOT_SOLD/SOLD",
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
        }
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
  }
]
```

<hr>

## BID

### /api/bid
*create a bid*
#### **Method**: POST
**Body**: application/json

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
*get highest bid of a specific auction*
#### **Method**: GET

**Response**
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

### /api/chats
*create a chat regarding an auction*
#### **Method**: POST
 **Body**: application/json
```json
{
  "auctionId": "Number"
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

### /api/chats
*get chats for current user*
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
### /api/messages/{chatId}
*post a new message*
#### **Method**: POST

**Body**: application/json
```json
{
  "message": "string",
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

### /api/messages/{chatId}
*get all messages from a chat*
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
### /api/notifications/update/is-read/all
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

<hr>

## IMAGE

### /api/upload
*upload images*
#### **Method**: POST
**Response**
```json
[

]
```