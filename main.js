function showSuccess(){
    $(".alert").addClass("show");
    setTimeout(
        function() 
        {
            $(".alert").removeClass("show");
        }, 5000);
}