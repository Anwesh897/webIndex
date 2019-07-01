var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;   
function rotateCarousel(){   
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-864px) rotateY('+angle+'deg)';
}
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click',function(){
    selectedIndex--;
    rotateCarousel(); 
    function bgs(){
        var bgar = ['linear-gradient(to right,black,indigo,white,indigo,black)',
        'linear-gradient(to right,black,indigo,white,indigo,black)',
        'linear-gradient(to right,white,indigo,white,indigo,black)',
        'linear-gradient(to right,indigo,white,white,indigo,black)',
        'linear-gradient(to right,black,indigo,white,white,indigo)',
        'linear-gradient(to right,black,indigo,white,indigo,white)']
            var bgs = document.getElementById('id01');
            bgs.style.background = bgar[5];
            setTimeout(function(){
                bgs.style.background = bgar[4];
            },50); 
            setTimeout(function(){
                bgs.style.background = bgar[3];
            },100);
            setTimeout(function(){
                bgs.style.background = bgar[2];
            },150);
            setTimeout(function(){
                bgs.style.background = bgar[1];
            },200);
        }bgs();  
});
var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click',function(){
    selectedIndex++;
    rotateCarousel();
    function bgs(){
        var bgar = ['linear-gradient(to right,black,indigo,white,indigo,black)',
        'linear-gradient(to right,white,indigo,white,indigo,black)',
        'linear-gradient(to right,indigo,white,white,indigo,black)',
        'linear-gradient(to right,black,indigo,white,white,indigo)',
        'linear-gradient(to right,black,indigo,white,indigo,white)',
        'linear-gradient(to right,black,indigo,white,indigo,black)']
            var bgs = document.getElementById('id01');
            bgs.style.background = bgar[1];
            setTimeout(function(){
                bgs.style.background = bgar[2];
            },50); 
            setTimeout(function(){
                bgs.style.background = bgar[3];
            },100);
            setTimeout(function(){
                bgs.style.background = bgar[4];
            },150);
            setTimeout(function(){
                bgs.style.background = bgar[5];
            },200);
        }bgs();
});


