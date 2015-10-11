(function() {
	var app = angular.module('menu', []);

	app.controller('menuController', function() {
		this.menu = menu;
	});

	app.controller('navController', function() {
		this.tab = 'pot';

		this.selectTab = function(setTab) {
			this.tab = setTab;
		}

		this.isSelect = function(checkTab) {
			return this.tab === checkTab;
		}
	});

	app.controller('qtyController', function() {
		this.number;

		this.getNumber = function(num) {
			return new Array(num);
		}

		this.reset = function() {
			this.number = "";
		}
	});

	app.controller('orderController', function() {
		this.order = [];
		this.number = "";
		this.sum = 0;

		this.addOrder = function(dish, qty) {
			if(!qty) {
				return;
			}

			var orderToPush = new Array(),
				checkOrder = 0;
			orderToPush[0] = dish;
			orderToPush[1] = qty;

			for(var i = 0; i < this.order.length; i++) {
				if(this.order[i][0].id == dish.id) {
					checkOrder = 1;
					this.order[i][1] = Number(this.order[i][1]) + Number(qty);
				}
			}

			if(checkOrder == 0) {
				this.order.push(orderToPush);
			}

			if(dish.discount) {
				this.sum += qty * dish.price * dish.discount / 100;
			} else {
				this.sum += qty * dish.price;
			}
		}

		this.removeOrder = function(dish, qty) {
			if(!qty) {
				return;
			}
		}
	});


	var menu = [
	{
		"category": "pot",
		"dishList": [
			{
				//"category": "pot",
				"id": 1,
				"name": "hot & spicy",
				"price": 5.8,
				"image": "hot-spicy.jpg",
				"amount": 99
			},
			{
				//"category": "pot",
				"id": 2,
				"name": "gourmet",
				"price": 12.8,
				"image": "gourmet.jpg",
				"amount": 99
			},
			{
				//"category": "pot",
				"id": 3,
				"name": "ying yang (two flavor pot)",
				"price": 13.8,
				"discount": 70,
				"image": "ying-yang.jpg",
				"amount": 99
			},
			{
				//"category": "pot",
				"id": 4,
				"name": "golden goose",
				"price": 22.8,
				"image": "goose.jpg",
				"amount": 99
			},
			{
				//"category": "pot",
				"id": 5,
				"name": "Hong Kong congee",
				"price": 15.8,
				"image": "hong-kong.jpg",
				"amount": 99
			}
		]
	},
	{
		"category": "vegetable",
		"dishList": [
			{
				//"category": "vegetable",
				"id": 6,
				"name": "lettuce",
				"price": 5.8,
				"image": "lettuce.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 7,
				"name": "potato",
				"price": 4.8,
				"image": "potato.jpg",
				"amount": 99
			},
			{
				//"category": "chinese cabbage",
				"id": 8,
				"name": "chinese cabbage",
				"price": 5.5,
				"discount": 70,
				"image": "cabbage.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 9,
				"name": "spinach",
				"price": 3.8,
				"image": "spinach.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 10,
				"name": "white gourd",
				"price": 6.6,
				"image": "white-gourd.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 11,
				"name": "sweet potato",
				"price": 5,
				"image": "sweet-potato.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 12,
				"name": "toufu",
				"price": 4.8,
				"image": "toufu.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 13,
				"name": "frozen toufu",
				"price": 5.8,
				"image": "frozen-toufu.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 14,
				"name": "crowndaisy",
				"price": 4.5,
				"image": "crowndaisy.jpg",
				"amount": 99
			},
			{
				//"category": "vegetable",
				"id": 15,
				"name": "coriander",
				"price": 6.8,
				"image": "coriander.jpg",
				"amount": 99
			}
		]
	},
	{
		"category": "meat",
		"dishList": [
			{
				//"category": "meat",
				"id": 16,
				"name": "sliced lamb",
				"price": 8.8,
				"discount": 90,
				"image": "sliced-lamb.jpg",
				"amount": 99
			},
			{
				//"category": "meat",
				"id": 17,
				"name": "sliced beef",
				"price": 8.8,
				"image": "sliced-beef.jpg",
				"amount": 99
			},
			{
				//"category": "meat",
				"id": 18,
				"name": "sliced chicken",
				"price": 7.8,
				"image": "sliced-chicken.jpg",
				"amount": 99
			},
			{
				//"category": "meat",
				"id": 19,
				"name": "spicy chicken wings",
				"price": 7,
				"image": "chicken-wings.jpg",
				"amount": 99
			},
			{
				//"category": "meat",
				"id": 20,
				"name": "lamb kidney",
				"price": 8.5,
				"image": "lamb-kidney.jpg",
				"amount": 99
			},
			{
				//"category": "meat",
				"id": 21,
				"name": "sweetbread",
				"price": 8.5,
				"image": "sweetbread.jpg",
				"amount": 99
			}
		]
	},
	{
		"category": "fungus",
		"dishList": [
			{
				//"category": "fungus",
				"id": 22,
				"name": "pleurotus eryngii",
				"price": 4.5,
				"image": "pleurotus-eryngii.jpg",
				"amount": 99
			},
			{
				//"category": "fungus",
				"id": 23,
				"name": "shiitakes",
				"price": 3.5,
				"image": "shiitakes.jpg",
				"amount": 99
			},
			{
				//"category": "fungus",
				"id": 24,
				"name": "penoki",
				"price": 3.5,
				"image": "penoki.jpg",
				"amount": 99
			},
			{
				//"category": "fungus",
				"id": 25,
				"name": "kelp",
				"price": 4.5,
				"image": "kelp.jpg",
				"amount": 99
			}
		]
	},
	{
		"category": "seafood",
		"dishList": [
			{
				//"category": "seafood",
				"id": 26,
				"name": "prawn",
				"price": 10.8,
				"image": "prawn.jpg",
				"amount": 99
			},
			{
				//"category": "seafood",
				"id": 27,
				"name": "crab",
				"price": 13.5,
				"image": "crab.jpg",
				"amount": 99
			},
			{
				//"category": "seafood",
				"id": 28,
				"name": "prawn ball",
				"price": 13.8,
				"image": "prawn-ball.jpg",
				"amount": 99
			},
			{
				//"category": "seafood",
				"id": 29,
				"name": "crab stick",
				"price": 7.8,
				"image": "crab-stick.jpg",
				"amount": 99
			},
			{
				//"category": "seafood",
				"id": 30,
				"name": "yellow croaker",
				"price": 12,
				"image": "yellow-croaker.jpg",
				"amount": 99
			},
			{
				//"category": "seafood",
				"id": 31,
				"name": "fish ball",
				"price": 6.5,
				"discount": 85,
				"image": "fish-ball.jpg",
				"amount": 99
			}
		]
	}
]
})();