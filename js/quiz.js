
export class Quiz {
    constructor(quistion) {
        this.quistion = quistion;
        this.currentQuistion = 0;
        this.totalNumberOfQuis = quistion.length;
        this.correctAns;
        this.score=0;
        this.showQuisthion()
        document.getElementById("next").addEventListener("click",()=>{
            this.NextQuistion()
        })
        document.getElementById("btnTry").addEventListener('click',()=>{
            location.reload()
        })
    }
   
    showQuisthion() {
        document.getElementById('currentQuition').innerHTML = this.currentQuistion + 1;
        document.getElementById('totalNmberOfQuistion').innerHTML = this.totalNumberOfQuis;
        document.getElementById('quistion').innerHTML = this.quistion[this.currentQuistion].question;
        this.correctAns = this.quistion[this.currentQuistion].correct_answer;
        let answer = [...this.quistion[this.currentQuistion].incorrect_answers];
        const randomNum = Math.ceil(Math.random() * answer.length);
        answer.splice(randomNum, 0, this.correctAns)
        console.log(this.correctAns);
        let cartona = ''
        for (let i = 0; i < answer.length; i++) {
            cartona += `
            <label for="" class="form-check-label">
    <input type="radio" class="form-check-input" name="answer" value="${answer[i]}">
    ${answer[i]}
</label><br>
            
            `
        }
        document.getElementById('rowanswer').innerHTML=cartona;
    }
    NextQuistion(){
        let userAnswer=Array.from(document.getElementsByName("answer")).find((ele)=>ele.checked)?.value;
        console.log(userAnswer);
        if(userAnswer!=undefined){
            $("#alert").fadeOut(0) 
            this.checkanswer(userAnswer,this.correctAns)
            this.currentQuistion++;
            if(this.currentQuistion<this.totalNumberOfQuis){
                  this.showQuisthion()
            }else{
                $("#quiz").fadeOut(0)
                $("#finish").fadeIn(500)
                document.getElementById("score").innerHTML=this.score;


            }
          

        }
        else{
            $("#alert").fadeIn(0)
        }
    }
    checkanswer(userAnswer,correctAns){
        if(userAnswer==correctAns){
            $("#correct").fadeIn(500).fadeOut(300)
            this.score++;
        }
        else{
            $("#incorrect").fadeIn(500).fadeOut(300)
        }
    }
}

