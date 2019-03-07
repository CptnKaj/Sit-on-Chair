$( function () {
$('#arrowLeft').on('click', function() {
    if($('.blackChair').attr('src') == "./images/black_chair.png") {
        $('.blackChair').attr('src', "./images/orange_chair.png")
    } else if ($('.blackChair').attr('src') == "./images/orange_chair.png") {
        $('.blackChair').attr('src', "./images/red_chair.png")
    } else if ($('.blackChair').attr('src') == "./images/red_chair.png") {
        $('.blackChair').attr('src', "./images/black_chair.png")
    }
})

$('#arrowRight').on('click', function() {
    if($('.blackChair').attr('src') == "./images/black_chair.png") {
        $('.blackChair').attr('src', "./images/red_chair.png")
    } else if ($('.blackChair').attr('src') == "./images/red_chair.png") {
        $('.blackChair').attr('src', "./images/orange_chair.png")
    } else if ($('.blackChair').attr('src') == "./images/orange_chair.png") {
        $('.blackChair').attr('src', "./images/black_chair.png")
    }
})

const $square1 = $('.square1');
const $square2 = $('.square2');

const $greenLine1 = $('.square1 .position');
const $greenLine2 = $('.square2 .position');

$square1.on('mouseover', function() {
    $greenLine1.hide();
})
$square1.on('mouseout', function() {
    $greenLine1.show();
})

$square2.on('mouseover', function() {
    $greenLine2.hide();
})
$square2.on('mouseout', function() {
    $greenLine2.show();
})

// Strona z krzeslami1

const $smallGreenArrow = $('.list_arrow');

$smallGreenArrow.on('click', function(){
    $(this).children().toggle();
})

const $chairOne = $('#kindOfChair');
$('#valueKind').hide();
$chairOne.children().eq(0).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueKind').html()));
    $('#pickedChair').attr('src', './images/red_chair.png');
    $('#kindOfChairInput').text('Clair');
    $('#moneyKind').text('Clair');
    $('#valueKind').text('2500.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueKind').html()));
})
$chairOne.children().eq(1).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueKind').html()));
    $('#pickedChair').attr('src', './images/orange_chair.png');
    $('#kindOfChairInput').text('Margarita');
    $('#moneyKind').text('Margarita');
    $('#valueKind').text('1200.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueKind').html()));
})
$chairOne.children().eq(2).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueKind').html()));
    $('#pickedChair').attr('src', './images/black_chair.png');
    $('#kindOfChairInput').text('Selena');
    $('#moneyKind').text('Selena');
    $('#valueKind').text('1750.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueKind').html()));
})

const $chairTwo = $('#colorOfChair');
$('#valueColor').hide();
$chairTwo.children().eq(0).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueColor').html()));
    $('#colorOfChairInput').text('Czerwony');
    $('#moneyColor').text('Czerwony');
    $('#valueColor').text('45.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueColor').html()));
})
$chairTwo.children().eq(1).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueColor').html()));
    $('#colorOfChairInput').text('Czarny');
    $('#moneyColor').text('Czarny');
    $('#valueColor').text('50.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueColor').html()));
})
$chairTwo.children().eq(2).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueColor').html()));
    $('#colorOfChairInput').text('Pomarańczowy');
    $('#moneyColor').text('Pomarańczowy');
    $('#valueColor').text('27.50').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueColor').html()));
})

const $chairThree = $('#fabricOfChair');
$('#valueFabric').hide();
$chairThree.children().eq(0).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueFabric').html()));
    $('#fabricOfChairInput').text('Tkanina');
    $('#moneyFabric').text('Tkanina');
    $('#valueFabric').text('115.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueFabric').html()));
})
$chairThree.children().eq(1).on('click', function(){
    $('#sum').html(Number($('#sum').html()) - Number($('#valueFabric').html()));
    $('#fabricOfChairInput').text('Skóra');
    $('#moneyFabric').text('Skóra');
    $('#valueFabric').text('200.00').show();
    $('#sum').html(Number($('#sum').html()) + Number($('#valueFabric').html()));
})

const $transport = $('.chair__checkbox label');
$('#moneyTransport').hide();
$('#valueTransport').hide();
$transport.on('click', function(){
    console.log($('.chair__checkbox input')[0].checked);
    if($('.chair__checkbox input')[0].checked == false){
        $('#moneyTransport').text('+ Transport').toggle();
        $('#valueTransport').text('85.99').toggle();
        $('#sum').html(Number($('#sum').html()) + Number($('#valueTransport').html()));
    } else {
        $('#moneyTransport').text('+ Transport').toggle();
        $('#valueTransport').text('85.99').toggle();
        $('#sum').html(Number($('#sum').html()) - Number($('#valueTransport').html()));
    }
})
})