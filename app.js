$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty

    // preview text from the page, too

    var viewData = function(results) {
      // var snippet_array = results[]
      var link_array = results[2]

      for (item in link_array) {

        var index_to_cut = link_array[item].indexOf("wiki/")

        // might need non-replaced string for paragraph stuff
        // link name not perfect
        console.log(link_array[item].slice(index_to_cut + "wiki/".length));
        var link_name = link_array[item].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")

        $("div").append("<p><a href='" + link_array[item] + "'>" + link_name + "</a></p>")
      }
    }

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            viewData(data)
        },
})

    }

    $("form").submit(function(e) {
    e.preventDefault();
    $("div").html('')
    getData($("input").val())

    })

    getData("kurt warner")


});