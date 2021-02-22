# Transformers Management app

## Instructions:
### `npm install` or `yarn install`
### `npm start` or `yarn start` to start the app in development mode.
### Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About:
This application was developed for a job assignment from Digihey. Its an application for managing transformers made in React.

## Design:
The project is made up of two main building blocks, the `routes` folder which has all the main pages, and the `components` folder which has lower level elements.
Each `route` and `component` has its own folder that contains it's typescript and css code.
The main components are the list that is used to display all of the transformers on the home page, and the form component that is used both for adding new transformers and editing them. The list just fetches data from the server and displays it in a table. It also has a dropdown that lets you change the transformer's status and two buttons. One button deletes the transformer and the other one brings you to a page where you can edit that transformer.
The form component has an optional prop that depending if it's presant or not can change the form into a form used for editing or for adding new transformers. They are both pretty much the same, but the one for edditing has initial values and uses a different HTTP method in its fetch function.
The form has 3 linked select elements that have a parent-child relationship which changes their availible options depending on the value of its parent. The data for those links is availible on the api and it features a collection of those 3 part links. I created a class that turns those into a tree graph that we can scale to get the availible child elements. I picked this option because it enables us to add new entries to the api without having to change the code.

## Things I would change if I had more time:
If I had more time for this project, I would first focus on the code readability. Some parts of it are pretty messy right now. I would add some custom hook and move some of the logic into them, especially all of the `fetch` functions, I should have reused them from the start. I'd also fix some bugs that I noticed, which I didn't have time for.
I'd expand the error handeling as well, there isn't much of it right now. It's not a big problem for local usage, but it could cause some problems if it was on a server.

#### Homepage
![homepage](https://raw.githubusercontent.com/maturc/digihey-assignment/main/preview/home-page.png)

#### Details page
![details](https://raw.githubusercontent.com/maturc/digihey-assignment/main/preview/details-page.png)

#### Mobile design
![mobile](https://raw.githubusercontent.com/maturc/digihey-assignment/main/preview/mobile.png)
