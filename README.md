# Engine Web Server

Main code to run for gui controls on the rocket test Engine.

## Developer Notes

This app boiler plate came from BalmaBrian's go article from [candorem](https://candorem.com/build-nodejs-boilerplate/)

### The /bin folder

Inside the /bin folder we find the file that does this called the www file. This is the file which we’ll call node on to kick everything off. Inside that file, we see a single line that imports the app.js file and therefore our app into the server itself.

### The app.js file

The app.js file is what’s responsible for the kickoff of our app and setting up any app-wide configuration. It will determine what middlewares to pass requests through, what routes will be available, and set up things like session stores, child processes, queues, error handling, and default logic. This is basically where anything that is very general will go.

### The public folder

The public/client folder is easily one of the most versatile folders your app is likely to have if it has one at all.

### The /routes folder

Routing is the lifeblood of a node API and while not every app will have routing most will. The routes folder is where you’ll place files and logic that can be grouped together either by data or function.

### The /controllers folder

We really want our routes to only care about high-level function execution, validation, middleware execution, and forwarding. Buisiness logic goes here.

### The /config folder

This folder is responsible for any configurations we’ll set up and need throughout the app. It’s commonly the keeper of credentials, API keys, and set up variables.
