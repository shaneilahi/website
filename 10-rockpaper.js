const previewWinner = document.querySelector('.js-preview-1');
const previewResult = document.querySelector('.js-preview-2')
const previewScore = document.getElementById('js-preview-3');
const picks = ['rock','paper','scissors'];
let score = JSON.parse(localStorage.getItem('score3'));

let saveScore = () => {
  localStorage.setItem('score3', JSON.stringify(score));
}

const UpdatePreviewScore = () => previewScore.innerHTML = score.fullScore();

let fs = () => { return `Wins: ${score.wins}, Losses: ${score.losess}, Ties: ${score.ties}`; };
let rs = () => {
  score.wins = 0;
  score.losess = 0;
  score.ties = 0;
  saveScore();
  UpdatePreviewScore();
  console.log('reseted');
};

if (score) {
  score.fullScore = fs;
  score.resetScore = rs;
} else {
  score = {
  wins: 0,
  losess: 0,
  ties: 0,
  fullScore: fs,
  resetScore: rs
};
}

// previiew Reesult on web
UpdatePreviewScore();



let pickComputerMove = () => {
  const randomNum = Math.floor(Math.random() * picks.length);
  const compPick = picks[randomNum];
  return compPick;
}

let pickWinner = (userPick, compPick) => {
    console.log(`user: ${userPick}, program: ${compPick}`);
    if (userPick == 'rock' && compPick == 'scissors') {
      ++score.wins;
      return 'You Win.';
    }
    else if (userPick == 'paper' && compPick == 'rock') {
      ++score.wins;
      return 'You Win.';
    }
    else if (userPick == 'scissors' && compPick == 'paper') {
      ++score.wins;
      return 'You Win.';
    }
    else if (compPick == 'rock' && userPick == 'scissors') {
      ++score.losess;
      return 'You lose.';
    }
    else if (compPick == 'paper' && userPick == 'rock') {
      ++score.losess;
      return 'You lose.';
    }
    else if (compPick == 'scissors' && userPick == 'paper') {
      ++score.losess;
      return 'You lose.';
    }
    else if (userPick == compPick) { ++score.ties; return 'Tie.';}
  }

  let pick = userPick => {
    let compPick = pickComputerMove();
    let winner = pickWinner(userPick, compPick);
    saveScore();
    // alert(`You picked ${userPick}. Computer picked ${compPick}. ${winner}\n${score.fullScore()}`);
    previewWinner.innerHTML = winner;
    previewResult.innerHTML = `
    You 
    <img src="images/${userPick}-emoji.png" class="move-icon"> 
    <img src="images/${compPick}-emoji.png" class="move-icon"> 
    Computer`;

    UpdatePreviewScore();
  }