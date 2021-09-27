var readlineSync = require('readline-sync');
var userName = readlineSync.question("Enter your Name: ")
console.log("Hello, "+userName+"! Welcome to the 3 Idiots Quiz Game:\n")
console.log("\nInstructions: \n1. There will be 15 questions.\n2. One point will be awarded for each right answer and one point will be deducted for every wrong answer.\n3.Kindly Enter the Option(1-3) which you think is correct answer.\nLETS START!!!.\n-------------------------\n\n");
var score = 0;

function play(question,answer)
{ var userAns = readlineSync.question(question);
    if(userAns === answer)
    {
      console.log("Congratulations! You are right!")
      score +=1;
    }
    else
    {
      console.log("Sorry! You are wrong!")
      score -=1;
    }
  console.log("Current Score: "+score)
  console.log("---------------------------------\n")
}
var questionOne = {
  question: "What is Farhan's Passion in 3 Idiots?\n1. PhotoGraphy \n2. Surfing\n3. Dancing\n",
  answer: "1"
}

var questionTwo = {
  question: "What was Virus's Original Name?\n1. Vivek\n2. Jonny Sins\n3. Viru Sahastrabuddhe\n",
  answer: "3"
}

var questionThree = {
  question: "Who was Silencer?\n1. Raju\n2. Virus\n3. Chatur\n",
  answer: "3"
}

var questionFour = {
  question: "What disease Farhan faked to land the airplane?\n1. Heart Attack\n2. Polio Attack\n3. Epilepsy\n",
  answer: "1"
}
var questionFive = {
  question:  "What did Dr. Viru Sahastrabuddhe gave to Rancho as a symbol of Excellence?\n1. His Kidney\n2. Iphone 13 pro max\n3. AStronaut's Pen\n",
  answer:"3"
}

var questionSix = {
  question:  "What advice did Rancho gave to his friends?\n1. Go on dates\n2. Follow Excellence\n3. Compete with others\n",
  answer: "2"
}

var questionSeven = {
  question:  "How did Rancho avoided Ragging?\n1. By using Violence\n2. By Dancing\n3.By using 8th Standard Physics\n",
  answer: "3"
}

var questionEight = {
  question:  "According to Rancho, 'Anything that simplifies work, or saves time is a _____?'\n1. Potato to Gold Maker\n2. Tubelight\n3. Machine\n",
  answer: "3"
}

var questionNine = {
  question:  "In which college was the movie shot?\n1. IIT Kanpur\n2. IIM Bangalore\n3. MNNIT Allahabad\n",
  answer: "2"
}

var questionTen = {
  question:  "What was the duration of Virus powerNap?\n1. 1 min\n2. 20 min\n3. 7.5 minutes\n",
  answer: "3"
}


var questionEleven = {
  question:  "Why was everyone enjoying Chatur's teachers day speech?\n1. Because he was Dancing\n2. Because he was loved by everyone\n3. Because his speech was altered\n",
  answer: "3"
}


var questionTwelve = {
  question:  "What was Rancho Full Name?\n1. Ramlal\n2. Rajshekher\n3.Shamaldas Chanchad\n",
  answer: "3"
}

var questionThirteen = {
  question:  "What is Prerajulization and Farhanitrate?\n1. JavaScript Libraries\n2. Terms used in Mechanics\n3. Nothing, these terms were made up by Rancho using his friends name.\n",
  answer: "3"
}

var questionFourteen = {
  question:  "What was the price of Suhas's Shoes?\n1. 300 Dollars\n2. 400 Dollars\n3. 600 Dollars\n",
  answer: "1"
}

var questionFifteen = {
  question:  "What did millimeter got converted into in the last part of the movie?\n1. Kilometer\n2. Decimeter\n3. Centimeter\n",
  answer: "3"
}



// array of questions 

var questionList = [ questionOne,questionTwo,questionThree,questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen, questionFourteen, questionFifteen]

//for loop to call 

for(i=0;i<questionList.length;i++)
{ console.log("Question No. "+(i+1))
  play(questionList[i].question,questionList[i].answer)

}

//  highScores Data
var personOne = {
  name: 'Himanshu',
  score: '15'
}
var personTwo = {
  name: 'Ritwik',
  score: '14'
}
// array of high highScores
highScores = [personOne,personTwo]

console.log("Congratulations! On completing the Quiz\nYour Final Score: "+score+"\n")

console.log("Here are some High Scorers: ")
for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name +" : "+ highScores[i].score)
  
}

if((score>personOne.score) || (score>personTwo.score))
{
  console.log("\nYou broke the High Scorers record!\nSend me your High Score along with Screenshot, I will update it!")
}

