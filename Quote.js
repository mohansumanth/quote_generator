var quotes = [
    '"As he read, I fell in love the way you fall asleep: slowly, and then all at once."',
    '"I saw that you were perfect, and so I loved you.Then I saw that you were not perfect and I loved you even more."',
    '"Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive."',
    '"I need you like a heart needs a beat."',
    '"The purpose of our lives is to be happy."',
    '"If you want to live a happy life, tie it to a goal, not to people or things."',
    '"Money and success don’t change people; they merely amplify what is already there."',
    '"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."',
    '"Life is not a problem to be solved, but a reality to be experienced."',
    '"The mind is everything. What you think you become."',
    '"The two most important days in your life are the day you are born and the day you find out why."',
]

function quote_generate() {
    var random_number = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[random_number];
    //    alert("summo");

}