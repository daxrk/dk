$(function () {
$('#MOSTAFA,#mostafa').addClass("active");
$('.twitter').addClass('active2');
$('.facebook').addClass('active3');
$('.youtube,.instagram,.tiktok').addClass('active4');
$('#mostafa span').animate({
  width: "189px"
},2000).animate({
  borderRight: "0"
},200);

})


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.text());
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.text());
  }