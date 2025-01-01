
const questions=[
    {
        question:"What DSA stands for ?",
        options:[
            {op:"A. Document Structure Algorithm",status:false},
            {op:"B. Data Structure Algorithm",status:true},
            {op:"C. Data Software Algorithm",status:false},
            {op:"D. Data Structure Architecture",status:false},

        ]
    },
    {
        question:"What is OOPS in Programming?",
        options:[
            {op:"A. Object Oriented Programming",status:true},
            {op:"B. Data Structure Algorithm",status:false},
            {op:"C. Data Software Algorithm",status:false},
            {op:"D. Data Structure Architecture",status:false},

        ]
    },
    {
        question:"How many types of DataTypes are there in JS?",
        options:[
            {op:"A. 1",status:false},
            {op:"B. 7",status:true},
            {op:"C. 10",status:false},
            {op:"D. 15",status:false},

        ]
    }

];

let currentquesindex=0;
let score=0;
let answered = false;

const quizcard=document.querySelector(".quiz-card")
const questionele=document.getElementById("question");
const optionsele=document.getElementById("options");
const nextbtn=document.getElementById("nav-btn next");


function Quiz(){
    let currentques = questions[currentquesindex];
    questionele.innerHTML=currentques.question;

    currentques.options.forEach(ops=>{
        const btn=document.createElement("button");
        btn.innerHTML=ops.op;
        btn.classList.add("btn");
        optionsele.appendChild(btn);

        if(ops.status){
            btn.dataset.status = ops.status;
        }
        btn.addEventListener("click",ansSelected);
    })
}

function nextQuestion(){
    if(currentquesindex<questions.length-1){
        currentquesindex=currentquesindex+1;
        while(optionsele.firstChild){
            optionsele.removeChild(optionsele.firstChild);
        }
        answered=false;
        Quiz();
    }
    else{
        const resultdiv=document.createElement("div");
        resultdiv.classList.add("score-div");

        resultdiv.innerHTML="You have Scored "+score +" out of "+questions.length;
        optionsele.innerHTML = '';
        quizcard.innerHTML = '';
        quizcard.appendChild(resultdiv);
    }
}



function ansSelected(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.status==="true";

    if(iscorrect){
        score++;
        selectbtn.classList.add("correct");
    }
    else{
        selectbtn.classList.add("incorrect");
    }

    answered=true;
    const buttons=optionsele.querySelectorAll("button");
    buttons.forEach((btn)=>{
        btn.disabled=true;
        btn.style.pointerEvents = "none";
    });
}
Quiz()