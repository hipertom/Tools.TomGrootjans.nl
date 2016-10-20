function resize(){
    var itemWidth = $('.item').width();
    var itemPadding = $('.item-head').css('padding-top');
    var height = itemWidth - parseInt(itemPadding);
    $('.item-head').height(height);
};

resize();

$( window ).resize(function() {
    resize();
});
