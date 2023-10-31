//https://opentdb.com/api.php?amount=1&difficulty=medium

const url = `https://opentdb.com/api.php?amount=1&difficulty=medium`
let q = null
async function giveQuest (){
    const question = async()=>{
        await fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('No se ha podido acceder al URL');
    
            
            return response.json();
        })
        .then((data) => {
            
            q = data.results[0]
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    await question()
    console.log(q)

}
giveQuest()

const quest = `
<div>
  <button class="btn" value="easy">Easy<button>
  <button class="btn" value="medium">medium<button>
  <button class="btn" value="hard">Hard<button>
  <button class="btn" value="hard">Hard<button>
</div>
`