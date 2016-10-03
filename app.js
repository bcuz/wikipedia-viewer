$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {
        // here is where I need to pick the specific array i want to work with

        var templatize = function(title) {
            var result = $('.templates .pages').clone();

            console.log(title);
            var index_to_cut = title.indexOf("wiki/")
            var link_name = title.slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
            var userElem = result.find("a");
            userElem.attr('href', title)
            userElem.text(link_name)

            // this is ending the for loop after the first item
            // in other projects it would make sense to return
            // after each item, because then next time would go. A method perhaps?
            return result;
        }

        count += 1;
        // console.log(count);
        if (count === 4) {
            // why is only the last item showing up here
            // when they all show in the console
        var desired_array = item;

        for (title in desired_array) {

            templatize(desired_array[title])


        }
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