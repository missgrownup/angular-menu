(function() {
	var app = angular.module('menu', []);

	app.controller('menuController', function() {

		this.menu = menu;

		/*$http.get('./data/menu.json')
			.success(function(data) {
				$scope.dishes = data;
			});*/
	});

	app.controller('navController', function() {
		this.tab = 'pot';

		this.selectTab = function(setTab) {
			this.tab = setTab;
		}

		this.isSelect = function(checkTab) {
			return this.tab === checkTab;
		}
	})


	var menu = [
	{
		"category": "pot",
		"dishList": [
			{
				//"category": "pot",
				"name": "hot & spicy",
				"price": 5.8,
				"amount": 99
			},
			{
				//"category": "pot",
				"name": "gourmet",
				"price": 12.8,
				"amount": 99
			},
			{
				//"category": "pot",
				"name": "ying yang (two flavor pot)",
				"price": 13.8,
				"discount": 70,
				"amount": 99
			},
			{
				//"category": "pot",
				"name": "golden goose",
				"price": 22.8,
				"amount": 99
			},
			{
				//"category": "pot",
				"name": "Hong Kong congee",
				"price": 15.8,
				"amount": 99
			}
		]
	},
	{
		"category": "vegetable",
		"dishList": [
			{
				//"category": "vegetable",
				"name": "lettuce",
				"price": 5.8,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "potato",
				"price": 4.8,
				"amount": 99
			},
			{
				//"category": "chinese cabbage",
				"name": "lettuce",
				"price": 5.5,
				"discount": 70,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "spinach",
				"price": 3.8,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "white gourd",
				"price": 6.6,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "sweet potato",
				"price": 5,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "toufu",
				"price": 4.8,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "frozen toufu",
				"price": 5.8,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "crowndaisy",
				"price": 4.5,
				"amount": 99
			},
			{
				//"category": "vegetable",
				"name": "coriander",
				"price": 6.8,
				"amount": 99
			}
		]
	},
	{
		"category": "meat",
		"dishList": [
			{
				//"category": "meat",
				"name": "sliced lamb",
				"price": 8.8,
				"discount": 90,
				"amount": 99
			},
			{
				//"category": "meat",
				"name": "sliced beef",
				"price": 8.8,
				"amount": 99
			},
			{
				//"category": "meat",
				"name": "sliced chicken",
				"price": 7.8,
				"amount": 99
			},
			{
				//"category": "meat",
				"name": "spicy chicken wings",
				"price": 7,
				"amount": 99
			},
			{
				//"category": "meat",
				"name": "lamb kidney",
				"price": 8.5,
				"amount": 99
			},
			{
				//"category": "meat",
				"name": "sweetbread",
				"price": 8.5,
				"amount": 99
			}
		]
	},
	{
		"category": "fungus",
		"dishList": [
			{
				//"category": "fungus",
				"name": "Pleurotus eryngii",
				"price": 4.5,
				"amount": 99
			},
			{
				//"category": "fungus",
				"name": "shiitakes",
				"price": 3.5,
				"amount": 99
			},
			{
				//"category": "fungus",
				"name": "Penoki",
				"price": 3.5,
				"amount": 99
			},
			{
				//"category": "fungus",
				"name": "kelp",
				"price": 4.5,
				"amount": 99
			},
			{
				//"category": "fungus",
				"name": "Coprinus",
				"price": 4.5,
				"amount": 99
			}
		]
	},
	{
		"category": "seafood",
		"dishList": [
			{
				//"category": "seafood",
				"name": "prawn",
				"price": 10.8,
				"amount": 99
			},
			{
				//"category": "seafood",
				"name": "crab",
				"price": 13.5,
				"amount": 99
			},
			{
				//"category": "seafood",
				"name": "prawn ball",
				"price": 13.8,
				"amount": 99
			},
			{
				//"category": "seafood",
				"name": "crab stick",
				"price": 7.8,
				"amount": 99
			},
			{
				//"category": "seafood",
				"name": "yellow croaker",
				"price": 12,
				"amount": 99
			},
			{
				//"category": "seafood",
				"name": "fish ball",
				"price": 6.5,
				"discount": 85,
				"amount": 99
			}
		]
	}
]
})();