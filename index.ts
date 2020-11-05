import { opine, serveStatic } from 'https://deno.land/x/opine@0.12.0/mod.ts';
import { renderFileToString } from 'https://deno.land/x/dejs@0.7.0/mod.ts';
import { join, dirname } from 'https://deno.land/x/opine@main/deps.ts';

import { ensureAuthenticated } from './middleware/authmiddleware.ts';
import users from './controllers/usercontroller.ts';
import auth from './controllers/authcontroller.ts';

const app = opine();    // web server
const dirname_ = dirname(import.meta.url);

app.engine(".html", renderFileToString);    // serve static html
app.use(serveStatic(join(dirname_, "public")));
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.render("index", {title: "Hello world"});
});

app.use("/users", ensureAuthenticated, users);  // authenticator middleware
app.use("/auth", auth);

app.listen(3000);
console.log("Running app on localhost:3000......")