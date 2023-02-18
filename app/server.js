const app = require("./app.js");
const config = require("./config");
const MongoDB = require("./utils/mongodb.util.js");
const port = config.app.PORT;
const uri = config.db.uri;

async function startServer() {
  try {
    await MongoDB.connect(uri);
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  } catch (error) {
    console.log("Cannot connect to database with error: " + error.message);
    process.exit();
  }
}

startServer();
