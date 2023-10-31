
export const start =`
  <div class = "start">
    <h1>How much do you know?</h1>
    <button class="btn">Start</button>
  </div>
`
 export async function difficulty (){
  document.getElementById("app").innerHTML= `
  <div class = "difficulty">
    <h1>Choose a difficulty</h1>
    <button class="btn-difficulty" value="easy">Easy</button>
    <button class="btn-difficulty" value="medium">medium</button>
    <button class="btn-difficulty" value="hard">Hard</button>
  </div>
`

}
