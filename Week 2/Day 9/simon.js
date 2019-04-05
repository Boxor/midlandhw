var choice = document.querySelectorAll('.choice');

choice.forEach(function(val){
    val.addEventListener("click", function(){
        console.log(choice);
    });
});

function rng(){
    return Math.floor(Math.random()*4);
}

var computerChoice = choice[rng];

choice.onclick = function(){
    computerChoice.classList.add("lightUp");
};