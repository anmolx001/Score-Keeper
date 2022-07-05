const P1Button = document.querySelector('#P1Button');
const P2Button = document.querySelector('#P2Button');
const resetButton = document.querySelector('#reset');
const P1Show = document.querySelector('#P1Show');
const P2Show = document.querySelector('#P2Show');
const winScoreSelect = document.querySelector('#setof');


let P1Score=0;
let P2Score=0;
let winScore = 5;
let Gover=false;

P1Button.addEventListener('click',function (){
    if(!Gover)
    {

        P1Score += 1;
        if(P1Score === winScore)
        {
            Gover = true;
            P1Show.classList.add('has-text-success');
            P2Show.classList.add('has-text-danger');
            P1Button.disabled = true;
            P2Button.disabled =true;
        }
        P1Show.textContent =P1Score;

    }
    
})

P2Button.addEventListener('click',function (){
    if(!Gover)
    {
        P2Score += 1;
        if(P2Score === winScore)
        {
            Gover = true;
            P1Show.classList.add('has-text-danger');
            P2Show.classList.add('has-text-success');
            P1Button.disabled = true;
            P2Button.disabled =true;
        }
        P2Show.textContent =P2Score;

    }
})

winScoreSelect.addEventListener('change',function(){
      winScore = parseInt(this.value);
      reset();
})
 
resetButton.addEventListener('click',reset)

function reset()
{
    Gover=false;
    P1Score=0;
    P2Score=0;
    P1Show.textContent = 0;
    P2Show.textContent = 0;
    P1Show.classList.remove('has-text-success','has-text-danger');
    P2Show.classList.remove('has-text-success','has-text-danger');
    P1Button.disabled = false;
    P2Button.disabled =false;
}