var Cat = function() { 
	this.name = ko.observable('Kitty');
	this.clickCount = ko.observable(0);
	this.imgSrc= ko.observable('img/kitty.jpg');
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
	this.nicknames = ko.observableArray([
		{ nick: 'K' },
		{ nick: 'K Wow' },
		{ nick: 'K Meow' }
		]);
}

var ViewModel = function() {
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function () { 
		this.clickCount(this.clickCount() + 1);
	};


}

ko.applyBindings(new ViewModel());