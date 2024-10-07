class ExpressError extends Error {
  /**
   * Custom error class for Express applications.
   * @param {number} statusCode - HTTP status code for the error.
   * @param {string} message - Error message.
   */
  constructor(statusCode, message) {
    super(message); // Call the Error constructor with the message
    this.statusCode = statusCode;
    this.name = "ExpressError"; // Set the error name
  }
}

module.exports = ExpressError;
