function change_color() {
    document.body.style.backgroundColor = "pink";
    axios.request ({
        url: "https://api.punkapi.com/v2/beers",
        method: "GET",
        params: {
            abv_gt: "50.0"
        }
    
    }).then(beer_success).catch(beer_failed);

}


var new_button = document.createElement('button');
new_button.innerText = "Party Time";
//document.body.appendChild(new_button);
var button_container = document.getElementById("button");
button_container.appendChild(new_button);

new_button.addEventListener('click', change_color);


function kayne_success(response) {
    var quote_tag = document.createElement("h1");
    quote_tag.innerText = response.data.quote;
    button_container.appendChild(quote_tag);
}

function kayne_failed(error) {
    var error_tag = document.createElement("h1");
    error_tag.innerText = "Sorry, something went wrong. Please refresh the page."
    button_container.appendChild(error_tag);
}

axios.request ({
    url: "https://api.kanye.rest/"
}).then(kayne_success).catch(kayne_failed);

function beer_success(response) {
    var quote_tag = document.createElement("h1");
    quote_tag.innerText = response['data'][0]['name'];
    button_container.appendChild(quote_tag);
}

function beer_failed(error) {
    var error_tag = document.createElement("h1");
    error_tag.innerText = "Sorry, something went wrong. Please refresh the page."
    button_container.appendChild(error_tag);
}
