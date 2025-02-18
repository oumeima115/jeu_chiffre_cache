// Function to get a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to get difficulty settings
  function getDifficultySettings() {
    let difficulty = prompt("Choose a difficulty level: Easy, Intermediate, or Difficult").toLowerCase();
    
    switch (difficulty) {
      case "easy":
        return { attempts: 10, range: 50 };
      case "intermediate":
        return { attempts: 7, range: 100 };
      case "difficult":
        return { attempts: 5, range: 200 };
      default:
        alert("Invalid choice. Defaulting to Easy.");
        return { attempts: 10, range: 50 };
    }
  }
  
  // Function to play the game
  function playGame() {
    const settings = getDifficultySettings();
    const targetNumber = getRandomNumber(1, settings.range);
    let attemptsLeft = settings.attempts;
    let guess;
  
    alert(`You have ${attemptsLeft} attempts to guess the number between 1 and ${settings.range}.`);
  
    while (attemptsLeft > 0) {
      guess = parseInt(prompt(`Enter your guess (${attemptsLeft} attempts left):`), 10);
  
      if (isNaN(guess) || guess < 1 || guess > settings.range) {
        alert(`Please enter a number between 1 and ${settings.range}.`);
        continue;
      }
  
      attemptsLeft--;
  
      if (guess === targetNumber) {
        alert(`Congratulations! You guessed the number ${targetNumber} correctly!`);
        break;
      } else if (guess < targetNumber) {
        alert("Too low! Try a higher number.");
      } else {
        alert("Too high! Try a lower number.");
      }
    }
  
    if (attemptsLeft === 0) {
      alert(`Out of attempts! The hidden number was ${targetNumber}.`);
    }
  
    if (confirm("Do you want to play again?")) {
      playGame();
    } else {
      alert("Thanks for playing! Goodbye!");
    }
  }
  