const Card = ( {kanji, scorePoint} ) => {
    return (
        <div className="card" onClick={scorePoint}>
            <p>{kanji}</p>
        </div>
    )
}

export default Card;