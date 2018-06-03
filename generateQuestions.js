function generateQuestion(year, questionNo) {

    let questions = [`What is the price of bitcoin in ${year}?`,
        `Who will the the president of USA in ${year}?`,
        `Why did you travel back in time from ${year}?`];
    
    return questions[questionNo]

}


