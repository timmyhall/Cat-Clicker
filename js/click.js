var initialCats = [
	{
		name: 'Kitty',
		clickCount: 0,
		imgSrc: 'img/kitty.jpg',
		nicknames: ['K', 'K Wow', 'K Meow']
	},
	{
		name: 'Jinxie',
		clickCount: 0,
		imgSrc: 'img/jinxy.jpg',
		nicknames: ['J']
	},
	{
		name: 'Trixie',
		clickCount: 0,
		imgSrc: 'img/trixie.jpg',
		nicknames: ['T']
	},
	{
		name: 'Sugar',
		clickCount: 0,
		imgSrc: 'img/sugar.jpg',
		nicknames: ['Su']
	},
	{
		name: 'Spice',
		clickCount: 0,
		imgSrc: 'img/spice.jpg',
		nicknames: ['Sp']
	}
]


var Cat = function(data) { 
	this.name = ko.observable(data.name);
	this.clickCount = ko.observable(data.clickCount);
	this.imgSrc= ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames)
	this.levels = ko.computed(function() {
		var levels;
		var clicks = this.clickCount();
		if (clicks < 10) {
			levels = 'Newborn';
		} else if (clicks < 20) { 
			levels = 'Infant';
		} else {
			levels = 'Teen';
		}
		return levels; 
	}, this);
}

var ViewModel = function() {
	var self = this; 

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0]);

	this.incrementCounter = function () { 
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}

}

ko.applyBindings(new ViewModel());

