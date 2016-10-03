$(function() {

    // random article easy

    // need to acct for search not having a result
    // if array is empty
        var count = 0;

    var viewLink = function(item) {
        // here is where I need to pick the specific array i want to work with


        count += 1;
        // console.log(count);
        if (count === 4) {
            // why is only the last item showing up here
            // when they all show in the console
        var desired_array = item;

        for (title in desired_array) {
            var result = $('.templates .pages').clone();

            console.log(desired_array[title]);
            var index_to_cut = desired_array[title].indexOf("wiki/")
            var link_name = desired_array[title].slice(index_to_cut + "wiki/".length).replace(/_/g, " ")
            console.log(link_name);
            var userElem = result.find("a");
            userElem.attr('href', desired_array[title])
            userElem.text(link_name)

            return result;
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