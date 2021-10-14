class Api {
    
    // constructor(){
    //     this.client_id="ef7cd471a9d3a6dcb6a9"
    //     this.client_secret="e2c1cd8f63f8acb8967cf5eae96e9e322a3d0487"
        

    // }
    async getForecast(city){
        const response =await  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "cfbd40872cmsh7711a0fea41f1cep170f17jsn6bff8065b00e"
            }
        })
        if (response.ok) {
            const jsonValue = await response.json(); // Get JSON value from the response body
            // console.log(jsonValue.location)
            // console.log(jsonValue.current)
            // console.log(jsonValue.forecast)
            return Promise.resolve(jsonValue);
          } else {
            return "";
          }

      
    }

    
}