let question=document.querySelector(".question"),options=document.querySelectorAll(".options"),main=document.querySelector(".main"),quiz=document.querySelector(".quiz"),optionArray=document.querySelectorAll(".options"),optionOne=document.querySelector(".optionOne"),optionTwo=document.querySelector(".optionTwo"),optionThree=document.querySelector(".optionThree"),optionFour=document.querySelector(".optionFour"),congratulations=document.querySelector(".congratulations"),congratulations_score=document.querySelector(".congratulations_score");const css={"What does CSS stand for?":["Cascade Styling Sheet","Cascading Style Sheet","Cascade Sheet Style","Cascading Styling Sheets"],"What is the CSS selector for ID?":["#",".","?","!"],"Which HTML tag is used to define an internal style sheet?":["<css>","<style>","<script>","<link>"],"Where in an HTML document is the correct place to refer to an external style sheet?":["<body>","<head>","<title>","<div>"],"Which is the correct CSS syntax?":["{body:color=black;}","body{color:black;}","{body;color;black;}","body:color=black;"],"Which property is used to change the background color?":["background-color","bgcolor","color","none"],"Which CSS property controls the text size?":["text-style","font-size","font-color","font-style"],"How do you display hyperlinks without an underline?":["a{text-decoration:no-underline;}","a{underline:none;}","a{decoration:no-underline;}","a{text-decoration:none;}"],"Which property is used to change the font of an element?":["font-style","font-family","font-size","font-weight"],"Which property is used to change the left margin of an element?":["padding-left","margin-left","border","width"]};let cssArrays=["What does CSS stand for?","What is the CSS selector for ID?","Which HTML tag is used to define an internal style sheet?","Where in an HTML document is the correct place to refer to an external style sheet?","Which is the correct CSS syntax?","Which property is used to change the background color?","Which CSS property controls the text size?","How do you display hyperlinks without an underline?","Which property is used to change the font of an element?","Which property is used to change the left margin of an element?"],cssCorrectAnswers=["Cascading Style Sheet","#","&lt;style&gt;","&lt;head&gt;","body{color:black;}","background-color","font-size","a{text-decoration:none;}","font-family","margin-left"],cssArray=cssArrays.slice(1,cssArrays.length);function countScore(e){let t=0;console.log(e),console.log(cssCorrectAnswers);for(let o=0;o<e.length;o++)e[o]==cssCorrectAnswers[o]&&(t+=10);displayScore(t)}let congratulations_name=document.querySelector(".congratulations_name");function displayScore(e){congratulations.style.display="block",main.style.margin_top="30vh",congratulations_score.innerHTML=e+"/100",final_answers()}let cssUserAnswers=[];function choose(e){let t=document.querySelector(e);cssUserAnswers.push(t.innerHTML),cssUserAnswers.length<10?cssNext():(main.removeChild(quiz),countScore(cssUserAnswers))}function cssNext(){let e=cssArray.indexOf(question.innerHTML);e++,question.innerHTML=cssArray[e];let t=css[cssArray[e]];for(let e=0;e<4;e++)optionArray[e].textContent=t[e]}let answers=document.querySelector(".answers");function final_answers(){for(let e=0;e<cssArrays.length;e++){let t=document.createElement("div"),o=document.createElement("div");document.createElement("hr");t.setAttribute("class","answers_question"),o.setAttribute("class","answers_answer"),t.innerHTML=cssArrays[e],o.innerHTML=cssCorrectAnswers[e],answers.appendChild(t),answers.appendChild(o)}}