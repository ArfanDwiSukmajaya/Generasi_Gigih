# Mid Term Project (Backend Only)

## 1. Database Strcture

The database structure for the Tokopedia Play Clone is designed using MongoDB. It consists of three collections: `videos`, `products`, and `comments`.

### Collection: `videos`

- `videoID` : Unique identifier for the video.
- `title` : Title of the video.
- `thumbnail` : URL of the video thumbnail.
- `youtubeID` : YouTube video ID for embedding the video.

### Collection : `products`

- `productID` : Unique identifier for the product.
- `videoID` : Reference to the video document in the "videos" collection.
- `title` : Title of the product.
- `price` : Price of the product.
- `link` : URL of the product.

### Collection : `comments`

- `commentID` : Unique identifier for the comment.
- `videoID` : Reference to the video document in the "videos" collection.
- `name` : Name of the commenter.
- `comment` : Comment text.
- `timestamp`: Timestamp indicating when the comment was submitted.

## 1. API structure
