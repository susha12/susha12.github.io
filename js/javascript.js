let search = document.querySelector(".box_menu_three");
let boxList = document.querySelector(".box_three_list");
let a = 1;
search.onclick = ()=>{
    if (a == 1){
        boxList.style.display= "block";
        a++;
    }
    else{
        boxList.style.display= "none";
        a--
    }
    
}
let locationSity = document.querySelector(".box_location_name_sity");
let sityList = document.querySelector(".box_sity_list");
let b = 1;
locationSity.onclick = ()=>{
    if (b == 1){
        sityList.style.display= "flex";
        b++;
    }
    else{
        sityList.style.display= "none";
        b--
    }
    
}
