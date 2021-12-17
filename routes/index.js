var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

router.get("/", function (req, res) {
	res.render("index", { title: "Mini Message", messages: messages });
});

router.get("/new", function (req, res) {
	res.render("form", { title: "Mini Message" });
});

router.post("/new", function (req, res) {
	messages.push({
		text: req.body.message,
		user: req.body.author,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
