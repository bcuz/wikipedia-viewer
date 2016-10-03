$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {
        // here is where I need to pick the specific array i want to work with

        // for (thing in thin) {
        //     console.log(thin[thing]);
        // }

        // now this might be being cloned too much

        count += 1;
        // console.log(count);
        if (count === 4) {
        var result = $('.templates .pages').clone();
        var thin = item;

        for (thing in thin) {
            console.log(thin[thing]);
            var index_to_cut = thin[thing].indexOf("wiki/")
            var link_name = thin[thing].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
            var userElem = result.find("a");
            userElem.attr('href', thin[thing])
            userElem.text(link_name)

        }
      return result;
    }
        // console.log(thin);




      //   }
      //   // there's an array of titles




        // var repElem = result.find(".reputation");
        // repElem.text(user.user.reputation)
        // link name not perfect


    }

    var getData = function(title) {
    $.ajax({
    type: 'GET',
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&namespace=0&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            // the data being in different arrays makes things screwy
            // Wrong


            for (item in data) {
                // the goal here is to pass all the arrays tho
                // not just the array with the link info
                // passing each array within the big array

                // each time around its an array, but right now I just want the
                // last one
                // console.log(data[item]);

                var done = viewLink(data[item])
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