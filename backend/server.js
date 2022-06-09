const app = require("./app");

const connect = require("./Configs/db");
const PORT = process.env.PORT || 7000;

app.listen(PORT, async function () {
  try {
    await connect();
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
