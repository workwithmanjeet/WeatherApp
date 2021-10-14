const api = new Api;
const ui = new UI;

document.getElementById('btn1').addEventListener('click',clc );
document.addEventListener("keyup", clear);
function clear(e){
  const city= document.getElementById('city').value;
  if(city==""){
    ui.clearall()
  }

} 
function clc(e){
    const city= document.getElementById('city').value;

    if(city!==""){
      api.getForecast(city)
      .then(data =>{
        if(data !== ""){

          ui.showLocation(data.location,data.current,data.forecast)


          // console.log(data)
        }
        else{
          alert("Invaild City Name")
        }
      })


    }
    else{
      alert("Enter City Name")
    }


  e.preventDefault();
}