1. Create a .gitignore file and add node_modules to it.

2. Create a server.js file that will swerve up the application.
    - Import all your required dependencies.
    - Initialize the express app.
    - set up the port that the server will listen on. (note: Heroku will set this up for you when you deploy.)
    - set body parsing, static middleware, route middleware.
    - start the server.

3. Organize and cretae your routes
 - create a "GET" route for '/notes' that returns the 'notes.html' file
 - create a "GET" route for '*' that returns index.html.
 - Create a GET route for '/api/notes' that returns all saved notes as JSON.
 - create a POST route for 'api/notes' that saves a new note to the db.json file.
 - create a DELETE route for 'api/notes/:id' that deletes a note from the db.json file.

 4. Create helper functions that manage saving and retrieving notes from the db.json file.
 - create a getNotes() function that returns all teh saved notes from the db.json file
 - create a saveNote() function that saves a new note to the db.json file and returns the new note as JSON.
 - Create a deleteNote() function that deletes a note from the dg.json file and returns a success message.
 - 

 5. Integrate your helper functions into the routes.

 6. test the routes to ensure that they're working.