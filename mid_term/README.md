# Mid Term Project (Backend Only)

## 1. Database Structure

The database structure for the Tokopedia Play Clone is designed using MongoDB. It consists of three collections: `videos`, `products`, and `comments`.

### Collection: `videos`

- `videoID` : `String`, Unique identifier for the video.
- `title` : `String`, Title of the video.
- `thumbnail` : `String`, URL of the video thumbnail.
- `youtubeID` : `String`, YouTube video ID for embedding the video.

### Collection : `products`

- `productID` : `String`, Unique identifier for the product.
- `videoID` : `String`, Reference to the video document in the "videos" collection.
- `title` : `String`, Title of the product.
- `price` : `Number`, Price of the product.
- `link` : `String`, Link to the product.

### Collection : `comments`

- `commentID` : Unique identifier for the comment.
- `videoID` : Reference to the video document in the "videos" collection.
- `name` : Name of the commenter.
- `comment` : Comment text.
- `timestamp`: Timestamp indicating when the comment was submitted.

## 2. API Structure

## Endpoint: api/v1/videos (GET)

Endpoint ini digunakan untuk mengambil daftar semua video yang ada dalam database.
Request:

- Method: GET
- Endpoint: /api/v1/videos

Response:

- Status Code: 200 OK
- Body: Array JSON berisi daftar video dengan masing-masing video memiliki atribut sebagai berikut:
  - videoID: String, ID unik untuk video.
  - title: String, judul video.
  - thumbnail: String, URL gambar thumbnail video.
  - youtubeID: String, ID video di YouTube.

## Endpoint: api/v1/products (GET)

Endpoint ini digunakan untuk mengambil daftar semua produk yang ada dalam database.

Request:

- Method: GET
- Endpoint: /api/v1/products
- Request Parameters (Opsional):
- videoID: String, ID unik untuk video.

Response:

- Status Code: 200 OK
- Body: Array JSON berisi daftar produk dengan masing-masing produk memiliki atribut sebagai berikut:
  - productID: String, ID unik untuk produk.
  - videoID: String, ID unik untuk video terkait produk tersebut.
  - title: String, judul produk.
  - price: Number, harga produk.
  - link: String, URL tautan produk.

## Endpoint: api/v1/comments (GET)

Endpoint ini digunakan untuk mengambil daftar semua komentar yang ada dalam database.

Request:

- Method: GET
- Endpoint: /api/v1/comments
- Request Parameters (Opsional):
  - videoID: String, ID unik untuk video.

Response:

- Status Code: 200 OK
- Body: Array JSON berisi daftar komentar dengan masing-masing komentar memiliki atribut sebagai berikut:
  - commentID: String, ID unik untuk komentar.
  - username: String, nama pengguna yang membuat komentar.
  - comment: String, isi komentar.
  - timestamp: String, waktu komentar dibuat dalam format ISO 8601.

## 3. List API request and response

#Videos

- Videos object

```
{
  videoId: String,
  title: String,
  thumbnail: String,
  youtubeId: String
}
```

## **GET /api/v1/videos**

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**  
   **Code:** 200  
   **Content:**

  ```json
  [
    {
      "videoID": "5f9b2a3b9d9d9b1b1b9d9d9b",
      "title": "Video Title",
      "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
      "youtubeID": "VIDEO_ID"
    },
    {
      "videoID": "5f9b2a3b9d9d9b1b1b9d9d9c",
      "title": "Video Title",
      "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
      "youtubeID": "VIDEO_ID"
    }
  ]
  ```

#Products

- Products object

```json
{
  "productID": "String",
  "videoID": "String",
  "title": "String",
  "price": "Number",
  "link": "String"
}
```

## **GET /api/v1/products**

Returns all products in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

  ```json
  [
    {
      "productID": "5f9b2a3b9d9d9b1b1b9d9d9b",
      "videoID": "5f9b2a3b9d9d9b1b1b9d9d9b",
      "title": "Product Title",
      "price": 100000,
      "link": "https://tokopedia.com/product"
    },
    {
      "productID": "5f9b2a3b9d9d9b1b1b9d9d9c",
      "videoID": "5f9b2a3b9d9d9b1b1b9d9d9b",
      "title": "Product Title",
      "price": 100000,
      "link": "https://tokopedia.com/product"
    }
  ]
  ```

#Comments

- Comments object

```json
{
  "commentID": "String",
  "videoID": "String",
  "username": "String",
  "comment": "String",
  "timestamp": "Date"
}
```

## **GET /api/v1/comments**

Returns all comments in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

  ```json
  [
    {
      "commentID": "201",
      "username": "User123",
      "comment": "Great video!",
      "timestamp": "2023-07-25T12:34:56Z"
    },
    {
      "commentID": "202",
      "username": "ProductLover",
      "comment": "This video is very informative.",
      "timestamp": "2023-07-25T15:22:10Z"
    }
  ]
  ```

  ## POST /api/v1/submit-comment

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

  ```json
  {
    "videoID": "5f9b2a3b9d9d9b1b1b9d9d9b",
    "username": "User123",
    "comment": "Great video!"
  }
  ```

- **Success Response:**  
   **Code:** 201  
   **Content:**
  ```json
  [
    {
      "commentID": "203",
      "username": "User123",
      "comment": "Great video!",
      "timestamp": "2023-07-25T12:34:56Z"
    }
  ]
  ```
  **Code:** 200  
   **Content:**
  ```json
  {
    "status": "true",
    "message": "Comment submitted successfully."
  }
  ```
  **Code:** 400  
  **Content:**
  ```json
  {
    "status": "false",
    "message": "Error message"
  }
  ```
