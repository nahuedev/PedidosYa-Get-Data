const Axios = require('axios')



const ParserRestaurantData = (restaurant) => {
    return {
        'precioPromedio': restaurant?.averagePrice,
        'categorias': restaurant?.categories,
        'descuento': restaurant?.discount,
        'distancia': restaurant?.distance,
        'comida': restaurant?.food,
        'speed': restaurant?.speed,
        'name': restaurant?.name,
    }
}

async function getRestaurantsData() {
    let response = await Axios.get(urlRequest, {
        headers: headers
    })
    let restaurantResponse = response.data.list.data;
    restaurantData = restaurantResponse.map(restaurant => ParserRestaurantData(restaurant));
    console.log("Se trajieron ", response.data.list.count, " restaurantes");
    console.log("El total son ", response.data.list.total)

    return restaurantData;
}

const fs = require('fs');

const saveInJson = (restaurantData) => {
    restaurantsJson = JSON.stringify(restaurantData);
    fs.writeFileSync('peya.json', restaurantsJson);
}

getRestaurantsData().then(restaurantsData => saveInJson(restaurantsData))
