const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router1 = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

app.db = router1.db;

app.use(middlewares);
app.use(auth);
app.use(router1);

app.listen(8000, () => {
  console.log("✅ JSON Server with Auth running on http://localhost:8000");
});
