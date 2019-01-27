// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {

    // Обработка command
    var infInCommand =  command.split(' ');
    var commandName = infInCommand[0];
    var keys = Object.keys(phoneBook); 

    // Команда ADD
    if (commandName === 'ADD') {
        var userName = infInCommand[1];
        var userNumbers = infInCommand[2];

        if (keys.indexOf(userName) == -1) {
            phoneBook[userName] = userNumbers;
        } else {

            if (userNumbers !== undefined) {
                var userNumberList = userNumbers.split(',');

                for (var i = 0; i < userNumberList.length; i++) {

                    if (phoneBook[userName].indexOf(userNumberList[i]) == -1){
                        phoneBook[userName] += ',' + userNumberList[i];
                    }
                }
            }
        }
    }

    // Команда REMOVE_PHONE
    if (commandName === 'REMOVE_PHONE') {
        var delNumber = infInCommand[1];
        
        for (var i = 0; i < keys.length; i++) {
            var list = phoneBook[keys[i]].split(',');
            var place = -1;
            place = list.indexOf(delNumber);

            if (place !== -1) {
                list.splice(place, 1);
                phoneBook[keys[i]] = list.join(',');
                var log = true;
            } else {
                log = false;
            }
        
            for (var j = 0; j < list.length; j++) {

                if (list[j].length !== delNumber.length) {
                    list.splice(j, 1);
                    phoneBook[keys[i]] = list.join(',');
                }
            }
        }
        return log;
    }

    // Команда SHOW
    if (commandName === 'SHOW') {
        var result = [];

        for (var i = 0; i < keys.sort().length; i++) {

            if (phoneBook[keys[i]] !== ''){
                var list = phoneBook[keys[i]].split(',');

                for (var k = 0; k < list.length; k++){
                    if (list[k] == '') {
                        list.splice(k, 1);
                    }
                }

                var listInString = list.join(', ');
                result.push(keys[i] + ': ' + listInString);
            }
        }
        return result;
    }
};

/*
// Телефонная книга.
// В качестве ключа будем использовать имя контакта
// Значением будет список телефонов контакта
var phoneBook = {};

function addContact(name, phones) {
    // Проверяем, существует ли контакт, если нет – создаем
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = [];
    }

    // Добавляем новые телефоны
    // Функция concat не меняет массив, поэтому сохраняем результат
    phoneBook[name] = phoneBook[name].concat(phones);
}

function removeContactPhoneAt(name, index) {
    // Функция splice изменяет массив
    phoneBook[name].splice(index, 1);

    // Если у контакта не осталось номеров, удаляем его
    if (phoneBook[name].length === 0) {
        delete phoneBook[name];
    }
}

function removePhone(phone) {
    // Получаем список всех контактов
    var names = Object.keys(phoneBook);

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        // Ищем удаляемый телефон в списке контакта
        var phoneIndex = phoneBook[name].indexOf(phone);

        // Если индекс не равен -1, значит телефон принадлежит текущему контакту
        if (phoneIndex !== -1) {
            // Удаление телефона контакта
            removeContactPhoneAt(name, phoneIndex);

            // Выходим из функции, сообщаем об успехе операции
            return true;
        }
    }

    // Телефон так и не был найден, поэтому возвращаем false
    return false;
}

function showPhoneBook() {
    // Получаем список всех контактов
    var names = Object.keys(phoneBook);

    // Сортируем имена (функция sort меняет массив)
    names.sort();

    // Тут для итерации по контактам подходит функция map,
    //  поскольку нам для каждого контакта нужно вернуть список его телефонов
    return names.map(function (name) {
        // Получаем список телефонов контакта
        var phones = phoneBook[name];

        // Формируем строчку для контакта
        return name + ': ' + phones.join(', ');
    });
}
*/
/*
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
/*
module.exports = function (command) {
    // Разбиваем комнаду по пробелу
    // В нулевой позиции массива лежит название команды
    var parts = command.split(' ');

    // Обработка команды ADD
    if (parts[0] === 'ADD') {
        // Получаем массив телефонов
        var phones = parts[2].split(',');

        // Добавляем контакт и выходим из функции
        return addContact(parts[1], phones);
    }

    // Обработка команды REMOVE_PHONE
    if (parts[0] === 'REMOVE_PHONE') {
        // Удаляем телефон и выходим из функции
        return removePhone(parts[1]);
    }

    // Обработка команды SHOW
    if (parts[0] === 'SHOW') {
        return showPhoneBook();
    }
};
*/