
//Dört şık içinden doğru olanı random olarak yerleştirmeye yarayan fonksiyon

const shuffleArray = (array) => {
    return[...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizData = async(difficulty, amount) => {
 const url = `https://opentdb.com/api.php?amount=${amount}&difficulty?${difficulty}$type=multiple`
 const data = await((await fetch(url)).json());

 //shuffle algorithm

 return data.results.map((dt) => ({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])

 }))
}