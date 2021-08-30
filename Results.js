import  {useState} from "react";





const Results = (props) => {

    //const userInputs=props.userInputs;
    const review=props.Review;


    const Sentiment = require ('sentiment');

        const sentiment = new Sentiment ();

        const reviewScore = sentiment.analyze (review).score;
        const reviewPolarity = sentiment.analyze (review).comparative;
        const reviewWords = sentiment.analyze (review).words;

    

   // console.log(props,userInputs);

    // const [sentimentScore,setSentimentScore]=useState(0.00);
    // const[polarity,setPolarity]=useState(0.00);
    // const[sentimentType,setSentimentType]=useState("Positive Or Negative");
    // const[keywords,setKeywords]=useState(null);



    

    return ( 

        <div className="Results">
        <h1>Results</h1>
        <form>
            <label>Sentiment Score:</label><br/>
            <input
            type="text"
            readOnly
            value={reviewScore}
            required>
            </input><br/>

            <label>Polarity:</label><br/>
            <input
            type="text"
            readOnly
            value={reviewPolarity}
            required>
            </input><br/>

            <label>Positive Sentiment:</label><br/>
            <input
            readOnly
            type="text"
            required>
            </input><br/>

            
            <label>Neutral Sentiment:</label><br/>
            <input
            readOnly
            type="text"
            required>
            </input><br/>

            <label>Negative Sentiment:</label><br/>
            <input
            readOnly
            type="text"
            required>
            </input><br/>



            <label>Keywords:</label><br/>
            <textarea
            readOnly
            value={reviewWords}
            required></textarea>
            <label></label>
         

        </form>
    </div>

     );
}
 
export default Results;