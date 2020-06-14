const app = {};
app.apiUrl = 'https://api.punkapi.com/v2/beers/?';


app.getBeers = function(food){
    $.ajax({
        url: app.apiUrl,
        method:'GET',
        datatype:'json',
        data:{
            key: app.apiUrl, 
            format: 'json',
            food:app.foodName
        }
    })
    .then(function(response){
        app.displayBeers(response)
    })
}

// app.foodSubmit = $('#foodOption').on('submit', function(){
//     event.preventDefault();
//     app.foodName = $('input').val();
//     console.log(app.foodName);
// });

app.displayBeers = function(Array){
    Array.forEach(function(beerSelection){
            if(beerSelection.image_url){
                const beerName = $('<h2>').addClass('beerName').text(beerSelection.name);
                const beerDescription = $('<p>').addClass('beerDescription').text(beerSelection.description);
                const pairing = $('<p>Food Pairings:<p>').addClass('pairingTitle')
                const beerFood = $('<p>').addClass('beerFood').text(beerSelection.food_pairing);
                const beerImage = $('<img>').addClass('beerImage').attr('src',beerSelection.image_url);
                const beerFrame = $('<div>').addClass('beerFrame').append(beerName,beerDescription, pairing, beerFood);
                const beerFrame2 = $('<div>').addClass('beerFrame2').append(beerImage)
                const beerContainer = $('<div>').addClass('beerContainer').append(beerFrame,beerFrame2)
                $(`.asideContainer`).append(beerContainer);
            }       
    });
};

        $("#foodOption").on("click", function () {
            $(".asideContainer").toggle();
        });

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

app.init = function(){
    $('#textInput').on('submit',function(){
        event.preventDefault();
        alert(`Click the button to get some beers!`)
    })
    app.foodSubmit = $('#foodOption').on('click', function(){
        event.preventDefault();
        $('.asideContainer').empty();
        app.foodName = $('input').val();
        app.getBeers();
        $(`input`).val('');
    });
    
};

$(document).ready(function(){
    app.init();
})

