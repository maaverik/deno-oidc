import { Router } from "https://deno.land/x/opine@0.25.0/mod.ts";

const userRoutes = new Router();

userRoutes.get("/me", (req, res) => {   // render HTML in the /users/me file
    res.render("./users/me", { title: "Profile", user: res.app.locals.user });
});

export default userRoutes;