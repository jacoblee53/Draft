import "../css/main.scss";

$(function () {
    $("#md").on("keyup blur",function () {
        $('#right-html').html(marked($("#md").val()));
    });
});