const quehub = [
   {
      'question': "Who is the president of Canada?",
      'a': "Stephen Harper",
      'b': "Queen Elizabeth",
      'c': "Justin Trudaeu",
      'd': "Andrew Jackson",
      'ans': "c",
   },
   {
      'question': "In which year did Apple start sellling their first iPhones?",
      'a': "2000",
      'b': "2004",
      'c': "2007",
      'd': "2010",
      'ans': "c",
   },
   {
      'question': "What is the coloured part of our eye?",
      'a': "pupil",
      'b': "iris",
      'c': "lens",
      'd': "retine",
      'ans': "b",
   },
   {
      'question': "Brimstone is another name for which element?",
      'a': "Sulphur",
      'b': "Krypton",
      'c': "Iron",
      'd': "Potassium",
      'ans': "a",
   },
]

let index = 0;
let total = quehub.length;
let correct = 0;
let wrong = 0;
const getque = document.getElementById("getque");
const option = document.querySelectorAll(".options");

const loadQuestion = () => {
   if(index==total){
return endQuiz();
   }
   // reset()
   const data = quehub[index];
   getque.innerText = `${index + 1}) ${data.question}`;
   option[0].nextElementSibling.innerText = data.a;
   option[1].nextElementSibling.innerText = data.b;
   option[2].nextElementSibling.innerText = data.c;
   option[3].nextElementSibling.innerText = data.d;
}

loadQuestion();


function submitQuiz(){
   const ans = getAnswer();
   const data = quehub[index];
   if (ans == data.ans) {
      correct++;
   }
   else {
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}

const getAnswer = () => {
   let final;
   option.forEach(
      (input) => {
         if (input.checked) {
            final= input.value;
         }
      }
   )
   return final;
}

const reset = () => {
   option.forEach(
      (input) => {
         input.checked = false;
      }
   )
}

const endQuiz=()=>{
   document.querySelector(".div1").innerHTML=`<h1 align="center">Thank You for Attending Questions</h1> <br> <h2 align="center">${correct}/${total} are correct</h2>`
}
