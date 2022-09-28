/* 
Page downloader & switcher to make code cleaner.
By (c) Ad5001 2016
*/

articles = document.getElementsByTagName("article");
console.log(articles);
/*l = location.pathname.split("/");
l[l.length - 1] = undefined;
dir = l.join("/");*/
for (i = 0; i < articles.length; i++) {
    let art = articles[i].id;
    console.log("pages/" + art + ".html");
    $.get("pages/" + art + ".html", function(responseText) {
        setPage(responseText, art);
    });
}


function setPage(text, page) {
    console.log(text, page);
    document.getElementById(page).innerHTML = text + '<div class="close" onclick="location.hash=\'\';">Close</div>';
    if (page == "quiz") {
        /*
Quiz maker
By (c) Ad5001 2016
*/

        QandA = [{
                question: "The first consumer refrigerator was sold in 1923 in which country?",
                a: "The United States",
                b: "Sweden",
                c: "Great Britain",
                valid: "2"
            },
            {
                question: "In what year did Soviet leader Vladimir Lenin die?",
                a: "1929",
                b: "1927",
                c: "1924",
                valid: "3"
            },
            {
                question: "In what years did prohibition begin and end?",
                a: "1920/1933",
                b: "1919/1932",
                c: "1917/1929",
                valid: "1"
            },
            {
                question: "BBC was formed in 1922, standing for what?",
                a: "BaseBall Card",
                b: "Binary Block Code",
                c: "British Broadcasting Corporation",
                valid: "3"
            },
            {
                question: "What did the term The Big Apple originaly refer to?",
                a: "The Apple Tree that used to be in the center of Manhattan",
                b: "A local newspaper Horce Racing column",
                c: "A corporate businessman's milk business nickname",
                valid: "2"
            },
            {
                question: "What strange tradition ended in the 1920s?",
                a: "Annual summoning rituals in Times Square",
                b: "Lighting the Christmas Tree on fire after the holidays",
                c: "Everybody moving apartments on the same day",
                valid: "3"
            },
                 {
                     question: "Ellis Island was quarantined in the 20s after an outbreak of what disease?",
                     a: "The original coronavirus",
                     b: "The Black plague",
                     c: "Typhus",
                     valid: 3
                 }
        ]

        quizStep = -1;
        score = 0;
        question = document.getElementById("question");
        answers = [document.getElementById("answer1"), document.getElementById("answer2"), document.getElementById("answer3")];
        nextQuestion();


    }
}

function quizValidate(num) {
    if (typeof QandA[quizStep + 1] == "undefined") {
        alert("Your score is : " + (score / quizStep * 100) + "%");
        quizStep = -1;
        nextQuestion();
        score = 0;
        location.hash = "#";
        return;
    }
    if (num == QandA[quizStep].valid) {
        score++;
        answers[num - 1].style.backgroundColor = "lime";
    } else {
        answers[num - 1].style.backgroundColor = "red";
    }
    setTimeout(function() {
        nextQuestion();
        answers[num - 1].style.backgroundColor = "lightgray";
    }, 2000);
}

function nextQuestion() {
    quizStep++;
    question.innerHTML = QandA[quizStep].question;
    answers[0].innerHTML = QandA[quizStep].a;
    answers[1].innerHTML = QandA[quizStep].b;
    answers[2].innerHTML = QandA[quizStep].c;
}
