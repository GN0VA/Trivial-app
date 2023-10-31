import {Router} from './router/router'
import {PATHS} from './router/routes'
import {difficulty} from "./components/home"
import {newQuest} from "./components/quest"


const ROUTER = new Router(PATHS)

ROUTER.load('home')

let width = 100
const app = document.getElementById("app")
async function generateQuest(mode,counter){
    width = 100;
    PATHS.game.template = await newQuest(mode,counter)
    ROUTER.load('game')   
}

let animationRunning = false;

async function decreaseProgressBar() {
  if (animationRunning) {
    width -= 0.1;
    const bar = document.querySelector(".progress-bar");
    bar.style.width = width + "%";
    if (width > 0) {
      requestAnimationFrame(decreaseProgressBar); // Continúa la animación
    }else{animationRunning = false
        counter = 0
        await generateQuest(mode,counter) 
        
        animationRunning = true
        setTimeout(() => {
            requestAnimationFrame(decreaseProgressBar);
            }, 200);}
    
  }
}
let mode

let counter = 0

app.addEventListener("click", async(e)=>{
    if(e.target.classList.contains("btn-start")){
        await difficulty()
    }
    if(e.target.classList.contains("btn-difficulty")){
        animationRunning = true
        mode = e.target.value
        await generateQuest(mode,counter) 
        setTimeout(() => {
            requestAnimationFrame(decreaseProgressBar);
          }, 200);
        
        
    }
    if(e.target.classList.contains("answer")){
        animationRunning = false
        if(e.target.value != "true"){
            e.target.classList.add("bg-false");
            const answers = document.querySelectorAll(".answer")
            console.log(answers)
            answers.forEach((answer) =>{
                console.log(answer.value)
                if(answer.value === "true"){
                    
                    answer.classList.add("bg-true")
                }
            })
            counter = 0
        }else{
            counter++
            e.target.classList.add("bg-true")
        }
        
        
        setTimeout(async () => {
            await generateQuest(mode, counter);
            animationRunning = true;
            setTimeout(() => {
                requestAnimationFrame(decreaseProgressBar);
              }, 200);
        }, 500);
          
        
        
        
        
    }
})