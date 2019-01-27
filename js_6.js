/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var copycoll = JSON.parse(JSON.stringify(arguments[0]));
    var args = [].slice.call(arguments);
    args.sort();

    if (args.length == 1){
      return copycoll

    } else {
      for (var i = 0; i < args.length; i++){

        if (args[i][0] == 'filterIn'){
          copycoll = copycoll.reduce(function(acc,curr,index,arr){

            if (args[i][2].indexOf(curr[args[i][1]]) != -1){
              acc[index] = arr[index]
            } return acc
          },[]);
          } else if (args[i][0] == 'select') {
            for (var m = 0; m < copycoll.length; m++){
              for (key in copycoll[m]){

               if (args[i][1].indexOf(key) != -1){
                  continue;

               } else {

                delete copycoll[m][key];
              }
            }
            } 
          }
        }
      } copycoll = copycoll.filter(function(n){ return n != undefined }); 
      return copycoll
}

/**
 * @params {String[]}
 */
function select() {
    var params = [].slice.call(arguments);
    return ['select',params];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn',property,values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};