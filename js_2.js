/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    var result = [];
    var wordsInTweet = tweet.split(' ');

    for (var i = 0; i < wordsInTweet.length; i++) {
        
        if (wordsInTweet[i].indexOf('#') !== -1) {
            result.push(wordsInTweet[i].slice(1, wordsInTweet[i].length));
        }
    }
    return result;
};
