window.addEventListener("DOMContentLoaded",function(){
    var title_discription=[
        {
            title: "Discovery's newest property in Kaua'i North Shore Preserve",
             discription: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua'i. North Shore Preserve, a one-of- a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."
        },
        {
            title: "James Island Discovery's Newest Property",
            discription: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company's most exclusive community to date and Discovery's first project in Caneda,"
        },
        {
            title: "CostaTerra Discovery's 23rd property",
            discription: "Discovery Land Company, the world's leading developer of luxury private residential communities,clubs and resorts has announced its 23rd property and first in Europe,"
        },
        {
            title: "Troubadour To Open Golf Course Fall 2019",
            discription: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall"
        }
    ];
    var left_btn=document.getElementById("left-btn");
    var right_btn=document.getElementById("right-btn");
    var main_texttitle=document.querySelector(".main-texttitle");
    var main_content=document.querySelector(".main-content");
    var counter=0;

    function callData(counter){
        main_texttitle.textContent=title_discription[counter].title;
        main_content.textContent=title_discription[counter].discription;
    }
    callData(counter);

    left_btn.addEventListener("click",function(){
       if(counter>0){
        counter-=1;
        callData(counter)
       }
       else if(counter==0){
        counter=title_discription.length-1
        callData(counter)
       }
    })

    right_btn.addEventListener("click",function(){
        if(counter < title_discription.length-1){
            counter+=1; 
           callData(counter)
        }
        else if(counter>=title_discription.length-1){
            counter=0;
           callData(counter)
        }
      })
})

