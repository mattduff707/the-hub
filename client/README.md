## Process I followed

- Sketched a rough design
- Created a basic outline on Figma
- Broke it down into manageable tasks
- Began using seperate branches and pull requests to mimic professional development mid project

---

## Key Features

- Task Management [Code Snippet](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/components/todo/TodoList.js#L7-L67)
- Bookmark Search Feature [Code Snippet](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/components/bookmarks/Search.js#L4-L35)
- API Call and data manipulation using a custom hook (hook credit to Cory House) [Hook](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/services/useFetch.js#L1-L41) and [Data](https://github.com/mattduff707/the-hub/blob/main/src/components/mainScreen/home/APOD.js)

---

## Why I built it this way

- As a personal desktop app, I put minimal consideration into accessibility and responsiveness.
- I made this app with increased productivity in mind.
- Until I am proficient in a back-end language the usage of localStorage as a database is necessary to prevent the loss of tasks between sessions.
- Styled components are my go-to styling solution. The css-in-js features of it are literally magic! It allows me to dynamically style with ease.
- I love the look of SPA with only a viewport sized screen. It is always a bit of a headache but it fit this app perfectly. Grid and flexbox always save the day

---

## Potential Changes

- Lots of refactoring is necessary still. especially here [Code Snippet](https://github.com/mattduff707/the-hub/blob/5ec67eb33884b50714bedb76973f259eec24e746/src/components/mainScreen/NavButtons.js#L18-L64)
- Several new features planned for the future: Snippets library, mental math game, and a bug report library just to name a few.

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
