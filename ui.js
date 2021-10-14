class UI{
    constructor() {
        this.loc_disp=document.getElementById('location');
        this.curr=document.getElementById('curr');
        // this.cont=document.getElementById('cont');
        
    } 

    showLocation(Location,Current,Forecast){
        const forecast=Forecast.forecastday;
        // console.log(forecast[0]);
        const date =Location.localtime.slice(0,9);
        const time =Location.localtime.slice(11,16);
        this.loc_disp.innerHTML=`
            <div class="close">
                <div class= datetime>
                    <h3>${date}</h3>   
                    <h1 class ="time">${time}</h1>
                </div>
                <div class="temp">
                    <div class="text">
                    
                        <div class="icon">
                            <h1>${Current.temp_c}&#8451;</h1> 
                            <img src=${Current.condition.icon} alt=${Current.condition.text}>
                        </div>
                        <div class="cond">
                        <p>${Current.condition.text}  </p>
                        </div>
                    
                    </div> 
                    
                </div>
                
                <div class= loc>
                    <h3>${Location.name}, ${Location.region} </h3>
                    <h3> ${Location.country}</h3>
                    <p>Last Updated : ${Current.last_updated}</p>
                </div> 
                
            </div>
        `;
        this.curr.innerHTML=`
            <div class="cont" id="cont">
                <div class="block1">
                    <div class="b1">
                        <div class="item" ><h3>Current Weather</h3></div>
                        <div class="item" ><p> Wind Speed : ${Current.wind_kph} Km/h </p></div>
                        <div class="item" ><p> Pressure  : ${Current.pressure_mb} mm  </p></div>
                        <div class="item" ><p> Precipitaion : ${Current.precip_mm} mm  </p></div>
                        <div class="item" ><p>Wind gust: ${Current.gust_kph} Km/h </p></div>
            
                    </div>
                    <div class="b2">
                        <div class="item" > <br>  </div>
                        <div class="item" ><p> Wind Direction : ${Current.wind_dir} </p></div>
                        <div class="item" ><p> UV Index : ${Current.uv}  </p></div>
                        <div class="item" ><p> Humidity : ${Current.humidity} % </p></div>
                        <div class="item" ><p> Cloud : ${Current.cloud} % </p></div>
                    </div>
                </div>

                <div class="block2">
                    <div class="fhead">
                        <h3>Next 3 Days Forecast</h3>
                    </div>

                    <div class="forcast">
                        <div class="day1">
                            <div>
                                <p>${forecast[0].date}</p>
                
                            </div>
                            <div>
                                <div class="icon">
                                    <h1>${forecast[0].day.avgtemp_c}&#8451;</h1> 
                                    <img src=${forecast[0].day.condition.icon} alt=${Current.condition.text}>
                                </div>
                                <div class="cond">
                                    <p>${forecast[0].day.condition.text}  </p>
                                    <p>Wind Speed :${forecast[0].day.maxwind_kph}  Km/h </p>
                                    <p>SnowFall :${forecast[0].day.daily_will_it_snow} % </p>

                                </div>
                            </div>

                        
                        </div>

                        <div class="day1">
                            <div>
                                <p>${forecast[1].date}</p>
                
                            </div>
                            <div>
                                <div class="icon">
                                    <h1>${forecast[1].day.avgtemp_c}&#8451;</h1> 
                                    <img src=${forecast[1].day.condition.icon} alt=${Current.condition.text}>
                                </div>
                                <div class="cond">
                                    <p>${forecast[1].day.condition.text}  </p>
                                    <p>Wind Speed :${forecast[1].day.maxwind_kph}  Km/h </p>
                                    <p>SnowFall :${forecast[1].day.daily_will_it_snow} % </p>
                                </div>
                            </div>
                        </div>


                        <div class="day1">
                            <div>
                                <p>${forecast[2].date}</p>
            
                            </div>
                            <div>
                                <div class="icon">
                                    <h1>${forecast[2].day.avgtemp_c}&#8451;</h1> 
                                    <img src=${forecast[2].day.condition.icon} alt=${Current.condition.text}>
                                </div>
                                <div class="cond">
                                    <p>${forecast[2].day.condition.text}  </p>
                                    <p>Wind Speed :${forecast[2].day.maxwind_kph}  Km/h </p>
                                    <p>SnowFall :${forecast[2].day.daily_will_it_snow} % </p>
                                </div>
                            </div>
                        </div>


                    </div>
                   
                </div>

            </div>
        
        `;

         
    
    }

    clearall(){
        this.loc_disp.innerHTML="";
        this.curr.innerHTML="";
    }


    showAlert(message,className){
        
        const div = document.createElement('div');
        div.className = className;
        div.style.color = "red";
        div.style.fontSize = "large";
        div.appendChild(document.createTextNode(message) );
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);
   
    }

}

/* <div class="block1">

<

<div>

<div class="block2">
<p>dsfsdafasdgv</p>


</div> */