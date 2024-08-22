var indexValue = 0 ; 

var img = document.querySelectorAll('img') ; 
let taille = + img.length ; 
console.log('la taille ' + taille ) ; 
function slideshow(){
    setTimeout(slideshow,2500) ; 
    for( let x =0 ; x < img.length ; x++){
        img[x].style.display = 'none' ;
    }
    indexValue ++ ;
    if(indexValue > img.length){
        indexValue =1 ; 
    }
    img[indexValue -1 ].style.display = "block "; 
}
slideshow(); 