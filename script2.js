$.ajax({
    url: 'https://api.punkapi.com/v2/beers',
    method: 'GET',
    dataType: 'json',
  })
  .then(function(res) {
    const arrayOfFood = []
    res.forEach(function(beerSelection) {
      let myFoodPairing = beerSelection.food_pairing.find(item => item.includes('chicken'))
      if (myFoodPairing) arrayOfFood.push(myFoodPairing) //prevent undefined being added to array
    })
    console.log(arrayOfFood) 
  })

  $(document).ready(function(){
      
  })