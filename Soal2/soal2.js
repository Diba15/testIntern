const denseRanking = (competitor_scores, gits_scores) => {
    let rankings = [];
    let current_rank = 1;

    // Calculate rank for each competitor
    for (let i = 0; i < competitor_scores.length; i++) {
        // Check if current score is different from previous score
        if (i === 0 || competitor_scores[i] !== competitor_scores[i - 1]) {
            rankings.push(current_rank);            // Add rank
            current_rank++;                         // Increment rank
        } else {
            rankings.push(rankings[-1]);            // Add previous rank
        }
    }

    let results = [];

    // Assign rank to each GITS score
    for (const score of gits_scores) {
        let foundRank = false;
        for (let i = 0; i < competitor_scores.length; i++) {
            if (score >= competitor_scores[i]) {
                results.push(rankings[i]);      // Assign rank
                foundRank = true;               // Set foundRank to true
                break;                          // Exit loop
            }
        }
        if (!foundRank) {
            results.push(rankings[rankings.length - 1] + 1);        // assign rank to last rank
        }
    }

    return results;
}

const submitDense = document.getElementById("button").onclick = (e) => {
    e = e || window.event;
    e.preventDefault()

    // Get Value from input
    let player = document.getElementById("player").value;
    const scoreList = document.getElementById("playerScore").value;
    let gitsPlayer = document.getElementById("gitsPlayer").value;
    const gitsScore = document.getElementById("gitsScore").value;

    // Convert to number
    player = parseInt(player);
    gitsPlayer = parseInt(gitsPlayer);
    // Convert input into array
    let scores = scoreList.split(' ');
    let gits = gitsScore.split(' ');

    // Convert array string into array of number
    for (const score of scores) {
        scores[scores.indexOf(score)] = parseInt(score)
    }

    // Convert array string into array of number
    for (const git of gits) {
        gits[gits.indexOf(git)] = parseInt(git)
    }

    // Check if input is valid
    if (scores.length !== player || gits.length !== gitsPlayer) {
        alert("Please fill Scores and GITS Scores Correctly");
        return;
    }

    const result = document.getElementById("result");

    const results = denseRanking(scores, gits);

    result.innerHTML = results.join(' ');
}