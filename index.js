 var readlineSync = require('readline-sync');
 var score = 0;
 var questionOne = readlineSync.question('Am I older than 20? ');
 var answerOne = 'yes'

 if (questionOne==answerOne) {
   score = score + 1;
  console.log('You are right. You Scored ' + score);
 } else {
   score = score - 1;
   console.log('You are wrong, You scored '+ score);
 }

 var questionTwo = readlineSync.question('Where Do I live? ');
 var answerTwo = 'Bahraich'

 if (questionTwo.toUpperCase()==answerTwo.toUpperCase()) {
   score = score + 1;
   console.log('You are again right, You scored ' + score)
 } else {
   score = score- 1;
   console.log ('You are wrongm You scored' + score)
 }

var questionThree = readlineSync.question('My fav Place? ');
 var answerThree = 'Kedarnath'

 if (questionThree.toUpperCase()==answerThree.toUpperCase()) {
   score = score + 1;
   console.log('You are again right, You scored ' + score)
 } else {
   score = score- 1;
   console.log ('You are wrongm You scored' + score)
 }



//var readlineSync = require('readline-sync');
//var score = 0;

//var questions = [{
  //question: 'Am I older than 20? ',
 // answer: 'yes'
//}, {
//  question: 'Where do I live? ',
//  answer: 'Bahraich'
//}, {
//  question: 'Where do I work? ',
//  answer: 'eAacharya'
//}, {
//  question: 'Fav Place to Visit? ',
//  answer: 'Kedarnath'
//}, {
//  question: 'What I like? ',
//  answer: 'mutton'
//}]

//function play(question, answer) {
//  var userAnswer = readlineSync.question(question);
//  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
 //   score = score + 1;
 //   console.log('You are right, You scored ' + score)
 // } else {
 //   score = score - 1;
 //   console.log('You are wrong, Your score is ' + score)
 // }
//}

//function game() {
 // for (let i = 0; i < questions.length; i++) {
 //   let currentQuestion = questions[i];
//    play(currentQuestion.question, currentQuestion.answer)
//  }
//}
//game()