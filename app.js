$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty

    // preview text from the page, too

    var viewData = function(results) {
      var snippet_array = results[2]
      var link_array = results[3]
        var result = $('.templates .answers').clone();

      for (item in link_array) {

        var index_to_cut = link_array[item].indexOf("wiki/")

        var userElem = result.find(".user a");
        userElem.attr('href', user.user.link)
        userElem.text(user.user.display_name)
        // might need non-replaced string for paragraph stuff
        // link name not perfect
        // console.log(link_array[item].slice(index_to_cut + "wiki/".length));
        var link_name = link_array[item].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")

        $("div").append("<p><a href='" + link_array[item] + "'>" + link_name + "</a></p>")
      }

      for (item in snippet_array) {
        // this is prolly where a template is a good thing
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
            for (item in data[3]) {
                var done = viewData(data[3][item])
                $('.results').append(done);
            }
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