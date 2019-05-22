$(document).ready(function () {
    console.log("ready!");

    var rotation = 10;
    $("#turnRight").click(function () {
        console.log('transform', 'rotate (' + rotation + 'deg)');
        $("#marvin").css('transform', 'rotate(' + rotation + 'deg)');
            console.log('transform', 'rotate(' + rotation + 'deg)');
            rotation = rotation + 5;
            $("#marvin").css('transform', 'rotate(' + rotation + 'deg)');
    });

    var rotationInverse = -10;
    $("#turnLeft").click(function () {
        console.log('transform', 'rotate (' + rotationInverse + 'deg)');
        $("#marvin").css('transform', 'rotate(' + rotationInverse + 'deg)');
            console.log('transform', 'rotate(' + rotationInverse + 'deg)');
            rotationInverse = rotationInverse - 5;
            $("#marvin").css('transform', 'rotate(' + rotationInverse + 'deg)');
    });



    var color = "white";
    $("#changeColor").click(function () {
        color = $("#colorSelect").val();
        console.log("background-color", color);
        $("body").css("background-color", color);

    });
});

