//prototype , ajax , callback
const word = document.getElementById("word").value;
const language = document.getElementById("language").value;


eventListeners();
function eventListeners(){
    
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").addEventListener("change",translateWord);
    document.getElementById("word").addEventListener("input",translateWord);
    

    //change
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri
        ui.changeUI();
    }
}

const translate = new Translate(word,language);
const ui = new UI();
function translateWord(e){
    
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
     if(err === null){
       ui.displayTranslate(response);
     }
     else{
         console.log(err);
     }
    });

    e.preventDefault();
}