const wrapAsync = fn => (req, res, next) => fn(req, res, next).catch(next);

const handleErrors = (err, req, res) => {
  if (err) {
    console.error(err); 


    
    if (typeof err === 'string') {
      return res.status(500).send({
        errors: [err],
        status: 'FAILURE',
        status_code: 500,
      });
    }
    const { errors, message, statusCode = 500, status } = err;
    return res.status(statusCode).send({
      errors: message ? [message].concat(errors) : errors,
      statusCode,
      status,
    });
  }
  return res.status(500).send({
    errors: ['Sorry, there is an issue.'],
    statusCode: 500,
    status: 'ERROR',
  });
};

module.exports = {
  handleErrors,
  wrapAsync,
};
