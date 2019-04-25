/* This will load app which contains our main structure and logic */
import "reflect-metadata";
import App from './App';
import dotenv from 'dotenv';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.example' });

/* Use this line to get port from environment variable */
const PORT = process.env.PORT || 3000;

/*
Start Express Project on a specific PORT
# If you don't put "no-console" : false in tslint.json
# TSLint will prevent this line and throw an error.
*/
App.listen(PORT, () => {
  console.log("Express Application listening on port " + PORT);
});
