/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

    var times = new Date(date);
    var units = ['years', 'months', 'days', 'hours', 'minutes'];
    var timeData = {

        add: function(amount, name) {

            if ((units.indexOf(name) == -1) || (amount < 0)) {
                throw new TypeError();
            }
            
            if (name === 'years') {
                times.setFullYear(times.getFullYear() + amount);
            }

            if (name === 'months') {
                times.setMonth(times.getMonth() + amount);
            }

            if (name === 'days') {
                times.setDate(times.getDate() + amount);
            }

            if (name === 'hours') {
                times.setHours(times.getHours() + amount);
            }

            if (name === 'minutes') {
                times.setMinutes(times.getMinutes() + amount);
            }

            return this;
        },

        subtract: function(amount, name) {

            if ((units.indexOf(name) == -1) || (amount < 0)) {
                throw new TypeError();
            }

            if (name === 'years') {
                times.setFullYear(times.getFullYear() - amount);
            }

            if (name === 'months') {
                times.setMonth(times.getMonth() - amount);
            }

            if (name === 'days') {
                times.setDate(times.getDate() - amount);
            }

            if (name === 'hours') {
                times.setHours(times.getHours() - amount);
            }

            if (name === 'minutes') {
                times.setMinutes(times.getMinutes() - amount);
            }

            return this;
        },

        get value() {
            
            var year = times.getFullYear();
            var month = times.getMonth() + 1;
            var days = times.getDate();
            var hours = times.getHours();
            var minutes = times.getMinutes();

            if (month < 10) {
                month = '0' + month;
            }

            if (days < 10) {
                days = '0' + days;
            }

            if (hours < 10) {
                hours = '0' + hours;
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var answer = ''

            answer += year + '-' + month + '-' + days + ' ' + hours + ':' + minutes;

            return answer; 
        }
    }

    return timeData;
};