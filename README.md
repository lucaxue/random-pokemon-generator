# Environment Variables in React and Hosting - Workshop

# Part One:

You might remember a few weeks ago that we used an API with details about astronauts when we looked at RESTful APIs. We'll be using that API again today to create and deploy a front end.

👉 1.1. In this repo, run the `npx create-react-app` command and code a simple React app that fetches from an external API and displays some data from that API on the page. Options include (but aren't limited to):
- Kanye.rest: 
https://api.kanye.rest 
- Dad jokes: https://icanhazdadjoke.com/
- Star Wars: https://swapi.dev/
- Pokemon: https://pokeapi.co/
- The astronaut API from a few weeks ago: https://astronauts-postgres-playground.herokuapp.com/astronauts

Keep your app as simple as possible! Now is not the time to make a glorious component tree like we usually do. Make something simple and don't spend time with advanced functionality or styling - it should be similar to the Kanye app in the demo so that you can move on to your first hosting practice.

👉 1.2. Once you've tested your environment variable locally and then pushed up, in your team's GitHub repo, make a fork of the team repo on your personal GitHub accounts. (There's a button at the top right of the repo page that says 'Fork'.)

⚠️ *Note: You both should do the rest of this task, deploying your personal forks, but please do it **one at a time** while pairing and talking things through/sharing screens as usual!*

👉 1.3. Go to [the Netlify website](https://www.netlify.com/) and sign up with your GitHub account.

👉 1.4. Click the 'New site from Git' button and deploy your site. Don't forget to add your environment variable in the advanced settings! If there are any build errors and the deploy fails, you can view the deploy log on Netlify to read and fix any error messages before redeploying.

👉 1.5. Once your site is successfully deployed, change the URL from the randomly-generated words to whatever you'd like to to be, and navigate to it to make sure it works!

## Part Two:

Once you've both deployed your forks of the astronaut app repo, keep practicing with other repos from past workshops and hackathons. 

👉 Take turns choosing a repo and following the same steps as above:
- Make a fork.
- Clone down the fork and make environment variables where necessary (including fetch URLs).
- Test that your environment variables are set up and your app is still functioning by running the app with the development server locally.
- Deploy the forked repo on Netlify!

⚠️ *Note: The yellow warning messages that show up in your console (e.g. a warning about an unused variable) normally don't stop your app from working on the local development server. However, they will stop the deployment. If your deployment fails because of any warnings, use your bug-fixing skills to fix the warnings, and then redeploy the app.*