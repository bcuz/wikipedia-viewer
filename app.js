$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {
        // here is where I need to pick the specific array i want to work with

        var templatize = function(title) {
            var result = $('.templates .pages').clone();

            // hrm. but how to put on the other stuff?
            // am i just back where i began?
            // suppose i could find the necessary element that i need and add on to it.
            // not entirely where i began because i have access to the other array
            var repElem = result.find("p");
            repElem.text(title)

            // var index_to_cut = title.indexOf("wiki/")
            // var link_name = title.slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
            // var userElem = result.find("a");
            // userElem.attr('href', title)
            // userElem.text(link_name)

            // should prolly be appended right here
            // it was returning, but
            $('.results').append(result);
        }

        count += 1;
        // console.log(count);
        if (count === 4) {
            // why is only the last item showing up here
            // when they all show in the console
        var desired_array = item;

    } else if (count === 3 ) {
        var desired_array = item;
        // console.log(desired_array);
        for (title in desired_array) {

            templatize(desired_array[title])


        }
    }
        // console.log(thin);




      //   }
      //   // there's an array of titles





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

                viewLink(data[item])
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