# Prefix the endpoints below with localhost:4000

## /api/chats
#### Method: GET

#### Response:
```json
[
  {
    "id": "number",
    "auction": {
      "id": "number"
    },
    "creator": {
      "id": "number",
      "username": "string"
    },
    "receiver": {
      "id": "number",
      "username": "string"
    }
  }
]
```
<hr>

## /api/chats
#### Method: POST
#### Body: application/json

```json
{
  "auctionId": "number"
}
```

#### Response:
```json
[
  {
    "id": "number",
    "auction": {
      "id": "number"
    },
    "creator": {
      "id": "number",
      "username": "string"
    },
    "receiver": {
      "id": "number",
      "username": "string"
    }
  }
]
```
<hr>

## /api/messages/{chatId}
#### Method: GET
#### Response:
```json
[
  {
    "id": "number",
    "writer": {
      "id": "number",
      "username": "string"
    },
    "message": "string",
    "createdDate": "Date",
    "isRead": "boolean"
  }
]
```
<hr>

## /api/messages/{chatId}
#### Method: POST
#### Body: application/json

```json
{
  "message": "string"
}
```

#### Response:
```json
{
  "id": "number",
  "writer": {
    "id": "number",
    "username": "string"
  },
  "message": "string",
  "createdDate": "Date",
  "isRead": "boolean"
}
```
<hr>