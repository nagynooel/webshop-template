function showSuccess(){
    $(".alert").addClass("show");
    setTimeout(
        function() 
        {
            $(".alert").removeClass("show");
        }, 2000);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})