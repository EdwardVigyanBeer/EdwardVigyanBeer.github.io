const app = {};
app.apiUrl = 'https://api.punkapi.com/v2/beers';
app.apiUrl2  = `https://api.punkapi.com/v2/beers?page=1&per_page=80`

app.getBeers = function(){
    $.ajax({
        url: app.apiUrl2,
        method:'GET',
        datatype:'json',
    })
    .then(function(response){
        app.displayBeers(response)
    })
}

app.displayBeers = function(Array){
    Array.forEach(function(beerSelection){
        // if(
        //     beerSelection.food_pairing[0].includes('cake') || 
        //     beerSelection.food_pairing[1].includes('cake') || 
        //     beerSelection.food_pairing[2].includes('cake')
        //     )
            {
                const beerName = $('<h2>').text(beerSelection.name);
                const beerDescription = $('<p>').text(beerSelection.description);
                const beerFood = $('<p>').text(beerSelection.food_pairing);
                const beerImage = $('<p>').text(beerSelection.image_url);
                console.log(beerSelection.name);
                console.log(beerSelection.id);
                // console.log(beerSelection.image_url);
                // console.log(beerDescription);
                // console.log(beerFood);
                // console.log(beerImage);
                const beerFrame = $('<div>').append(beerName, beerDescription, beerFood, beerImage);
                $(`.aside`).append(beerFrame);
        }
    });
};

// Other .then Method
// .then(function (res) {
//     res.forEach(function (beerSelection, index) {
//     let myTest;
//     if (beerSelection.food_pairing.includes('Clootie dumpling')) {
//         myTest = beerSelection;
//     } else {
//         return;
//     }
//     })
// })

app.foodSubmit = $('.foodOption').on('submit', function(){
    event.preventDefault();
    app.foodName = $('input').val();
    console.log(app.foodName);
});

app.init = function(){
    app.getBeers();
};

$(document).ready(function(){
    app.init();
})

