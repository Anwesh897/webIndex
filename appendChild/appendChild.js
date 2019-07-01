function para(){
    var obj = ['Batman Begins','The Dark Knight','The Dark Knight Rises','Interstellar','Inception','Blade Runner 2049'];
    for(i=0;i<obj.length;i++){
    var para = document.createElement('p');
    para.textContent = obj[i];    
    var element = document.getElementById('id01');
    element.appendChild(para);
    }
}
function display(){
    var x= document.getElementById('id01');
    if(x.style.display == 'none'){
        x.style.display = 'content';
    }
    else{
        x.style.display = 'none';
    }
}
/*function para_1(){
    var obj_1 = ['Batman Begins/1','The Dark Knight/2','The Dark Knight Rises/3','Interstellar/4','Inception/5','Blade Runner 2049/6'];*/
    /*for(i=0;i<obj_1.length;i++){*/
    /*var para = document.createTextNode(obj_1[0]);  
    var element = document.getElementById('id01').childNodes[0];
    element.replaceChild(para,element.childNodes[0]);
}*/

/*function remove(){
    var remove = document.getElementById('id01');
        remove.removeChild(remove.childNodes[0]);
}*/

    








