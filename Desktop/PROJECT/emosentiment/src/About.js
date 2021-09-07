import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="content">
        <h1>About Sentiment Analysis</h1>
        <p>

        <b>Technology</b> has become a part of our lives and about 26 percent of the world population shop online. As we learn how to achieve the best results with the least effort using technology, we tend to explore various options available to ensure we use the most effective tool available. 
Both customers and producers would want to know the scale of their product and how it is appreciated by the public. The easy way to achieve this is through analyzing reviews made by users of the product using sentiment analysis. 
Sentiment Analysis is the process of determining whether a piece of writing is positive, negative, or neutral.
This application uses real user’s comments to generate sentiment scores, polarity, positive or negative sentiment.
Once analysis is finished, you will see the overall sentiment score, polarity, sentiment type for the keywords typed.
The better input text is formatted (properly placed commas, spaces between sentences, etc.), the faster and more accurate analysis will be returned.


        
        </p>
    </div>
     );
}
 
export default About;