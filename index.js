const express = require("express");
const bc = require("./controllers/character_controllers.js");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/diabloCharacters", bc.read);
app.post("/api/diabloCharacters", bc.create);
app.put("/api/diabloCharacters/:id", bc.update);
app.delete("/api/diabloCharacters/:id", bc.delete);

const port = 4000;
app.listen(port, () => {
  console.log(`Chillin and grillin on server: ${port}`);
});