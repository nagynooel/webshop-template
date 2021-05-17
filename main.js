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

/*Individual product pages - gallery*/
//Classnames
var modalCont = "custom_modal";
var slideCont = "custom_modal_slide";

function openModal() {
    document.getElementById("custom_modal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("custom_modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom_modal_slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

/*Individual product pages - Wishlist*/
function toggleWishlist(){
    $("#product-wishlist-icon").toggleClass("far");
    $("#product-wishlist-icon").toggleClass("fas");
}