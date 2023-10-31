import {Router} from './router/router'
import {PATHS} from './router/routes'
import {difficulty} from "./components/home"
import {newQuest} from "./components/quest"


const ROUTER = new Router(PATHS)

ROUTER.load('home')


const app = document.getElementById("app")
async function generateQuest(mode,counter){
    PATHS.game.template = await newQuest(mode,counter)
    ROUTER.load('game')   
}
let mode

let counter = 0

app.addEventListener("click", async(e)=>{
    console.log(counter)
    if(e.target.classList.contains("btn")){
        console.log("hola")
        await difficulty()
    }
    if(e.target.classList.contains("btn-difficulty")){
        mode = e.target.value
        await generateQuest(mode,counter) 
        
    }
    if(e.target.classList.contains("answer")){
        console.log(e.target.value)
        e.target.value === "true" ? counter ++ : counter = 0
        await generateQuest(mode,counter) 
    }
})