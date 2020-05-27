const fetch = require('isomorphic-fetch');

const handleSend = (req, res) => {
  const secret_key = process.env.SECRET_KEY;
  const token = req.body.token;
  console.log(req.body)
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  fetch(url, {
      method: 'post'
  })
      .then(response => response.json())
      .then(google_response => res.json({ google_response }))
      .catch(error => res.json({ error }));
};

module.exports = handleSend