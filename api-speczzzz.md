# Prefix the endpoints below with localhost:4000

## /api/login

#### Method: POST

#### Body: application/json

```json
{
  "username": "string",
  "password": "string"
}
```

#### Response:

```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

## /api/register

#### Method: POST

#### Body: application/json

```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

#### Response:

```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

## /api/whoami

#### Method: GET

#### Response:

```json
{
  "id": "Number",
  "username": "string",
  "email": "string"
}
```

<hr>

## /api/logout

#### Method: DELETE

#### Response: void

<hr>

## get all auctions

## /rest/auctions

#### Method: GET

#### Response:

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
    "winner": null,
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

## get specific auction by id

## /rest/auctions/{id}

#### Method: GET

#### Response:

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
  "winner": null,
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

## /rest/auctions

#### Method: POST

#### Body: formdata

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

#### Response:

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
  "winner": null,
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

## get auctions for current user

## /rest/auctions/user

#### Method: GET

#### Response:

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
    "winner": null,
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

## get won auctions for current user

## /rest/auctions/won

#### Method: GET

#### Response:

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
