/**
 * It is general error handler that can be adapted later for more error information.
 * @param {string | Error} msg
 */
const errorHandler = msg => {
  let err = msg instanceof Error ? msg : new Error(msg); // In case we catch error class and no string passed.
  return {
    error: {
      message: err.message,
      stack: err.stack
    }
  };
};

module.exports = errorHandler;
