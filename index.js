const express = require("express");
const { exec } = require("child_process");

const app = express();
console.log("new log")
app.get("/ping", (req, res) => {
    const host = req.query.host;
    exec("ping " + host, (err, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000);
