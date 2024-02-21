# Youtube Subscribers

Youtube Subscribers System is a Node.js application that leverages MongoDB as a document-oriented NoSQL database.
The primary objective of this project is to create a robust API for managing subscribers' data efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)

## Introduction

This project provides endpoints to interact with subscriber data, allowing users
to perform various operations such as retrieving all subscribers, fetching subscriber names
and subscribed channels, and obtaining details for a specific subscriber by ID.

The key features of this application include:
- Retrieving a list of all subscribers.
- Fetching subscriber names and subscribed channels.
- Obtaining detailed information about a subscriber by providing their unique ID.


## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS/JavaScript (for frontend)


## Setup

1. Install dependencies:
   Navigate to the project directory and install dependencies using npm:

   ```
   npm install
   
   ```
   
3. Set up MongoDB:
  - Install MongoDB on your local machine if you haven't already.
  - Start the MongoDB server.

3. Configure Connection to MongoDB:
    Update the MongoDB connection string in the application code or environment variables to point to your local MongoDB instance.

4. Run the application:
   ```
   node src/index.js
   ```
   
## Usage
- Access the application at http://localhost:3000/.
- Click on the buttons to navigate to different routes.
- Enter a subscriber ID in the input field and click the button to view subscriber details.

