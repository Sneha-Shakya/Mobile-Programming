$(document).ready(function () {

    $("#shuffleBtn").click(function () {

        let boxes = $("#boxContainer .box");

        boxes.sort(function () {
            return Math.random() - 0.5;
        });

        $("#boxContainer").html(boxes);
    });

});
