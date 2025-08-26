const express = require("express");
const path = require("path");

const app = express();

// except when in /static folder (2)
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// all paths go to index.html (1)
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});


app.listen(process.env.PRT || 5060, () => console.log("Server running..."));
