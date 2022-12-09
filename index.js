const express = require("express");
const app = express();
const path = require("path");

// console.log(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//     // console.log(req);
//     res.send("Hello World");
// });

app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;
    if (answer === "2") {
        // res.send("<h1>正解</h1>");
        res.redirect("/correct.html");
    } else {
        // res.send("<h1>不正解</h1>");
        res.redirect("/wrong.html");
    }
    res.send(answer);
});

app.get("/about", function (req, res) {
    res.send("<h1>About page</h1>");
});

app.listen(3000, function () {
    console.log("run");
});

console.log("最終");
// イベントドリブンとは
//nodemon は先頭にnpxをつけないと稼働しない何故かは不明
