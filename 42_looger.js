 const logger = (req, res, next) => {
  const method = req.method;          // GET, POST, etc.
  const url = req.url;                // Requested URL
  const time = new Date().getFullYear();  // Current year (for example purpose)

  console.log(method, url, time);     // Console mein log karna
  next();                             // Important: warna request wahi atak jaayegi
};

module.exports =logger;
