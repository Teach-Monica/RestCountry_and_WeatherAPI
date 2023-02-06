// weather_api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a95e4166f9952966f92f2e5eb2fcc3ed`
var global_parent=document.querySelector('.parent')

countries_api='https://restcountries.com/v2/all'

output=fetch(countries_api,{
    "method":"GET",
    "content-type":" application/json; charset=UTF-8"
})

console.log(output);
output
.then((res)=>{
    console.log(res) //response
    out=res.json() //promise
    return out
})

   .then((res)=>{
        console.log(res); //response

        for(let i of res){
            var name=i['name']
            var imag_flag=i['flags']['svg']
            var capital = i['capital']
            var region = i['region']
            var capital = i['capital']
            //var global_parent=document.querySelector('.parent')
            var parent_flag_data=document.createElement('div')

          //creating image 
            var name_div=document.createElement('div')
            var name_ele=document.createElement('h3')
            name_ele.innerText=name
            name_ele.style.padding="0"
            name_ele.style.margin="0"
            name_div.append(name_ele)
            //name_div.setAttribute('height','20px')
            //name_div.style.border="2px solid grey"
            name_div.style.padding="0"
            name_div.style.margin="10px"
            //name_div.style.textAlign="left"
            //name_ele.style.backgroundColor="pink"
            parent_flag_data.append(name_div)
            //parent_flag_data.style.textAlign='centre'

            var img_ele=document.createElement('img')
            img_ele.src=imag_flag
            img_ele.setAttribute('height','50px')
            //img_ele.style.alignItems="centre"
            parent_flag_data.append(img_ele)
            

            //add capital and region
            var capital_ele=document.createElement('p')
            var region_ele=document.createElement('p')
            capital_ele.innerText=`Capital:${capital}`;
            region_ele.innerText=`Region:${region}`;
            parent_flag_data.append(capital_ele)
            parent_flag_data.append(region_ele)
            parent_flag_data.style.border='2px solid #D0B8A8'
            parent_flag_data.style.padding='20px';
            parent_flag_data.style.margin='20px';
            parent_flag_data.style.width='200px'
            parent_flag_data.style.fontFamily="'Lato', sans-serif"
            parent_flag_data.style.backgroundColor='#DFD3C3'

            //parent_flag_data.style.alignItems='centre'

            if(capital){
                var lat
                var lang
                try{
                [lat,lang]=i['latlng']
                parent_flag_data.setAttribute('lat',lat)
                parent_flag_data.setAttribute('lang',lang)
                console.log('latitude:',lat)
                console.log('longitude:',lang);
                }
                catch{
                console.log('this capital is not having lat and lang');
                console.log(capital);
                }
                var butten_ele=document.createElement('button')
            butten_ele.innerHTML='Click for Weather'
            butten_ele.classList.add('.weather_class')
            butten_ele.setAttribute('onclick','weather_fun(this)');
            butten_ele.style.backgroundColor='#85586F';
            butten_ele.style.borderRadius='7px';
            //butten_ele.style.box-shadow=" 5px 10px #888888";
            butten_ele.style.border='#85586F'
            butten_ele.style.padding='5px'
            butten_ele.style.margin='5px'
            parent_flag_data.append(butten_ele)

            //appending the parent_flag_data which is a div to global_parent div
            global_parent.append(parent_flag_data)
//console.log(global_parent)
            //console.log('flag',imag_flag);
            //break;
        }

    }
        
        console.log(res[0]);
        console.log(JSON.stringify(res[0]['latlng']));
        [lat,lon]=res[0]['latlng'] //destructuring(to slite the elements)
        console.log('lat',lat);
        console.log('lon',lon);
        //fetching the weather api
        // weather_api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a94a2fdbbb40fa54932c4a959f857ae2`
        // console.log(weather_api);
        // output2=fetch(weather_api)
        // output2
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res)
        //     console.log(res['weather'][0])
        // })
   })

  async function weather_fun(e){
    parent=e.parentElement
    var lat=parent.getAttribute('lat')
    var lang=parent.getAttribute('lang')
    console.log(parent);
    
    //fetching the weather api
        weather_api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=a94a2fdbbb40fa54932c4a959f857ae2`
        //console.log(weather_api);
        output1= await fetch(weather_api)
        //output2
        res=await output1.json()
        console.log(res);
        document.querySelector('.modal-body p').innerText=res['weather'][0]['description']
        document.querySelector('.modal').style.display='block'
        //.then((res)=>res.json())
        //.then((res)=>{
            //console.log('weather data')
            //console.log(res['weather'][0])
            //alert(res['weather'][0]['description'])
            // document.querySelector('.modal-body p').innerText=res['weather'][0]['description']
            // document.querySelector('.modal').style.display='block'
        //})
        console.log('button pressed');
    console.log(lat)
    console.log(lang)
    }
// var  closing_btn=document.querySelector('.btn-close')
// closing_btn.addEventListener('click',()=>{
//     document.querySelector('.modal').style.display='none'
// })}
function btn_close(){
       document.querySelector('.modal').style.display='none'
}
   

