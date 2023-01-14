import Scoreboard from './Scoreboard';

const Header = ( {level, score, topScore} ) => {
    return(
        <header>
            <h1>Kanji Memory</h1>
            <Scoreboard
                level={level} 
                score={score} 
                topScore={topScore} 
            />
        </header>
    );
}

export default Header
