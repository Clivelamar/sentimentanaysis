var Sentiment = require ('sentiment');

var sentiment = new Sentiment ();

//var mydocx = ["I love apples ,i dont eat pepper ,the movie was very nice"]

const getTheScore = () => {
   
    const reviewScore = sentiment.analyze ("I love apples").comparative;
    
    return (
         <div><p>John</p>
         
         </div>

        
        );
}

 
export default getTheScore;

// var = function(review){
//     var 
//     return reviewScore;
// }


// var getThePolarity= function(review){
//     var reviewPolarity = sentiment.analyze (review).comparative;
//     return reviewPolarity;
// }


// // exports.module.getTheType= function(review){
// //     var reviewScore = sentiment.analyze (review).po;
// //     return reviewScore;
// // }

// var getTheWords= function(review){
//     var reviewWords = sentiment.analyze (review).words;
//     return reviewWords;
// }


// mydocx.forEach(function(s){
//     console.log(sentiment.analyze(s))
// })
//console.log(docx)
