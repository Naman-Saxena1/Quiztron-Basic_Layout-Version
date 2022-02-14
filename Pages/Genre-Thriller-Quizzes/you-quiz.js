const quizSubmitBtn = document.querySelector(".quiz-submit-btn")
const allQuestionsOptionsList = document.querySelectorAll(".ul-options")
const scoreContainer = document.querySelector(".score-container")
const scoreValue     = document.querySelector(".score-value")

let youAnswerArray = [1,0,1,0,2,0,1,2,1,0]
let score       = 0;
let indexOfAnswer = 0;
let emoji;

quizSubmitBtn.addEventListener('click',()=>{

    allQuestionsOptionsList.forEach(singleQuestionUL=>{

        answer = youAnswerArray[indexOfAnswer];
        let optionNumber = 0;
        
        [...singleQuestionUL.children].forEach(listItem=>{


            let inputOption = listItem.firstElementChild;
            if(optionNumber === answer)
            {
                inputOption.nextElementSibling.style.color = "white";
                inputOption.nextElementSibling.style.backgroundColor = "var(--onlinestatus-or-success)";
                if(inputOption.checked)
                {
                    score += 1;
                }
            }
            if(inputOption.checked && optionNumber !== answer)
            {
                inputOption.nextElementSibling.style.color = "white";
                inputOption.nextElementSibling.style.backgroundColor = "var(--notification-or-error)";
            }
            optionNumber += 1;
        })

        indexOfAnswer += 1; 
    })

    quizSubmitBtn.style.display = "none"
    scoreContainer.style.display = "inline"
    scoreValue.style.display = "inline"

    if(score<4)
    {
        emoji = "😔";
    }
    else
    {
        emoji = "🥳";
    }

    scoreValue.innerHTML = ` ${score}/10 ${emoji}`
})
