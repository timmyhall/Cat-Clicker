function loadData() { 
var cat = $('.cat');
var counter = $('#counter');



cat.click(function() {
    counter.html(function(i, val) { return val*1+1 });
});

}

$('.container').submit(loadData);