

window.onload = function () {
    var month=10;
    var year=2017;
    var day =5;


    var mName = monthName(month);

    /*устанавливает название месяца и года*/
    year_month(mName,year);

/*Вызываем функцию генератора дней*/
    var allDays = getCompliteDaySet(year, month, 42);
    /*Выводим в кансоль массив дней*/
    showArray(allDays);

    /*Заполняем ячейки календаря массивом дней*/
    fillGap(allDays);

    $('td').click(selectGap);

    $("#next").click(nextMonth);

    $('#prev').click(prevMonth);



}

/*предыдущая выбранная ячейка*/
var prevgap =$('td');
/*Получаем объект дня из выбранной ячейки*/
function selectGap(){
    prevgap.css('border','#50359f 1px solid');
    $(this).css('border','1px solid red');
    prevgap= $(this);
    var index =$(this).index();

    var row= $(this).parent();
    var rowIndex=row.index();
    console.log("Индекс выбранной ячейки"+ index+ "Индекс выбранной строки"+ rowIndex);
    if (index==0) index=1;
    if (rowIndex==0) rowIndex=1;
    var gapIndex= (index)*(rowIndex);

    var gapObj = allDays[gapIndex].day;

    console.log("День:"+gapObj+"Индекс массива:"+gapIndex);
}

/*Заполняем ячейки календаря массивом дней*/
function fillGap (allDays) {
    $('td').each(function (index) {

        $(this).html(allDays[index].day+1);


    });

}
/*устанавливает название месяца и года*/
function year_month (mymonth,myyear) {

    $("#month").html(mymonth);
    $("#year").html(myyear);
}


/*Переходим на следующий месяц*/
function nextMonth() {
    $(this).css('border','1px solid red');
    if (month >= 11) {

        month=0;
        year++;
    }
    else  {
        month++;
    }
   var newDays = getCompliteDaySet(year, month, 42);
    fillGap(newDays);

}
/*Переходим на предыдущий месяц*/
function prevMonth(month) {
    $(this).css('border','1px solid red');
    if (month <= 0) {
        year--;
        month=11;

    }
    else  {
        month--;
    }
   var newDays = getCompliteDaySet(year, month, 42);
    fillGap(newDays);

}




/*номера месяцев переводим в названия*/
function monthName (month) {
    var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    var myMonth = monthNames[month];
    return myMonth;


}
