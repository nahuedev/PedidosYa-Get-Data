
let dataRestaurantes = require('./dataRestaurantes.json')
let preciosPromedios = dataRestaurantes.list.data.map(restaurant => {
    return {

        'PrecioPromedio': restaurant.averagePrice, name: restaurant.name
    }
});

preciosPromedios.sort(function (a, b) {
    return a.PrecioPromedio - b.PrecioPromedio;
});
