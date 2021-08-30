
import Results from "./Results";
import { useState } from "react";
import { Link } from "react-router-dom";
//import emosentiment from "Sentiment";


// filter a list from a prop
//<BlogList blogs={blogs.filter((blog)=>blog.author==='Mario Asempa')} title="Mario's Blogs"/>
//npx json-server --watch data/db.json --port 8000


 
const Home = () => {
   
 
    const [userinput,setUserinput]=useState('check');
    const [sentimentScore,setSentimentScore]=useState('0');
    const[polarity,setPolarity]=useState('0');
    const[sentimentType,setSentimentType]=useState("Positive Or Negative");
    const[keywords,setKeywords]=useState(null);

    const handleSubmit= (e)=>{

        e.preventDefault();

       
        
    
      //setSentimentScore(reviewScore);
    //     console.log(SentScore);
    //     const Polarity = sentiment.analyze (Review).comparative;
    //     setPolarity(Polarity);
    //     const sentimentType1 = sentiment.analyze (Review).positive;
    //     const sentimentType2 = sentiment.analyze (Review).negative;
    //     const keywords = sentiment.analyze (Review).words;
    //     setKeywords(keywords);
       

        


        

        }

    return ( 

        

<div className='grid-container'>
    <div className='grid-child sform'>
        
<div className='home'>
 <h1>Run Sentiment Analysis</h1>
            
          <form onSubmit={handleSubmit}>
            <textarea placeholder="Type a Review" onChange={(e)=>setUserinput(e.target.value)} ></textarea>
           <div className='clicks'>
                <button className='b1'><i className="fa fa-plus"></i>Add</button>
                 <button className='b2' onClick={handleSubmit}><i className="fa fa-check" ></i>Submit</button>
                <button className='b3'><i className="fa fa-trash"></i>Remove</button>
            </div>
        </form>

</div>

    </div>
    
   

   


    
<div className="grid-child Results rightside-col">
    <Results Review={userinput} ></Results>
    {/* <Sentiment Review={userinput}></Sentiment> */}
  
   

</div>


</div>


          );
}
 
export default Home;
