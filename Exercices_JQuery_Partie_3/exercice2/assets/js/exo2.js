 count = 0;
$("#updateP").click(function() {
    count++;
    $("#counter").html("My current count is: "+count);
});
$("#updateM").click(function() {
    count--;
    $("#counter").html("My current count is: "+count);
});
