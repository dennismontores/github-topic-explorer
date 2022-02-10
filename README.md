# Github Topics Explorer

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Live Site
https://github-topic-explorer.vercel.app
I decided to use Vercel for deploying it.

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.mjs` config file.

### yarn test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

## Installation

Install github-topic-explorer with yarn

Firs of all, you will neeed yarn, you can install it globally using
```bash
 npm install -g yarn
 
```

```bash
 cd github-topic-explorer
 yarn add
 
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SNOWPACK_PUBLIC_GITHUB_TOKEN` This is provided by Github

`SNOWPACK_PUBLIC_BASE_URL=https://api.github.com/graphql`
## Dev Notes

* For fetching the data from Github, we use the Github GraphQL API.
Since it's a GraphQL API, I decided to use graphql-request to make the requests with useSWR which provides cache handling ans has Vercel support. This makes the code simple and clean. 
* For styling the components, I used CSS modules, since it is more native and under the hood is just plain CSS.
* For testing, I decided to use RTL and chai, 'cause the jest setup was taking more time.
* For the app, I used React Hooks, which is a new way to write functional components in React.
* For the routing, I used React Router V6, which is the most known library for handling routing in React, and also has a great support.

## Future Improvements

### Code Structuring

I decided to use a structured based in type of files, which is a good practice for code organization. It allows to find the code easier, and also allows to find the code easier in the future. For example, if I want to add a new global component, I can just create a new folder inside the src/componentes folder and add the component there.

If we need more things like custom hooks, we can create a new folder inside the src/hooks folder and add the hook there. The same goes for the custom context or if we need Redux, we can add a folder named src/store and add everyting related to the store there.

For the test files, i like to have the corresponding tests next to the component. For example, if I have a component named `Button`, I can create a test file named `Button.test.tsx` and add the tests there. If we need more files related to tests we can add a folder called `__test__` and add the tests there and the reated files to that test.

### Refactoring

The refactoring part could be done in a better way, but I decided to keep it simple for now. I mean, maybe implement `useCallback` and `useMemo` in the future, but for now it's not needed.

In the future if routes are implemented, I will create a folder named `src/routes` and add the routes there. And maybe create a folder named `src/pages` and add the pages there. For now, I will keep it simple. 

The previous part can be avoided by migrating to NextJS, which is a great library for handling routing in React, and SSR, but that's another topic.


### Additional Features

Improve the typing taking as base the graphql schema provided by Github. It's neccessary to know the types of the variables and the types of the fields.

Error boundaries are a good idea to handle errors in the app, at least one.
