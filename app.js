$(function() {

    // var getData = function()

  //   var queryData = {
  //   action: "query",
  //   titles: "warner",
  //   format: "json"
  // };

    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php",
    data: {
    action: "query",
    // titles: "warner",
    format: "json"
  },
    dataType: 'json',
    // headers: { 'Api-User-Agent': 'Example/1.0' }
    success: function( jsondata ){
    console.log(( jsondata.result ));
  }
})
//     .done(function(result){
//     console.log(result);
// })
//   .fail(function(jqXHR, error){ //this waits for the ajax to return with an error promise object
//     // console.log(jqXHR);
//   });
});