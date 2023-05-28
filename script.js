function calculateAnxietyScore() {
  let step1Items = [
    1, 2, 3, 5, 9, 10, 13, 14, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30, 31, 32,
    33, 34,
  ];
  let step2Items = [4, 6, 7, 8, 11, 12, 15, 16, 17, 18, 24, 26];
  let step1Total = 0;
  let step2Total = 0;

  // Calculate step 1 total
  for (let i = 0; i < step1Items.length; i++) {
    let itemNumber = step1Items[i];
    let itemScore = parseInt(
      document.getElementById("item" + itemNumber).value
    );
    step1Total += itemScore;
  }

  // Calculate step 2 total
  for (let j = 0; j < step2Items.length; j++) {
    let itemNumber = step2Items[j];
    let itemScore = parseInt(
      document.getElementById("item" + itemNumber).value
    );
    step2Total += itemScore;
  }

  // Calculate final score
  let prpsa = 72 - step2Total + step1Total;

  // Display the score
  document.getElementById("result").innerHTML = "Your PRPSA score is: " + prpsa;

  // Determine anxiety level
  let anxietyLevel = "";
  if (prpsa > 131) {
    anxietyLevel = "High";
  } else if (prpsa < 98) {
    anxietyLevel = "Low";
  } else {
    anxietyLevel = "Moderate";
  }

  // Display the anxiety level
  document.getElementById("anxiety-level").innerHTML =
    "Your anxiety level is: " + anxietyLevel;
}
