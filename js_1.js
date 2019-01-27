/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

    var hourInInt = Math.floor((minutes + interval) / 60);
    var str = '';

    // Если по минутам выходит переход в другой час
    if (hourInInt >= 1){
        hours = hours + hourInInt;

        if ((hours / 24) >= 1){
            hours = 24 * ((hours / 24) - Math.floor(hours / 24));
        }

        minutes = (minutes + interval) - (60 * hourInInt);

        // Формируем корректную запись времени
        if (hours <= 9){
            str = '0';
        }

        str += String(hours) + ':';

        if (minutes <= 9){
            str += '0';
        }

        str += String(minutes);

    // Если по минутам не выходит переход в другой час
    } else{
        minutes = minutes + interval;

        // Формируем корректную запись времени
        if (hours <= 9){
            str = '0';
        }

        str += String(hours) + ':';

        if (minutes <= 9){
            str += '0';
        }

        str += String(minutes);
    }
    return str;

    /*
    // Альтернативное решение команды Yandex
    // Определяем константу с информацией о количестве часов в сутках
    var HOURS_PER_DAY = 24;
    // Определяем константу с информацией сколько минут в часе
    var MINUTES_PER_HOUR = 60;

    // Увеличиваем значение минут
    minutes += interval;

    // Увеличиваем значение часов на количество полных часов в интервале
    hours += Math.floor(minutes / MINUTES_PER_HOUR);

    // Так как мы увеличили минуты и часы на весь interval, то
    // мы можем выйти за пределы 60 минут у часа и 24 часов у суток.
    // Исключим эту ситуацию.
    minutes %= MINUTES_PER_HOUR;

    hours %= HOURS_PER_DAY;

    // Используем для формата часов и минут, как в часах 1 -> 01
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    // Возвращаем результат
    return hours + ':' + minutes;
    */
};
