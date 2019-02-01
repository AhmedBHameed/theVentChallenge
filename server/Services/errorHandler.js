module.exports = msg => {
  let err = new Error(msg);
  return {
    error: {
      message: err.message,
      stack: err.stack
    }
  };
};
