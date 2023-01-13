import Scoreboard from './Scoreboard';

const Header = ( {score, topScore} ) => {
    return(
        <header>
            <h1>Kanji Memory</h1>
            <Scoreboard score={score} topScore={topScore} />
        </header>
    );
}

export default Header
