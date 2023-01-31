var express = require("express");
var router = express.Router();
const { getTodos, postTodos, putTodos, patchTodos, deleteTodos } = require("../modules/http/axios");

// /* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

//get all todo list
router.get("/get", async function (req, res, next) {
	try {
		const todosRespond = await getTodos();
		const data = todosRespond.data;

		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		res.send({
			status: false,
			message: error.message,
		});
	}
});

//post todos
router.post("/submit", async function (req, res, next) {
	try {
		const submitPost = await postTodos();
		const data = submitPost;

		console.log(submitPost);
		console.log("tes");
		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		console.log("tes", error);
		res.send({
			status: false,
			message: error.message,
		});
	}
});

//put todos
router.put("/edit/:id", async function (req, res, next) {
	try {
		const { id } = req.params;

		const putPost = await putTodos(id);
		const putRespond = putPost;

		res.send({
			status: true,
			data: putRespond,
		});
	} catch (error) {
		console.log(error);
		res.send({
			status: false,
			message: error.message,
		});
	}
});

// patch todos

router.patch("/patch/:id", async function (req, res, next) {
	try {
		const { id } = req.params;
		const patchData = await patchTodos(id);

		const data = patchData.data;
		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		res.send({
			status: false,
			message: error.message,
		});
	}
});

//delete todos

router.delete("/delete", async function (req, res, nex) {
	try {
		const todosRespond = await deleteTodos();
		const data = todosRespond.data;

		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		res.send({
			status: false,
			message: error.message,
		});
	}
});

module.exports = router;
