function getDayInfo(date){
    let weekNumber = 1;
    let count = date.getDate();
    if (count > 7){
        while (count >= 0){
            count -= 7;
            weekNumber += 1;
        };
    }
    
    
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let months = ['января',
                  'февраля',
                  'марта', 
                  'апреля', 
                  'мая', 
                  'июня', 
                  'июля', 
                  'августа', 
                  'сентября', 
                  'октября', 
                  'ноября', 
                  'декабря',
                ];
    
    

    return (`${days[date.getDay()]}, ${weekNumber} неделя ${months[date.getMonth()]} ${date.getYear() +1900} года`);  
    //${days[date.getDay()]},+ ${date.getDay()} + ${months[date.getMonth()]} + ${date.getYear()} + года`);
}

let str = prompt ('Введите дату');
let array = str.split('.');
let date = new Date();
date.setFullYear(array[2], array[1] - 1, array[0]);
alert(getDayInfo(date));


