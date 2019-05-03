function Translate(word,language){
    this.apikey = "trnsl.1.1.20190316T233336Z.72e53428984901d5.183153cfd68b7bc647efceec55f70eca98b75991";
    this.word = word;
    this.language = language;

    //xhr objesi
    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
  //ajax işlemleri
  const endpoint =  `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET",endpoint);
   this.xhr.onload = () => {
      
    if(this.xhr.status === 200){
        const json = JSON.parse(this.xhr.responseText);
        const text = json.text[0];
        callback(null,text);
    }
    else{
        console.log("hata : " + this.status + "  "+this.xhr.responseText);
        callback("bir hata oluştu",null);
    }
   };
  this.xhr.send();

};
 
Translate.prototype.changeParameters = function(newwWord,newLanguage){
    this.word = newwWord
    this.language = newLanguage;
}
