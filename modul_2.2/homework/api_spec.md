# Sptify API Spec

## Create Song

Endpoint POST http://localhost:3000/playlist

Accept: application/json

Content-Type: application/json

Request Body

```json
{
  "title": "Photograph",
  "artists": ["Edd Sheren", "Annie Marie"],
  "url": "link spotify"
}
```

Response (success)

```json
{
  "message": "Song added to playlist",
  "data": {
    "title": "Photograph",
    "artists": ["Edd Sheren", "Annie Marie"],
    "url": "link spotify"
  }
}
```

Response (error)

```json
{
  "message": "Song already exist"
}
```

## Play song from your playlist

Endpoint : GET http://localhost:3000/playlist/{title}

Response Body (Success) :

```json
{
  "message": "Song found",
  "data": "link spotify"
}
```

Response Body (Failed, 404) :

```json
{
  "message": "Song not found"
}
```

## Get List of songs

Endpoint : GET http://localhost:3000/playlist

Response Body (Success) :

```json
{
  "message": "success",
  "data": [
    {
      "title": "Lemon Tree",
      "artists": ["Fools Garden", "Willi Freibier"],
      "url": "link spotify lemon tree"
    },
    {
      "title": "Photograph",
      "artists": ["Edd Sheren", "Annie Marie"],
      "url": "link spotify"
    }
  ]
}
```

Response Body (Failed, 404) :

```json
{
  "message": "Song not found"
}
```
