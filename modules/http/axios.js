const axios = require("axios");

const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	headers: { "content-type": "application/json" },
});

//get all todo list

const getTodos = () => {
	return instance.get("/todos");
};

//post to todo list
const postTodos = () => {
	return instance.post("/posts", {
		title: "Hello helo",
		userId: 1,
		body: "bar",
	});
};

//put to todo list
const putTodos = (id) => {
	return instance.put("/posts/" + id, { id: 1, title: "foo", body: "bar", userId: 1 });
};

//patch to to todo list
const patchTodos = (id) => {
	return instance.patch(`/posts/${id}`, { title: "ini patch" });
};

//delete to todo list
const deleteTodos = (id) => {
	return instance.delete(`/posts/${id}`);
};

module.exports = {
	getTodos,
	postTodos,
	putTodos,
	patchTodos,
	deleteTodos,
};
