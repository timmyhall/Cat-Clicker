var viewModel = function() {
	this.clickCount = ko.observable(0);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new viewModel());

