//Variables btn & output for button click and output of content later//

const btn = document.getElementById('btn');
const output = document.getElementById('output');

let catchphrase = ["Best in the World! (CM Punk)", 
                  "It doesn\'t matter what your name is! (The Rock)", 
                  "Thats the bottom line cause Stone Cold says so! (Steve Austin)",
                  "I'm better than you and you know it! (MJF)",
                  "Acknowledge the tribal chief! (Roman Reigns)",
                  "The best there is the best there was, the best there ever will be! (Bret Hart)",
                  "We got two words for ya!. (DX)",
                  "Rest In Peace. (Undertaker)",
                  "Whooooooooo!!!!!. (Ric Flair)",
                  "Its True, Its True! (Kurt Angle)"];

/*addEventListener function created for when button click is made 
then a new random catchphrase will appear based on the array above*/

btn.addEventListener('click', function(){
    const randomCatchphrase = catchphrase[Math.floor(Math.random() * catchphrase.length)];
    output.innerHTML = randomCatchphrase;
});

