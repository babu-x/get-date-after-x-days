const addDays = require('date-fns/addDays');
const format = require('date-fns/format');

let result = (x) => {
    let days = addDays(new Date(2020,7,22), x);
    let formatted = format(days, 'dd-MM-yyyy');
    return formatted;
}



module.exports = result;
