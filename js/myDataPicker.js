var month = 5;
var year = 2017;
var calndarDays = getCompliteDaySet(2017, 5, 42);


window.onload = function () {


    var mName = monthName(month);

    /*устанавливает название месяца и года*/
    year_month(mName, year);

    /*Вызываем функцию генератора дней*/

    /*Выводим в кансоль массив дней*/
    // showArray(calndarDays);

    /*Заполняем ячейки календаря массивом дней*/
    fillGap(calndarDays);

    $('td').click(selectGap);

    $("#next").click(nextMonth);

    $('#prev').click(prevMonth);


}

/*предыдущая выбранная ячейка*/
var prevgap = $('td');

/*Получаем объект дня из выбранной ячейки*/
function selectGap(evt) {
    prevgap.css('border', '#50359f 1px solid');
    $(this).css('border', '1px solid red');
    prevgap = $(this);
    var index = $(this).index();

    var row = $(this).parent();
    var rowIndex = row.index();
    console.log(" Индекс выбранной ячейки " + index + " Индекс выбранной строки " + rowIndex);

    if (index == 0) index = 1;
    if (rowIndex == 0) rowIndex = 1;

    var gapIndex = (index) * (rowIndex) + (index);


    console.log(" День:" + calndarDays[gapIndex].day+" Месяц:" +calndarDays[gapIndex].month+" Год:" +calndarDays[gapIndex].year);

}


/*Заполняем ячейки календаря массивом дней*/
function fillGap(allDays) {
    $('td').each(function (index) {


        /*проверяем если дни из предыдущего месяца, делаем их блеклыми*/
        if ( allDays[index].month < (month)) {
            $(this).css('color', '#ccb0dc');



        }
        /*проверяем если дни из последующего месяца, делаем их блеклыми*/
        if ( allDays[index].month > (month)) {
            $(this).css('color', '#ccb0dc');


        }

        if ( allDays[index].month == (month)) {
            $(this).css('color', '#5c4787');
        }
        $(this).html(allDays[index].day + 1);


    });



}

/*устанавливает название месяца и года*/
function year_month(mymonth, myyear) {

    $("#month").html(mymonth);
    $("#year").html(myyear);
}


/*Переходим на следующий месяц*/
function nextMonth() {


    if (month == 11) { /*проверяем если месяц декабрь, то переходим еще и на следующий год*/

        month = 0;
        year++;
    }
    else {
        month++;
    }
   // console.log("Текщий месяц:"+month);
   calndarDays = getCompliteDaySet(year, month, 42);
    fillGap(calndarDays);
    var mName = monthName(month);
    year_month(mName, year);


   // showArray(newDays);

}

/*Переходим на предыдущий месяц*/
function prevMonth() {

    if (month == 0) { /*проверяем если месяц январь, то переходим еще и на следующий год*/

        month = 11;
        year--;
    }
    else {
        month--;
    }
     calndarDays = getCompliteDaySet(year, month, 42);
    fillGap(calndarDays);
    var mName = monthName(month);
    year_month(mName, year);


}


/*номера месяцев переводим в названия*/
function monthName(month) {
    var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var myMonth = monthNames[month];
    return myMonth;


}
