const user = {
	id: "#ва",
	name: "Валерий",
	surname: "Антонов",
	company: "Веб-студия #VA",
	notifications: { messages: 4, bell: 32 },
	recent: ["#ва-кф", "#ва-юд", "#ва-аб"],
};
const users = [
	{ name: "Валерий", surname: "Алексеев", id: "#ва" },
	{ name: "Алексей", surname: "Мусаханов", id: "#ам" },
	{ name: "Юлия", surname: "Дворецкова", id: "#юд" },
	{ name: "Софья", surname: "Загидулина", id: "#сз" },
	{ name: "Артём", surname: "Гавриленко", id: "#аг" },
	{ name: "Константин", surname: "Филатов", id: "#кф" },
	{ name: "Алина", surname: "Богданова", id: "#аб" },
	{ name: "Мелл", surname: "Катчинс", id: "#мк" },
	{ name: "Михаил", surname: "Алексеев", id: "#ма" },
	{ name: "Дарья", surname: "Соловьева", id: "#дс" },
	{ name: "Бекзат", surname: "Аматахунов", id: "#ба" },
	{ name: "Энди", surname: "Андерсон", id: "#эа" },
];
const groups = [
	{
		name: "Общий чат",
		participants: [
			"#ва",
			"#ам",
			"#юд",
			"#сз",
			"#аг",
			"#кф",
			"#аб",
			"#мк",
			"#ма",
			"#дс",
			"#ба",
			"#эа",
		],
		messages: [
			{
				id: "#123",
				sender: "#мк",
				likes: 2,
				datetime: Date(),
				quote: null,
				checked: true,
				body:
					"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			},
			{
				id: "#234",
				sender: "#ва",
				likes: 2,
				datetime: Date(),
				checked: true,
				quote: {
					id: "#012",
					sender: "#ма",
					likes: 0,
					datetime: Date(),
					quote: null,
					body:
						"Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный...",
				},
				body:
					"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			},
			{
				id: "#345",
				sender: "#мк",
				likes: 0,
				datetime: Date(),
				quote: null,
				checked: true,
				body:
					"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			},
			{
				id: "#456",
				sender: "#ва",
				likes: 0,
				datetime: Date(),
				quote: null,
				checked: false,
				body:
					"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			},
		],
	},
	{ name: "Руководство", participants: [], messages: [] },
	{ name: "Бухгалтерия", participants: [], messages: [] },
	{ name: "Маркетинг", participants: [], messages: [] },
	{ name: "Аналитика", participants: [], messages: [] },
	{
		name: "Разработка и интеграция",
		participants: ["#ва", "#ам", "#юд", "#сз", "#аг"],
		messages: [],
	},
];
const chats = [
	{
		id: "#ва-кф",
		mate: "#кф",
		messages: [],
	},
	{
		id: "#ва-юд",
		mate: "#юд",
		messages: [],
	},
	{
		id: "#ва-аб",
		mate: "#аб",
		messages: [],
	},
];

export const store = {
	user,
	users,
	groups,
	chats,
};
