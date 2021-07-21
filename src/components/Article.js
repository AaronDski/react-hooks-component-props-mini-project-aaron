function Article( { title, date = "January 1, 1970", preview, minutes} ) {
    function minutesCounter() {
        if(minutes < 30) {
            let coffeeAmount = "";
            for(let i=0; i < Math.ceil(minutes/5); i++) {
                coffeeAmount += "☕️";
            }
            return coffeeAmount;
        }
        else {
            let bentoAmount = "";
            for(let i= 0; i < Math.ceil(minutes/10); i++) { 
                bentoAmount += "🍱";
            }
            return bentoAmount;
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{`${date} ● ${minutesCounter()} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article