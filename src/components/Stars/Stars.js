import './Stars.css';

export default function Stars ({starsTotalNbr = 5, starsFillNbr = 0}) {
    const stars = Array(starsTotalNbr).fill(0); /* [0, 0, 0, 0, 0] */

   
    /* map the "stars" and compare it with the rating provided in data
    If stars is > or = we put a colored stars, otherwise grey ones */
       
    return stars.map((rangeElem, key) => {
        return (
           
            <img src={key+1>starsFillNbr? "/images/star-empty.svg" : "/images/star.svg"} alt="star" key={key} />
        )
    }
    )
}


