//https://opentdb.com/api.php?amount=1&difficulty=medium


export async function newQuest (difficulty,counter){
    console.log(counter)
    const url = `https://opentdb.com/api.php?amount=1&difficulty=`
    let question = null
    await fetch(url + difficulty)
    .then((response) => {
        if (!response.ok) throw new Error('No se ha podido acceder al URL');

        
        return response.json();
    })
    .then((data) => {
        
        question = data.results[0]
        console.log(question)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    let answers = question.incorrect_answers
    const insertRandomly = (array, element)=> {
        const randomPosition = Math.floor(Math.random() * (array.length + 1));
        array.splice(randomPosition, 0, element);
      }
    insertRandomly(answers,question.correct_answer)

    
    const results = `
        <div class='game'>
            <h1>${question.question}</h1>
            <p>${counter}</p>
            <div class='answers'>
                ${answers.map(element => 
                    `<button class = 'answer' value = ${element === question.correct_answer}>${element}</button>`
                ).join('')}
            </div>
        </div>
    `
    
    return results

}


