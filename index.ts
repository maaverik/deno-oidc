import opine from "https://deno.land/x/opine@0.25.0/mod.ts";

const app = opine();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(5000);
