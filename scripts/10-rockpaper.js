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

  let isPause = false;

  // const autoPick = () => {
  //   const randomNum = Math.floor(Math.random() * picks.length);
  //   const userPick = picks[randomNum];
  //   return userPick;
  // }

  const autoplay = () => {
    const autoPlayButton = document.querySelector('.auto-play-button');
    autoPlayButton.innerHTML = 'Stop Auto Play';
     autoPlayButton.onclick = () => {
      isPause = true;
     }
    const myInterval = setInterval(() => {
      if (!isPause) {
        pick(pickComputerMove());
      } else {
        isPause = false;
        autoPlayButton.innerHTML = 'Auto Play';
        autoPlayButton.onclick = () => {
          autoplay();
        };
        clearInterval(myInterval);
      }
    }, 1000);
  };

  let myInterval2;
  let isPause2 = false;
  const autoPlayElement = document.querySelector('.auto-play-button');
  autoPlayElement.addEventListener('click', () => {
    if (!isPause2) {
      myInterval2 = setInterval(() => {
        const autoUserPick = pickComputerMove();
        pick(autoUserPick);
      }, 1000)
      isPause2 = true;
      autoPlayElement.innerHTML = 'Stop Play'
    } else {
      clearInterval(myInterval2);
      isPause2 = false;
      autoPlayElement.innerHTML = 'Auto Play';
    } 
  });


  const autoPlay2 = () => {
    if (!isPause2) {
      myInterval2 = setInterval(() => {
        const autoUserPick = pickComputerMove();
        pick(autoUserPick);
      }, 1000);
      isPause2 = true;
      autoPlayElement.innerHTML = 'Stop Play'
    } else {
      clearInterval(myInterval2);
      isPause2 = false;
      autoPlayElement.innerHTML = 'Auto Play';
    } 
  };

  const difArray = ['a','b','c']
  picks.forEach((element,ind) => {
    console.log(element + ` ${ind}`);
  });

  window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === 'r') pick('rock');
    else if (event.key === 'p') pick('paper');
    else if (event.key === 's') pick('scissors'); 
    else if (event.key === 'a') autoPlayElement.click();
    else if (event.code === 'Space' || event.code === 'Backspace') displayReset();
  });

  const confirmElement = document.querySelector('.reset-confirmation');
  document.querySelectorAll('.reset-yes-no').forEach(element => {
    if (element.innerHTML === 'Yes') {
      element.addEventListener('click', () => {
        confirmReset(true);
      })
    } else if (element.innerHTML === 'No') {
      element.addEventListener('click', () => {
        confirmReset(false);
      })
    }
  })

  const displayReset = () => {
    confirmElement.style = 'display: block;';
  }

  const confirmReset = (status) => {
    if (status) {
      score.resetScore();
      confirmElement.style = 'display: none;';
    } else {
      confirmElement.style = 'display: none';
    }

  };