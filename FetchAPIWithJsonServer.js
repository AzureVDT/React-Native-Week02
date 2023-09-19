const jsonapiUrl = "http://localhost:3000/db";
(function() {
    $.ajax({
            method: "GET",
            url: jsonapiUrl,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
            document.getElementById("content").innerHTML = JSON.stringify(data);
        })
        .fail(function() {
            alert("no good");
        });
})()

// // Update a user
var url = "http://localhost:3000";

var data = {};
data.fullName = "Thong Dinh";
data.username = "Azure03";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url + '/profile', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);