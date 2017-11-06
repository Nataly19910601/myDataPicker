function getCompliteDaySet(year, month, fullCount) {

    var days = [];
    var fullCount = fullCount;

    var currentMonth = daysGenerator(year, month);
    var preMonth = getPreMonth(year, month, currentMonth[0].dayOfWeek);
    var postMonth = getPostMonth(year, month, fullCount - (preMonth.length + currentMonth.length));

    days = preMonth.concat(currentMonth, postMonth);

    return days;
};

/*Получаем последние дни предыдущего месяца*/
function getPreMonth(year, month, dayOfWeek) {
    var days = [];
    var year = year;
    var month = month;
    var begin = 0;
    var end = 0;
    var mark = 1;

    // console.log("День недели " + dayOfWeek);

    if (month <= 0) {
        year--;
        month = 11;
    } else {
        month--;
    }

    switch (dayOfWeek) {
        case 0:
            mark = 6;
            break;
        case 1:
            mark = 7;
            break;
        case 2:
            mark = 1;
            break;
        case 3:
            mark = 2;
            break;
        case 4:
            mark = 3;
            break;
        case 5:
            mark = 4;
            break;
        case 6:
            mark = 5;
            break;
    }

    end = getCountDayInMonth(month);
    begin = end - mark;

    days = daysGenerator(year, month, begin, end)
    return days;
};

/*Получаем перые дни следующего месяца*/
function getPostMonth(year, month, lenth) {
    var days = [];
    var year = year;
    var month = month;
    var begin = 0;
    var end = lenth;

    if (month >= 11) {
        year++;
        month = 0;
    } else {
        month++;
    }

    days = daysGenerator(year, month, begin, end)

    return days;
}

function daysGenerator(year, month, begin, end) {
    var days = [];
    var isLeap = getIsLeap(year); //проверяем высокосный ли год
    var count = getCountDayInMonth(month, isLeap);

    var start = begin ? begin : 0;
    var stop = end ? end : count;
    var currentDayOfWeek = getFistDayOfWeek(year, month);

    for (var i = start; i < stop; i++) {
        days.push(new DayOfYear(year, month, i, currentDayOfWeek))
        if (currentDayOfWeek >= 6) {
            currentDayOfWeek = 0;
        } else {
            currentDayOfWeek++;
        }
    }
    return days;
};

function DayOfYear(year, month, day, dayOfWeek) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.dayOfWeek = dayOfWeek;
};

//проверяем высокосный ли год
function getIsLeap(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};

/*Число дней в месяце*/
function getCountDayInMonth(month, isLeap) {
    var count = 30;

    switch (month) {
        case 0:
            count = 31;
            break;
        case 1:
            count = isLeap ? 29 : 28;
            break;
        case 2:
            count = 31;
            break;
        case 3:
            count = 30;
            break;
        case 4:
            count = 31;
            break;
        case 5:
            count = 30;
            break;
        case 6:
            count = 31;
            break;
        case 7:
            count = 31;
            break;
        case 8:
            count = 30;
            break;
        case 9:
            count = 31;
            break;
        case 10:
            count = 30;
            break;
        case 11:
            count = 31;
            break;
    }
    return count;
};

/*Получаем день недели*/
function getFistDayOfWeek(year, month) {
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var date = new Date(year, month, 1);
    // console.log("День недели " + days[date.getDay()]);
    return date.getDay();
};

function showArray(array) {
    for (item in array) {
        console.log("Год: " + array[item].year + " Месяц: " + array[item].month + " День: " + array[item].day + " День недели " + array[item].dayOfWeek);
    }
};

//var allDays = getCompliteDaySet(2017, 11, 42);

//showArray(allDays);

