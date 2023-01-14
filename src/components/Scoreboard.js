const Scoreboard = ( {level, score, topScore} ) => {
    return(
        <div>
            <p>Level: {level}</p>
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
        </div>
    );
}

export default Scoreboard
