(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#searchButton').click(APICall)

  }); // end of document ready
})(jQuery); // end of jQuery name space

function APICall(){

	var query = $('#inputSearch').val();
	console.log(query);
	$.ajax({
	  method: "GET",
	  url: "https://musicbrainz.org/ws/2/artist?query="+query,
	  dataType: "json",
	}).done(function (msg) {
		$('#musicsList').empty();
	  for(var item in msg.artists) {
	    console.log(msg.artists[item]);
	   	$('#musicsList').append('<li class="collection-item"><div><h5>'+msg.artists[item].name+'</h5>'+'('+msg.artists[item].disambiguation+')<a href="#!" class="secondary-content"></a></div></li>');

	  };
	}).fail(function () {
		alert(query);
	});

}


document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
}