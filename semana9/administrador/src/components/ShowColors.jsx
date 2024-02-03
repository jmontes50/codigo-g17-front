const ShowColors = ({ colors }) => {
    const badgedColors = colors.map((color, indice) => {
        return (
        <span key={indice}
            className="badge rounded-pill mx-1 border border-2"
            // cuando definimos un objeto , ej para poner style, tenemos que poner {} de JS para interpolar y otras 2das {} del objeto en Si 
            style={{backgroundColor:`${color}`}}>
                {" "}
        </span>
        )
    })
    return badgedColors;
}

export default ShowColors;