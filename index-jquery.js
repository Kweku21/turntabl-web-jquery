"use strict"

$(document).ready(function(){

    let title = $("#title")
    console.log(title.html());
    title.html("JQuery JavaScript")

    let subtitle = $("#subtitle")
    subtitle.html("Using JQuery JavaScript for now")
    subtitle.css("color","green")

    let image = $("#image")
    image.attr("src","assets/images/EeHSbqNXsAEtsb6.jpeg")


    /**
     * Fetch from an API
     */
     $.get('https://jsonplaceholder.typicode.com/todos?_limit=50',  // url
     function (data) {  // success callback
        let todo_list = $('#todo-list')
        
        data.forEach(d =>{
            todo_list.append("<li>"+d.title+"</li>")
        })
   });

})