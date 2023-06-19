window.addEventListener("DOMContentLoaded",function(){
    var placeData=[
        {
            temp:"48°F - 7mph - 78°",
            subTitle:"Lake Tahoe, California",
            title:"Homewood Mountain & Lake Club",
            location:"39.08629948516978° N / -120.1605391°W" 
        },
        {
            temp:"56°F- 6mph-150°",
            subTitle:"Silicon Valley, California",
            title:"Corde Valle",
            location:"37.067811° N / -121.632827°W" 
        },
        {
            temp:"75°F-23mph-114°",
            subTitle:"La Quinta, California",
            title:"Madison",
            location:"33.660962° N / -116.244456°W" 
        },
        {
            temp:"75°F-23mph-114°",
            subTitle:"La Quinta, California",
            title:"Hideaway",
            location:"33.667059° N / -116.260879°W" 
        },
        {
            temp:"71°F-18mph-340°",
            subTitle:"Las Vegas, Nevada",
            title:"The Summit",
            location:"36.10804° N / -115.349337°W" 
        },
        {
            temp:"74°F- 1 mph -107°",
            subTitle:"Scottsdale, Arizona",
            title:"Estancia",
            location:"33.738105° N / -111.8665240°W" 
        },
        {
            temp:"72°F -1 mph -57°",
            subTitle:"Scottsdale, Arizona",
            title:"Mirabel",
            location:"33.823760° N / -111.851592°W" 
        },
        {
            temp:"75 °F- 23 mph -114°",
            subTitle:"La Quinta, California",
            title:"Hideaway",
            location:"33.667059° N / -116.260879°W" 
        },
        {
            temp:"72 °F- 23 mph- 114°",
            subTitle:"Scottsdale, Arizona",
            title:"Mirabel",
            location:"33.823760° N / -111.851592°W" 
        },
        {
            temp:" 74°F-  2 mph- 207°",
            subTitle:"Los Cabos, Mexico",
            title:"El Dorado",
            location:"22.995771° N / -109.746423°W" 
        },
        {
            temp:"74 °F- 2 mph- 29°",
            subTitle:"Cabo San Lucas, Mexico",
            title:"Chileno Bay",
            location:"22.953650° N / -109.816218°W" 
        },{
            temp:"56 °F- 11 mph- 310°",
            subTitle:"British Columbia, Canada",
            title:" James Island",
            location:"48.602830922° N / -123.342998628°W" 
        },{
            temp:"51 °F- 6 mph- 170°",
            subTitle:"Coeur d'Alene, Idaho",
            title:"Gozzer Ranch",
            location:"47.617997° N / -116.766169°W" 
        },{
            temp:"44 °F- 33 mph- 280°",
            subTitle:"Whitefish, Montana",
            title:"Iron Horse",
            location:"48.449344° N / -114.347434°W" 
        },{
            temp:"35 °F- 2 mph- 69°",
            subTitle:"Big Sky, Montana",
            title:"Yellowstone Club",
            location:"45.245981° N / -111.374457°W" 
        },{
            temp:"73 °F- 14 mph- 80°",
            subTitle:"Westlake, Texas",
            title:"Vaquero",
            location:"32.965190° N / -97.194715°W" 
        },
        {
            temp:"79 °F- 5 mph- 180°",
            subTitle:"Austin, Texas",
            title:"Driftwood",
            location:"30.139339° N / -98.022342°W" 
        },
        {
            temp:"71 °F- 3 mph- 345°",
            subTitle:"Guanacaste, Costa Rica",
            title:"Zapotal Golf & Beach Club",
            location:"9.998076° N / -85.305086°W" 
        },
        {
            temp:"63 °F- 2 mph- 261°",
            subTitle:"Nashville, Tennessee",
            title:"Troubadour",
            location:"35.828904° N / -86.679158°W" 
        },{
            temp:"54 °F- 4 mph -332°",
            subTitle:"Cashiers, North Carolina",
            title:"Mountaintop",
            location:"35.106704° N / -83.097106°W" 
        },
        {
            temp:"82 °F-  4mph- 190°",
            subTitle:"Naples, Florida",
            title:"Naples Beach Club",
            location:"26.137667°N/-81.807056°W" 
        },
        {
            temp:"81 °F - 14mph- 175°",
            subTitle:"Great Guana Cay, Bahamas",
            title:"Baker's Bay",
            location:"26.686966° N / -77.146015°W" 
        },
        {
            temp:"76 °F- 2 mph- 170°",
            subTitle:"Rio San Juan, Dominican",
            title:"Republic Playa Grande",
            location:"19.3830° N/-70.034601° W" 
        },
        {
            temp:"81 °F - 20 mph- 87°",
            subTitle:"Barbuda, West Indies",
            title:"Barbuda Ocean Club",
            location:"17.549884° N/-61.765587° W" 
        },
        {
            temp:"54 °F- 0 mph- 346°",
            subTitle:"Amenia, New York",
            title:"Silo Ridge",
            location:"41.834259° N/-73.571259° W" 
        },
        {
            temp:"60 °F - 0 mph- 0°",
            subTitle:"Westhampton Beach, New York",
            title:"Dune Deck",
            location:"40.8093799° N / -72.6458277°W" 
        },
        {
            temp:"60 °F-  5mph -291°",
            subTitle:"The Hamptons, New York",
            title:"The Hills Golf Club",
            location:"40.84778° N / -72.589811°W" 
        },
        {
            temp:"73 °F - 7mph- 347°",
            subTitle:"Comporta, Portugal",
            title:"CostaTerra",
            location:"38.198750° N / -8.764298°W" 
        },
        {
            temp:"67 °F - 3 mph -136°",
            subTitle:"Perthshire, Scotland",
            title:"Taymouth Castle",
            location:"56.595999 ° N / -3.979470°W" 
        },
        {
            temp:"48 °F- 7 mph- 78°",
            subTitle:"Dubai South, United Arab Emirates",
            title:"Discovery Dunes",
            location:"39.08629948516978° N / -120.1605391°W" 
        },
        {
            temp:"71 °F- 12 mph- 86°",
            subTitle:"Kaua'i, Hawaii",
            title:"North Shore Preserve",
            location:"22.193420° N / -159.361620°W" 
        },
        {
            temp:"75 °F - 5 mph- 80°",
            subTitle:"Kohala, Hawaii",
            title:"Kūki'o",
            location:"19.817312° N / -155.998547°W" 
        },
        {
            temp:"73 °F -6 mph- 79°",
            subTitle:"Maui, Hawaii",
            title:"Makena",
            location:"20.690308° N / -156.440582°W" 
        },
        {
            temp:"75 °F- 4 mph- 180°",
            subTitle:"Hobe Sound, Florida",
            title:"Atlantic Fields",
            location:"27.045829992748335° N / -80.2137008693191°W" 
        }     
    ];

    var left_btn=document.getElementById("left_btn");
    var right_btn=document.getElementById("right_btn");
    var temperature=document.querySelector(".tempText");
    var subTitle=document.querySelector(".subTitle");
    var title=document.querySelector(".mainTitle");
    var location=document.querySelector(".location_text");
    var counter=0;

    function setData(counter){
        temperature.textContent=placeData[counter].temp;
        subTitle.textContent=placeData[counter].subTitle;
        title.textContent=placeData[counter].title;
        location.textContent=placeData[counter].location
    }
    setData(counter);

    left_btn.addEventListener("click",function(){
        console.log("left")
       if(counter>0){
        counter-=1;
        setData(counter)
       }
       else if(counter==0){
        counter=placeData.length-1
        setData(counter)
       }
    })

    right_btn.addEventListener("click",function(){
        console.log("right")
        if(counter < placeData.length-1){
            counter+=1; 
           setData(counter)
        }
        else if(counter>=placeData.length-1){
            counter=0;
           setData(counter)
        }
      })
})