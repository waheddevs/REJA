const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://vohidjongulomov712_db_user:GzY5ACrCC0HfJoR7@cluster0.mnpboln.mongodb.net/REJA";

mongodb.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("Error MongoDB connection: stop building backend server");
    } else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on http://localhost:${PORT}`,
        );
      });
    }
  },
);
