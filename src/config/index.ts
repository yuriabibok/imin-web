// import * as dotenv from 'dotenv';
// import path from 'path';

// const env = dotenv.config({ path: path.resolve(__dirname, '.env') }).parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

export default {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
};
