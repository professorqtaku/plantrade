# Prefix the endpoints below with localhost:4000

## /api/login

#### Method: POST

#### Body: application/json

```json
{
  "username": "String",
  "password": "String"
}
```

#### Response:

```json
{
  "id": "number",
  "username": "String",
  "email": "String"
}
```

<hr>

## /api/register

#### Method: POST

#### Body: application/json

```json
{
  "id": "number",
  "username": "String",
  "email": "String"
}
```

#### Response:

```json
{
  "id": "number",
  "username": "String",
  "email": "String"
}
```

<hr>

## /api/whoami

#### Method: GET

#### Response:

```json
{
  "id": "number",
  "username": "String",
  "email": "String"
}
```

<hr>

## /api/logout

#### Method: DELETE

#### Response: void

<hr>
