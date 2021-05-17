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

function toggleAllBox(source) {
    checkboxes = document.getElementsByClassName('products-checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

function setCheckAll() {
    document.querySelector('input.products-checkbox-all').checked =
    document.querySelectorAll('.products-checkbox').length ==
    document.querySelectorAll('.products-checkbox:checked').length;
}