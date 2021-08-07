const axios = require('axios');

let urlRequest = 'https://www.pedidosya.com.uy/mobile/v5/shopList?businessType=RESTAURANT&country=1&includePaymentMethods=VisaNet%2COCA%2CMastercard%20UY%2CTicket%20Restaurant%20Online%2CTicket%20Alimentaci%C3%B3n%20Online%2CCreditel%20UY%2CSpreedly%20UY&point=-34.9586548%2C-54.9430937&sortBy=default&withFilters=true';

const headers = {
    'authority': 'www.pedidosya.com.uy',
    'method': 'GET',
    'path': '/mobile/v5/shopList?businessType=RESTAURANT&country=1&includePaymentMethods=VisaNet%2COCA%2CMastercard%20UY%2CTicket%20Restaurant%20Online%2CTicket%20Alimentaci%C3%B3n%20Online%2CCreditel%20UY%2CSpreedly%20UY&max=30&offset=30&point=-34.9586548%2C-54.9430937&sortBy=default&withFilters=true',
    'scheme': 'https',
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,es;q=0.8',
    'cookie': '__Secure-peya.sid=s%3Ac959fd8a-697a-48f0-98a9-a140c0acb017.R57xs%2B80JAHNtw1pw0lKd5iALW4tGegaWWYaAfo%2BXHM; __Secure-peyas.sid=s%3Ae5303e83-0af1-40e3-82fb-bcc18df57e15.R3GVYfySL7hFQYPVBB1K%2BFX44rJ0wmukcjfaiKcTegk',
    'referer': 'https://www.pedidosya.com.uy/restaurantes?address=Baupres&city=Punta%20del%20Este&lat=-34.9586548&lng=-54.9430937',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
}

const getDataAsync = async () => {

    let response = await axios.get(urlRequest, { headers: headers });

    return response;
}

