require("babel-register");

// Require the env variables in .env file
// if the variable that is defined in the .env file is also
// defined in the running environment, the running environments
// definition will take precedence

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

require('./index');
