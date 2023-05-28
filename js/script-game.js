function check() {
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q41 = document.getElementById("q41").checked;
    var q42 = document.getElementById("q42").checked;
    var q43 = document.getElementById("q43").checked;
    var q44 = document.getElementById("q44").checked;
    var q45 = document.getElementById("q45").checked;
    var q51 = document.getElementById("q51").checked;
    var q52 = document.getElementById("q52").checked;
    var q53 = document.getElementById("q53").checked;
    var q54 = document.getElementById("q54").checked;

    var mark = 0;
    var feedback = "Feedback: <br>";

    // expand the information you give in the feedback: The correct answer is: ......

    var q1Correct = "February";
    var q2CorrectA = "the torico";
    var q2CorrectB = "The Torico";
    var q3Correct = "2";
    var q4Correct = "Diego Marcilla and Isabel de Segura";
    var q5Correct = "Jota";


    // Question 1: 
    if (q1 === q1Correct) {
        mark += 2;
        feedback += "Question 1: Correct<br>";
    } else if (q1 === "") {
        feedback += "Question 1: Not answered<br>";
    } else {
        mark -= 1;
        feedback += "Question 1: Incorrect. The correct answer is: " + q1Correct + "<br>";
    }

    // Question 2: 
    if (q2 === q2CorrectA || q2 === q2CorrectB) {
        mark += 2;
        feedback += "Question 2: Correct<br>";
    } else if (q2 === "") {
        feedback += "Question 2: Not answered<br>";
    } else {
        mark -= 1;
        feedback += "Question 2: Incorrect. The correct answer is: " + q2CorrectA + " or " + q2CorrectB + "<br>";
    }

    // Question 3: 
    if (q3 === q3Correct) {
        mark += 2;
        feedback += "Question 3: Correct<br>";
    } else if (q3 === "empty") {
        feedback += "Question 3: Not answered<br>";
    } else {
        mark -= 1;
        feedback += "Question 3: Incorrect. The correct answer is: " + q3Correct + " <br>";
    }

    // Question 4: 
    if (q41 & q42) {
        mark += 2;
        feedback += "Question 4: Correct<br>";
    } else if (!q41 && !q42 && !q43 && !q44 && !q45) {
        feedback += "Question 4: Not answered<br>";
    } else {
        mark -= 1;
        feedback += "Question 4: Incorrect. The correct answer is: " + q4Correct + " <br>";
    }

    // Question 5: 
    if (q51) {
        mark += 2;
        feedback += "Question 5: Correct<br>";
    } else if (!q51 && !q52 && !q53 && !q54) {
        feedback += "Question 4: Not answered<br>";
    } else {
        mark -= 1;
        feedback += "Question 5: Incorrect. The correct answer is: " + q5Correct + " <br>";
    }

    document.getElementById("mark").innerHTML = "Final mark: " + mark;
    document.getElementById("feedback").innerHTML = feedback;
}
