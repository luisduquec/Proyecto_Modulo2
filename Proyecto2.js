class Question{
    constructor(question, userAnswer){
        this.question = question
        this.userAnswer = userAnswer
    }

    score(){
        return this.userAnswer
    }
}

class Form{
    constructor(questions){
        this.questions = questions
    }

    showResults(){
        let sumScore = 0
        this.questions.forEach((question) => {
            const questionText = question.question.substring(70); 
            const scoreQuestion = question.score()
            sumScore += scoreQuestion
            console.log(`La pregunta fue: ${questionText} y la calificación fue: ${scoreQuestion}`);
            const score = question.score;
            if(question.score() < 3){
                console.log("Es una calificación muy baja. Prometemos mejorar!\n");
            }
            else{
                console.log("Es una buena calificación!. Que alegría!\n");
            }

        });
        const averageScore = sumScore/questions.length
        if (averageScore < 3){
            console.log(`El promedio fue: ${averageScore} prometemos mejorar!`)
        }
        else{
            console.log(`El promedio fue: ${averageScore} lo estamos haciendo bien!`)

        }
        
    }
    
}

const questions = [
  new Question("En una escala del 1 al 5, siendo 1 la peor calificación y 5 la mejor.\nRecomendarías nuestro local de Hamburguesas?",3),
  new Question("En una escala del 1 al 5, siendo 1 la peor calificación y 5 la mejor.\nLe gustó la atención que recibió?", 4),
  new Question("En una escala del 1 al 5, siendo 1 la peor calificación y 5 la mejor.\nVolvería a visitarnos?",5),
  new Question("En una escala del 1 al 5, siendo 1 la peor calificación y 5 la mejor.\nEl precio de nuestros productos le pareció adecuado?",4),
  new Question("En una escala del 1 al 5, siendo 1 la peor calificación y 5 la mejor.\nProbaría otro de nuestros productos?", 2)
  
];

const form = new Form(questions);
form.showResults();
