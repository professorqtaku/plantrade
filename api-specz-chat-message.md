# Prefix the endpoints below with localhost:4000

## /api/chats
#### Method: GET

#### Response:
```json
[
  {
    "id": "long",
    "auction": {
      "id": "long"
    },
    "creator": {
      "id": "long",
      "username": "string"
    },
    "receiver": {
      "id": "long",
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
  "auction": {
    "id": "long"
  },
  "receiver": {
    "id": "long",
    "username": "string"
  }
}
```

#### Response:
```json
[
  {
    "id": "long",
    "auction": {
      "id": "long"
    },
    "creator": {
      "id": "long",
      "username": "string"
    },
    "receiver": {
      "id": "long",
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
    "id": "long",
    "writer": {
      "id": "long",
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
  "id": "long",
  "writer": {
    "id": "long",
    "username": "string"
  },
  "message": "string",
  "createdDate": "Date",
  "isRead": "boolean"
}
```
<hr>