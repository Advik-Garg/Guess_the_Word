var player_1_name=localStorage.getItem("key1")
var player_2_name=localStorage.getItem("key2")
document.getElementById("player1_name").innerHTML=player_1_name+": "
document.getElementById("player2_name").innerHTML=player_2_name+": "
var player_1_score=0
var player_2_score=0
document.getElementById("player1_score").innerHTML=player_1_score
document.getElementById("player2_score").innerHTML=player_1_score
var question_player=player_1_name
var answer_player=player_2_name
document.getElementById("question_turn").innerHTML=question_player
document.getElementById("answer_turn").innerHTML=answer_player
function Send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase()
    console.log(word)
    firstLetter=word.charAt(1)
    middleLetter= word.charAt(Math.floor((word.length/2)))
    lastLetter=word.charAt(word.length-1)
    remove_firstLetter=word.replace(firstLetter,"_")
    remove_middleLetter=remove_firstLetter.replace(middleLetter,"_")
    remove_lastLetter=remove_middleLetter.replace(lastLetter,"_")
    console.log(remove_firstLetter)
    console.log(remove_middleLetter)
    console.log(remove_lastLetter)
    var show_question= "<center><h2>Q. "+remove_lastLetter+"</h2> <br>"
    var show_input= "<h3>Answer: <span><input id='answer' placeholder='Enter word here'></span> </h3>"
    var check="<br><button type='button' onclick='check()' class='btn btn-info' id='answer'>Check</button>"
    document.getElementById("output").innerHTML=show_question+show_input+check
    document.getElementById("word").value=""
}
function check(){
    var get_answer= document.getElementById("answer").value
    answer=get_answer.toLowerCase()
    console.log(answer)
    if (word==answer){
        if (answer_player==player_1_name){
            player_1_score=player_1_score+1
            document.getElementById("player1_score").innerHTML=player_1_score
            answer_player=player_2_name
            question_player=player_1_name
            document.getElementById("question_turn").innerHTML=question_player
            document.getElementById("answer_turn").innerHTML=answer_player
        }
        else{
            player_2_score=player_2_score+1
            document.getElementById("player2_score").innerHTML=player_2_score
            answer_player=player_1_name
            question_player=player_2_name
            document.getElementById("question_turn").innerHTML=question_player
            document.getElementById("answer_turn").innerHTML=answer_player
        }
        document.getElementById("output").innerHTML=""
    }
    else{
        if (answer_player==player_1_name){
            answer_player=player_2_name
            question_player=player_1_name
            document.getElementById("question_turn").innerHTML=question_player
            document.getElementById("answer_turn").innerHTML=answer_player
        }
        else{
            answer_player=player_1_name
            question_player=player_2_name
            document.getElementById("question_turn").innerHTML=question_player
            document.getElementById("answer_turn").innerHTML=answer_player
        }
        document.getElementById("output").innerHTML=""
    }
    if(player_1_score==10){
    document.getElementById("output").innerHTML="<h1>"+player_1_name+" has won the game!!</h1>"
    }
    if(player_2_score==10){
        document.getElementById("output").innerHTML="<h1>"+player_2_name+" has won the game!!</h1>"
        }
}