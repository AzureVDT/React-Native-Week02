const apiUrl = "https://picsum.photos/v2/list?page=2&limit=100";
(function() {
    $.ajax({
            method: "GET",
            url: apiUrl,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
            data.forEach(function(element) {
                document.getElementById("content").innerHTML += `<div>
                <h1>${element.author}</h1>
                <img src="${element.download_url}" alt="${element.author}" style="width: 500px; object-fit: cover;">
                </div>`
            });

        })
        .fail(function() {
            alert("no good");
        });
})()