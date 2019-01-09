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
})