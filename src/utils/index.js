const url = "http://localhost:3030";

const fetchGET = async (route) => {
	try {
		const response = await fetch(url + route);
		return response.json();
	} catch (err) {
		console.log(err);
	}
};

const fetchPOST = async (route, data) => {
	try {
		const response = await fetch(url + route, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		return response.json();
	} catch (err) {
		console.log(err);
	}
};

const findUser = (array, id) => {
	return array.find((user) => user.id === id);
};

const searchChats = (data, query) => {
	const groupChats = data.groups.filter(
		(group) => group.name.toUpperCase().search(query.toUpperCase()) > -1
	);

	const allUsers = data.users.filter(
		(user) =>
			user.name.toUpperCase().search(query.toUpperCase()) > -1 ||
			user.surname.toUpperCase().search(query.toUpperCase()) > -1
	);

	const results = allUsers.concat(groupChats);

	return results;
};

exports.fetchGET = fetchGET;
exports.fetchPOST = fetchPOST;
exports.findUser = findUser;
exports.searchChats = searchChats;
