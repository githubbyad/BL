$('#file').change(function() { // INPUT ID from where we get image
var file = $(this)[0].files[0];
if(file) {
orientation(file, function(base64img, value) {
$('#placeholder1').attr('src', base64img);
console.log(rotation[value]);
var rotated = $('#placeholder2').attr('src', base64img); // IMAGE SRC where we place
if(value) {
rotated.css('transform', rotation[value]);
}
});
}
});
