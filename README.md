# Roster Challenge

## The Roster - Synopsis
You're a developer working for a music record label and the accounting team needs your help!

## The Task
Given a data dump of your artist roster, the task is to build a web application to store the data and serve it to a front end application of your design. This application will be used by the accounting team to pay out the correct streaming royalties to respective artists.

You receive the data in the form of a json file containing an array of objects with the following fields:

artist => Artist Name
rate => Payment rate per stream
streams => Number of Streams
Your minimum application requirements include:

A hosted MVC structure with separate front and back ends
Displaying the list in a web browser
Extending the list to include the calculated payout amount per artist
Adding a field to toggle (and persist) whether the artist payout is complete (eg: checkbox)
Bonus features:

Add sorting by column (asc/desc)
Display a subset of data with the ability to show more (eg: "Load More" button, infinite scroll)
Filtering by the artist name


## SneakPeek of ROSTER CHALLENGE

### Screenshot of home page
!["Screenshot of Register"](https://github.com/NupurPrakash/roster-challenge/blob/master/docs/Home%20Page.png?raw=true)

### Screenshot of Search bar
!["Screenshot of Search bar"]()


## Project Setup

The project has 2 main folders:

 - client (React Front-End)
 - backend (Express Back-End)

 Run npm install in both folders to install the dependencies.

 To start both servers:

 `npm start` in the client folder
 `npm run dev` in the backend folder

 ## Back-End Setup

- create a postgres database. At the terminal, type the following:

  `createdb database_name OWNER username`

  replace database_name with your database name and username with your own user.

- create a `.env` file with your database settings. Look at .env.example for usage.


- Modify the sql scripts under `db/schema/` to create the tables and seed the data.

- run `npm run reset` that will run the reset scripts in package.json to reset the database. Modify the reset script in package.json accordingly:

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "reset": "psql -U labber -d final_project < ./db/schema/create.sql && psql -U labber -d final_project < ./db/schema/seed.sql"
  },
```
- replace `labber` with your own username and `final_project` with your database name

- currently, the users route is setup with a get and a post as examples. Modify it according to your needs and/or create additional route files.

## Client Setup

- A custom hook in `hooks/useApplicationData.js` contains the state.
- a `useEffect` with an axios request is adding the users in the state. Modify the initial state and the useEffect according to your needs. 


