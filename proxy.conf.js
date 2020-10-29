const PROXY_CONFIG = [
  {
    context: ["/trabajadores"],
    target: "http://localhost:8080/api",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
