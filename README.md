
## Authors
- [@drewk93](https://github.com/drewk93)
- [@nateykliu](https://github.com/nateykliu)
- [@joshjones49](https://github.com/joshjones49)

## Login and Registration

The Login and Registration functionality is designed with a security-first mindset. Passwords are salted and hashed using bcrypt:

![ScreenShot](/images/users.png)

All functionality is contained in our Login and Register components. We wrap our main.jsx with our Login Context Provider, which allows us to use our state in the rest of the application without rerendering. Messages render dynamically based on the type of error encountered (Registration Failed, Login Failed, Wrong Password, etc.)

## Flashcards and Categories

From the Landing Page click the "Flashcards" tab and it will take you to the "Flashcard Categories". From here you can click on any of the categories and they will take you to the related component containing those sets of cards. The flashcards are able to be properly sorted by category based on their "category_id" from the column of the flashcards table in the database.

![ScreenShot](/images/flashcards.png)

On each card there is an "Answer" button which you can click to view the answer to the question. This is handled by a piece of state called "showAnswer", and conditional rendering. When clicked it will set the state to "true", which allows the consitional rendering to show the "Answer" side.

![ScreenShot](/images/question.png)
![ScreenShot](/images/answer.png)

The flashcards also contains "learned" and "unlearned" buttons (CheckBox, X) that send a query to the database to change the status of the learned column in the flashcards table.
When "learned" is set to true this will add to the progress bar. Currently there is no feature to signal to the user that the app accepted their input outside of looking directly to the progress bar to see the percentage change.

Each card also contains a "delete" button which simply sends a delete request to the server to go into the database to delete the selected card from the flashcard table.

## COMMANDS COMPONENT

![Screenshot](/images/commands.png)


## DESCRIPTION 
 Commands allows users to search for code snippets, and copy them into their project. 

At the top of the component you'll have the title, search bar.
Below will be a window rendering each individual command item. Inside the command item you'll have the snippet-text, with a description and on the right will be a copy icon.

**SEARCHING** 
Commands uses fuzzy search functionality to parse and trim through a string input into the searchbar. From there it will filter through existing state and render out the filtered state. 

**KNOWN BUG:** Searching for "commands" will not run the search functionality correctly. It will be as if someone didn't type anything into search at all.

**CLIPBOARD**
When clicking on the clip icon this function will copy the command-text to the Navigator's clipboard, allowing users the ability to paste it into their objects.
and a clipboard functionity using the  **navigator.clipboard.writeText()** method native to Javascript.


## Schema 

    **id BIG SERIAL PRIMARY KEY NOT NULL, command TEXT NOT NULL,
    command TEXT NOT NULL,
    description TEXT NOT NULL**

## Resources Used
- [bcrypt (Salting and Hashing)](https://www.npmjs.com/package/bcrypt)
- [React](https://react.dev/)
