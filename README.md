Stream-Chat Web Application
===========================

This is a web application that allows users to create groups and chat with other members in real-time using the Stream-Chat API. The application is built using TypeScript and Fastify for the server, and React for the front-end.

Features
--------

-   Users can create groups and invite other members to join.
-   Members can chat with each other in real-time.
-   Members can react to messages, share images, videos, and files.
-   Users can see how many members are online at any given time.
-   Users are required to log in using their credentials, and the chat history is saved using JWT tokens.

Technologies Used
-----------------

-   TypeScript
-   Fastify
-   React
-   Stream-Chat API
-   Axios
-   Dotenv
-   React-Router-DOM
-   React-Select
-   Stream-Chat-React

Installation
------------

1.  Clone the repository:

    bashCopy code

    `git clone https://github.com/your_username/stream-chat-app.git`

2.  Install dependencies:

    bashCopy code

    `cd client`
    `npm install`

    `cd server`
    `npm install`

3.  Set up environment variables:

    bashCopy code

    `cd server`
    `cd .env`

    Edit `.env` and add your Stream-Chat API key and secret.

4.  Start the application:

    bashCopy code

    `cd client`
    `npm run start`

    `cd server`
    npm run dev`

    The application will be available at `http://localhost:3003`.

Contributing
------------

If you find any issues or want to contribute, feel free to open a pull request or an issue in the repository.

Images
------------
![image](https://user-images.githubusercontent.com/93221382/222785854-e538c485-0e8e-4f8d-aaf7-ed9c398ef8b7.png)


License
-------

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

