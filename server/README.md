# Task Station (Trello Board Clone API)
This project is basically a Trello board clone API developed using Node.js, Express, and MongoDB. It was developed as a portfolio project for a software engineering course taken at ALX Africa.

The API allows users to create and manage boards, lists, and cards, which are the basic features of a Trello board. The endpoints exposed by the API can be used to create, read, update, and delete boards, lists, and cards.

## Installation
To use this API, you must have Node.js and MongoDB installed on your system. After cloning this repository, run the following command in the terminal to install the required dependencies:

```
npm install
```

Create a .env file at the root of the project and add the following variables:
```
JWT_SECRET_KEY=<Your-JWT-SECRET_KEY>
DATABASE_URI=<Your-MONGO_DB_URL>
```

Replace `<Your-MONGO_DB_URL>` with the URI for your MongoDB database and `<Your-MONGO_DB_URL>` with the secret JWT key you want to use.

Finally, run the following command to start the API server:
```
npm start
```
## Usage
Once the server is running, you can make requests to the API endpoints using a tool like Postman or cURL. Here are some examples of the endpoints you can use:

### Boards
* `GET /api/boards`: Get all boards.
* `POST /api/boards`: Create a new board.
* `GET /api/boards/:id`: Get a board by ID.
* `PATCH /api/boards/:id`: Update a board by ID.
* `DELETE /api/boards/:id`: Delete a board by ID.

### Lists
* `GET /api/lists`: Get all lists.
* `POST /api/lists`: Create a new list.
* `GET /api/lists/:id`: Get a list by ID.
* `PATCH /api/lists/:id`: Update a list by ID.
* `DELETE /api/lists/:id`: Delete a list by ID.

### Cards
* `GET /api/cards`: Get all cards.
* `POST /api/cards`: Create a new card.
* `GET /api/cards/:id`: Get a card by ID.
* `PATCH /api/cards/:id`: Update a card by ID.
* `DELETE /api/cards/:id`: Delete a card by ID.

### CheckLists
* `GET /api/checklist`: Get all checklist.
* `POST /api/checklist`: Create a new checklist.
* `GET /api/checklist/:id`: Get a checklist by ID.
* `PATCH /api/checklist/:id`: Update a checklist by ID.
* `PATCH /api/checklist/:id/check`: Mark a checklist as completed.
* `PATCH /api/checklist/:id/uncheck`: Mark a checklist as uncompleted.
* `DELETE /api/checklist/:id`: Delete a checklist by ID.

### Comments
* `GET /api/comments`: Get all comments.
* `POST /api/comments`: Create a new comment.
* `GET /api/comments/:id`: Get a comment by ID.
* `PATCH /api/comments/:id`: Update a comment by ID.
* `DELETE /api/comments/:id`: Delete a comment by ID.

### Users
* `POST /api/users/register`: Creates a new user.
* `POST /api/users/login`: Generates a new authentication token for a user.
* `GET /api/users/me`: Gets information about a user.
* `PATCH /api/users/update_password`: Update the password of a user.
* `PATCH /api/users/me`: Update the data of a user.
* `DELETE /api/users/me`: Deletes a User Permanently.


## Credits
This project was developed by [Isaac Takiyara Knayiti] and [Reginald Shawn Annan] as a portfolio project for a software engineering course taken at ALX.
