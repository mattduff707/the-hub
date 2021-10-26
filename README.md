Back-end code can be found [here](https://github.com/mattduff707/the-hub-express)

## Process I followed

- Sketched a rough design.
- Created a basic outline on Figma.
- Whiteboarded a state diagram to help conceptualize data flow in the math game.
- Utilized Kanban board for tasks [Kanban](https://github.com/mattduff707/the-hub/blob/main/public/images/hubKanban.PNG)
- Used feature branches and pull requests.

---

## Key Features

- Math game: [Game Setup in root](https://github.com/mattduff707/the-hub/blob/main/src/components/mainScreen/math/Math.js) and [Cursor Control](https://github.com/mattduff707/the-hub/blob/cd56b7c3de75313780e1d600ee9f16314ec8904a/src/components/mainScreen/math/activeGame/Question.js#L35-L61)
- Redux logic for Task management: [Action creators](https://github.com/mattduff707/the-hub/blob/main/src/state/action-creators/taskActions.js) and [Reducers](https://github.com/mattduff707/the-hub/blob/main/src/state/reducers/tasksReducer.js)
- Bookmark Search Feature: [Code Snippet](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/components/bookmarks/Search.js#L4-L35)
- API Call and data manipulation using a custom hook: [Hook](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/services/useFetch.js#L1-L41) and [Data](https://github.com/mattduff707/the-hub/blob/main/src/components/mainScreen/home/APOD.js)
- Integration tests using React Testing Library [Example Test](https://github.com/mattduff707/the-hub/blob/main/src/components/todo/TodoList.test.js)

---

## Why I built it this way

- I made this app with increased productivity in mind.
- I am using a Node.js/Express back-end alongside MongoDB to make this a MERN stack application. This has allowed me to expand upon existing features and begin to implement planned features like a snippet library and bug report system.
- Styled components are my go-to styling solution. Modularity, auto-prefixing, and it allows me to dynamically style with ease due to the nature of css-in-js.
- I love the look of SPA with only a viewport sized screen. It is always a bit of a headache but it fit this app perfectly. Grid and flexbox always save the day
- As a personal desktop app, I put minimal consideration into accessibility and responsiveness.

---

## Still to be done

- Lots of refactoring is necessary still. especially here [Code Snippet](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/components/mainScreen/NavButtons.js#L18-L64)
- Error handling for both the back-end and front-end of the application.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
