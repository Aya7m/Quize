import { Quiz } from "./quiz.js";

export class Start{
    constructor(){
        document.getElementById("startbtn").addEventListener("click",()=>{
            this.startQuiz()
        })
    }
   async startQuiz(){
        let catagory=document.getElementById('catagory').value;
        let difficult=Array.from(document.getElementsByName('difucult')).find((ele)=>ele.checked).value;
        console.log(difficult);
        // let difficult=document.querySelector("[name='difucult']:checked").value;
        let numberOfQuis=document.getElementById('numberofquistion').value;
        let Api=`https://opentdb.com/api.php?amount=${numberOfQuis}&category=${catagory}&difficulty=${difficult}`;
      let quistion=await this.apiData(Api)
      console.log(quistion.length);
      if(quistion.length >0){
        $("#alert1").fadeOut(0);
        $("#start").fadeOut(0);
        $("#quiz").fadeIn(500);
        let quiz=new Quiz(quistion);

      }
      else{
        $("#alert1").fadeIn(0);
      }
    }

   async apiData(url){
        let response=await fetch(url)
        response=await response.json()
        console.log(response.results);
        return response.results;
    }

}
