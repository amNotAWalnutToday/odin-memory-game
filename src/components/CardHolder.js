import Card from './Card';

const CardHolder = ( {levelKanji, scorePoint} ) => {
    const mapCards = () => {
        return levelKanji.map((item, i) => {
            return  <div key={i}>
                        <Card kanji={item} scorePoint={scorePoint} />
                    </div>
        });
    }

    return(
        <div id="card-holder">
            {mapCards()}
        </div>
    );
}

export default CardHolder;
