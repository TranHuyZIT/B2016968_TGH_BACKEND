const app = require("./app.js");
const config = require("./config");
const port = config.app.PORT;

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
