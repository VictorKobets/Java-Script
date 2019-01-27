/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    var resultList = [];
    var resultString = '';

    for (var i = 0; i < hashtags.length; i++) {

        if (resultList.indexOf(hashtags[i].toLowerCase()) == -1) {
            resultList.push(hashtags[i].toLowerCase());
        }
    }

    return resultString = resultList.join(', ');
};
