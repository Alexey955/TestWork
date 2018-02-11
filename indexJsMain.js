var MODULE = (function() {//создаём модуль
  var arrOne = [];
  var arrTwo = [];
  var arrThree = [];
  var arrFour = [];
  var arrFive = [];
  var arrSix = [];
  var arrSeven = [];
  var arrEight = [];
  var arrNine = [];
  var arrTen = [];
  var matrix = [];
  function fillDate() {//заполняет массивы данными из таблицы
    arrOne = [document.getElementById("tdOneOne").innerHTML, document.getElementById("tdOneTwo").innerHTML, document.getElementById("tdOneThree").innerHTML, document.getElementById("tdOneFour").innerHTML, document.getElementById("tdOneFive").innerHTML, document.getElementById("tdOneSix").innerHTML];
    arrTwo = [document.getElementById("tdTwoOne").innerHTML, document.getElementById("tdTwoTwo").innerHTML, document.getElementById("tdTwoThree").innerHTML, document.getElementById("tdTwoFour").innerHTML, document.getElementById("tdTwoFive").innerHTML, document.getElementById("tdTwoSix").innerHTML];
    arrThree = [document.getElementById("tdThreeOne").innerHTML, document.getElementById("tdThreeTwo").innerHTML, document.getElementById("tdThreeThree").innerHTML, document.getElementById("tdThreeFour").innerHTML, document.getElementById("tdThreeFive").innerHTML, document.getElementById("tdThreeSix").innerHTML];
    arrFour = [document.getElementById("tdFourOne").innerHTML, document.getElementById("tdFourTwo").innerHTML, document.getElementById("tdFourThree").innerHTML, document.getElementById("tdFourFour").innerHTML, document.getElementById("tdFourFive").innerHTML, document.getElementById("tdFourSix").innerHTML];
    arrFive = [document.getElementById("tdFiveOne").innerHTML, document.getElementById("tdFiveTwo").innerHTML, document.getElementById("tdFiveThree").innerHTML, document.getElementById("tdFiveFour").innerHTML, document.getElementById("tdFiveFive").innerHTML, document.getElementById("tdFiveSix").innerHTML];
    arrSix = [document.getElementById("tdSixOne").innerHTML, document.getElementById("tdSixTwo").innerHTML, document.getElementById("tdSixThree").innerHTML, document.getElementById("tdSixFour").innerHTML, document.getElementById("tdSixFive").innerHTML, document.getElementById("tdSixSix").innerHTML];
    arrSeven = [document.getElementById("tdSevenOne").innerHTML, document.getElementById("tdSevenTwo").innerHTML, document.getElementById("tdSevenThree").innerHTML, document.getElementById("tdSevenFour").innerHTML, document.getElementById("tdSevenFive").innerHTML, document.getElementById("tdSevenSix").innerHTML];
    arrEight = [document.getElementById("tdEightOne").innerHTML, document.getElementById("tdEightTwo").innerHTML, document.getElementById("tdEightThree").innerHTML, document.getElementById("tdEightFour").innerHTML, document.getElementById("tdEightFive").innerHTML, document.getElementById("tdEightSix").innerHTML];
    arrNine = [document.getElementById("tdNineOne").innerHTML, document.getElementById("tdNineTwo").innerHTML, document.getElementById("tdNineThree").innerHTML, document.getElementById("tdNineFour").innerHTML, document.getElementById("tdNineFive").innerHTML, document.getElementById("tdNineSix").innerHTML];
    arrTen = [document.getElementById("tdTenOne").innerHTML, document.getElementById("tdTenTwo").innerHTML, document.getElementById("tdTenThree").innerHTML, document.getElementById("tdTenFour").innerHTML, document.getElementById("tdTenFive").innerHTML, document.getElementById("tdTenSix").innerHTML];
    matrix = [arrOne, arrTwo, arrThree, arrFour, arrFive, arrSix, arrSeven, arrEight, arrNine, arrTen];
}
  var reverseName = 0;//счётчики для обратный сортировки
  var reversePosition = 0;
  var reverseOffice = 0;
  var reverseAge = 0;
  var reverseStartDate = 0;
  var reverseSalary = 0;
  var stringTableOne = "tdOneOne";
  var stringTableTwo = "tdOneTwo";
  var stringTableThree = "tdOneThree";
  var stringTableFour = "tdOneFour";
  var stringTableFive = "tdOneFive";
  var stringTableSix = "tdOneSix";
  function goBack() {//записывает в переменные id ячеек первой строки таблицы
  stringTableOne = "tdOneOne";
  stringTableTwo = "tdOneTwo";
  stringTableThree = "tdOneThree";
  stringTableFour = "tdOneFour";
  stringTableFive = "tdOneFive";
  stringTableSix = "tdOneSix";
}
  var matrixTable = [//матрица из id ячеек таблицы
    ["tdOneOne", "tdOneTwo", "tdOneThree", "tdOneFour", "tdOneFive", "tdOneSix"],
    ["tdTwoOne", "tdTwoTwo", "tdTwoThree", "tdTwoFour", "tdTwoFive", "tdTwoSix"],
    ["tdThreeOne", "tdThreeTwo", "tdThreeThree", "tdThreeFour", "tdThreeFive", "tdThreeSix"],
    ["tdFourOne", "tdFourTwo", "tdFourThree", "tdFourFour", "tdFourFive", "tdFourSix"],
    ["tdFiveOne", "tdFiveTwo", "tdFiveThree", "tdFiveFour", "tdFiveFive", "tdFiveSix"],
    ["tdSixOne", "tdSixTwo", "tdSixThree", "tdSixFour", "tdSixFive", "tdSixSix"],
    ["tdSevenOne", "tdSevenTwo", "tdSevenThree", "tdSevenFour", "tdSevenFive", "tdSevenSix"],
    ["tdEightOne", "tdEightTwo", "tdEightThree", "tdEightFour", "tdEightFive", "tdEightSix"],
    ["tdNineOne", "tdNineTwo", "tdNineThree", "tdNineFour", "tdNineFive", "tdNineSix"],
    ["tdTenOne", "tdTenTwo", "tdTenThree", "tdTenFour", "tdTenFive", "tdTenSix"]
  ];
  function changeOrder(num) {//записывает в переменные id ячеек следующей строки таблицы
    var counterOrder = 0;
      stringTableOne = matrixTable[num][counterOrder++];
      stringTableTwo = matrixTable[num][counterOrder++];
      stringTableThree = matrixTable[num][counterOrder++];
      stringTableFour = matrixTable[num][counterOrder++];
      stringTableFive = matrixTable[num][counterOrder++];
      stringTableSix = matrixTable[num][counterOrder];
  }
function createSortTable(arrSort, counterSwitch, counterFor, counterFun) {//сравнивает массивы и заполняет таблицу для сортировки
  var counterRow = 0;
  var counterForClone = counterFor;
  var counterFunClone = counterFun;
  var matrixClone = matrix.slice();
  label:
  for (var i = 0; i < 10; i++) {
    for (var m = 0; m < counterForClone; m++) {
      if (arrSort[0] == matrixClone[m][counterSwitch]) {
        document.getElementById(stringTableOne).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableTwo).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableThree).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFour).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFive).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableSix).innerHTML = matrixClone[m][counterRow];
        counterRow = 0;//счётчики для перехода по ячейкам строки
        counterFunClone++;//счётчики для перехода на следующую строку
        counterForClone--;//счётчик итераций
        arrSort.shift();
        matrixClone.splice(m, 1);
        if (counterForClone) {//условие наличия итераций
          changeOrder(counterFunClone);
        }
        continue label;//переход во внешний цикл
      }
    }
  }
}
function sortName() {//сортировка имени
  var arrprim = [arrOne[0], arrTwo[0], arrThree[0], arrFour[0], arrFive[0], arrSix[0], arrSeven[0], arrEight[0], arrNine[0], arrTen[0]];//массив имён
  if (reverseName == 0 || (reverseName % 2) == 0 ) {//по возрастанию или убыванию
  var arrSort = arrprim.sort(); 
  } else {
      var arrSort = arrprim.sort();
      arrSort = arrSort.reverse();
  }
  var counterName = 0;//показатель имени
  var counterFun = 0;//счётчики для перехода на следующую строку
  var counterFor = 10;//счётчики итераций
  createSortTable(arrSort, counterName, counterFor, counterFun);
  goBack();
  reverseName++;
}
function sortPosition() {//сортировка должности
  var arrprim = [arrOne[1], arrTwo[1], arrThree[1], arrFour[1], arrFive[1], arrSix[1], arrSeven[1], arrEight[1], arrNine[1], arrTen[1]];
  if (reversePosition == 0 || (reversePosition % 2) == 0 ) {
  var arrSort = arrprim.sort();
  } else {
      var arrSort = arrprim.sort();
      arrSort = arrSort.reverse();
  }
  var counterPosition = 1;
  var counterFun = 0;
  var counterFor = 10;
  createSortTable(arrSort, counterPosition, counterFor, counterFun);
  goBack();
  reversePosition++;
}
function sortOffice() {//сортировка офисов
  var arrprim = [arrOne[2], arrTwo[2], arrThree[2], arrFour[2], arrFive[2], arrSix[2], arrSeven[2], arrEight[2], arrNine[2], arrTen[2]];
  if (reverseOffice == 0 || (reverseOffice % 2) == 0 ) {
  var arrSort = arrprim.sort();
  } else {
      var arrSort = arrprim.sort();
      arrSort = arrSort.reverse();
  }
  var counterOffice = 2;
  var counterFun = 0;
  var counterFor = 10;
  createSortTable(arrSort, counterOffice, counterFor, counterFun);
  goBack();
  reverseOffice++;
}
function sortAge() {//сортировка возраста
  var arrprim = [arrOne[3], arrTwo[3], arrThree[3], arrFour[3], arrFive[3], arrSix[3], arrSeven[3], arrEight[3], arrNine[3], arrTen[3]];
  if (reverseAge == 0 || (reverseAge % 2) == 0 ) {
    var arrSort = arrprim.sort(sortNumb);
  } else {
      var arrSort = arrprim.sort(sortNumb);
      arrSort = arrSort.reverse();
  }
  var counterAge = 3;
  var counterFun = 0;
  var counterFor = 10;
  function sortNumb(a, b) {
    return a - b;
  }
  createSortTable(arrSort, counterAge, counterFor, counterFun);
  goBack();
  reverseAge++;
}
function sortStartDate() {//сортировка дня начала работы
  var arrprim = [arrOne[4], arrTwo[4], arrThree[4], arrFour[4], arrFive[4], arrSix[4], arrSeven[4], arrEight[4], arrNine[4], arrTen[4]];
  var arrStartDate = [];
  var box;
  var str;
  for (var i = 0; i < 10; i++) {//формирует массив чисел. "2012/02/15" становится 20120215
    box = arrprim[i];
    box = box.split("/");
    str = box[0] + box[1] + box[2];
    str = Number(str);
    arrStartDate[i] = str;
  }
  if (reverseStartDate == 0 || (reverseStartDate % 2) == 0 ) {
    var arrSort = arrStartDate.sort(sortNumb);
  } else {
      var arrSort = arrStartDate.sort(sortNumb);
      arrSort = arrSort.reverse();
  }
  var counterFun = 0;
  var counterFor = 10;
  function sortNumb(a, b) {
    return a - b;
  }
  var counterRow = 0;
  var counterForClone = counterFor;
  var counterFunClone = counterFun
  var matrixClone = matrix.slice();
  var boxMatrix;
  var strMatrix;
  var arrStartDateMatrix = [];
  for (var i = 0; i < 10; i++) {//формирует массив чисел
    boxMatrix = matrixClone[i][4];
    boxMatrix = boxMatrix.split("/");
    strMatrix = boxMatrix[0] + boxMatrix[1] + boxMatrix[2];
    strMatrix = Number(strMatrix);
    arrStartDateMatrix[i] = strMatrix;
  }
  lableStartDate:
  for (var i = 0; i < 10; i++) {//заполняет таблицу
    for (var m = 0; m < counterForClone; m++) {
      if (arrSort[0] == arrStartDateMatrix[m]) {

        document.getElementById(stringTableOne).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableTwo).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableThree).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFour).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFive).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableSix).innerHTML = matrixClone[m][counterRow];
        counterRow = 0;
        counterFunClone++;
        counterForClone--;
        arrSort.shift();
        matrixClone.splice(m, 1);
        arrStartDateMatrix.splice(m, 1);
        if (counterForClone) {
          changeOrder(counterFunClone);
        }
        continue lableStartDate;
      }
    }
  }
  goBack();
  reverseStartDate++;
}
function sortSalary() {//сортировка ЗП
  var arrprim = [arrOne[5], arrTwo[5], arrThree[5], arrFour[5], arrFive[5], arrSix[5], arrSeven[5], arrEight[5], arrNine[5], arrTen[5]];
  var arrHelp = [];
  var boxSalary;
  var strSalary;
  for (var i = 0; i < 10; i++) {//создаёт массив чисел. "$500" становится 500
    boxSalary = arrprim[i];
    boxSalary = boxSalary.split("$");
    arrHelp[i] = Number(boxSalary[1]);
  }
  if (reverseSalary == 0 || (reverseSalary % 2) == 0 ) {
  var arrSort = arrHelp.sort(sortNumb);
  } else {
      var arrSort = arrHelp.sort(sortNumb);
      arrSort = arrSort.reverse();
  }
  var counterFun = 0;
  var counterFor = 10;
  function sortNumb(a, b) {
    return a - b;
  }
  var counterRow = 0;
  var counterForClone = counterFor;
  var counterFunClone = counterFun
  var matrixClone = matrix.slice();
  var boxMatrix;
  var arrSalary = [];
  for (var i = 0; i < 10; i++) {//создаёт массив чисел
    boxMatrix = matrixClone[i][5];
    boxMatrix = boxMatrix.split("$");
    arrSalary[i] = Number(boxMatrix[1]);
  }
  labelSalary:
  for (var i = 0; i < 10; i++) {//сравнивает массивы и заполняет таблицу
    for (var m = 0; m < counterForClone; m++) {
      if (arrSort[0] == arrSalary[m]) {
        document.getElementById(stringTableOne).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableTwo).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableThree).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFour).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableFive).innerHTML = matrixClone[m][counterRow++];
        document.getElementById(stringTableSix).innerHTML = matrixClone[m][counterRow];
        counterRow = 0;
        counterFunClone++;
        counterForClone--;
        arrSort.shift();
        matrixClone.splice(m, 1);
        arrSalary.splice(m, 1);
        if (counterForClone) {
          changeOrder(counterFunClone);
        }
        continue labelSalary;
      }
    }
  }
  goBack();
  reverseSalary++;
}
function createTableSearch() {//фильтрация при нажатии на кнопку
  var searchEl = document.getElementById("areaSearch").value;//данные из поля ввода
  var matrixClone = matrix.slice();
  var counterRow = 0;
  var counterFunClone = 0;
  for (var i = 0; i < 10; i++) {//сравнивает полученные данные с данными в таблице и фильтрует
    for (var j = 0; j < 6; j++) {
      if (searchEl == matrixClone[i][j]) {
        document.getElementById(stringTableOne).innerHTML = matrixClone[i][counterRow++];
        document.getElementById(stringTableTwo).innerHTML = matrixClone[i][counterRow++];
        document.getElementById(stringTableThree).innerHTML = matrixClone[i][counterRow++];
        document.getElementById(stringTableFour).innerHTML = matrixClone[i][counterRow++];
        document.getElementById(stringTableFive).innerHTML = matrixClone[i][counterRow++];
        document.getElementById(stringTableSix).innerHTML = matrixClone[i][counterRow];
        counterRow = 0;
        counterFunClone++;
        changeOrder(counterFunClone);
        continue;
        goBack();
      }
    }
  }
  for (var j = counterFunClone; j < 10; j++) {//записывает --- в пустых ячейках таблицы
    document.getElementById(stringTableOne).innerHTML = "---";
    document.getElementById(stringTableTwo).innerHTML = "---";
    document.getElementById(stringTableThree).innerHTML = "---";
    document.getElementById(stringTableFour).innerHTML = "---";
    document.getElementById(stringTableFive).innerHTML = "---";
    document.getElementById(stringTableSix).innerHTML = "---";
    counterRow = 0;
    counterFunClone++;
    changeOrder(counterFunClone);
  }
}
return {//выводит в глобальную область 
  arrEight: arrEight,
  arrFive: arrFive,
  arrFour: arrFour,
  arrNine: arrNine,
  arrOne: arrOne,
  arrSeven: arrSeven,
  arrSix: arrSix,
  arrTen: arrTen,
  arrThree: arrThree,
  arrTwo: arrTwo,
  changeOrder: changeOrder,
  createSortTable: createSortTable,
  fillDate: fillDate,
  goBack: goBack,
  matrix: matrix,
  matrixTable: matrixTable,
  reverseAge: reverseAge,
  reverseName: reverseName,
  reverseOffice: reverseOffice,
  reversePosition: reversePosition,
  reverseSalary: reverseSalary,
  reverseStartDate: reverseStartDate,
  stringTableFive: stringTableFive,
  stringTableFour: stringTableFour,
  stringTableOne: stringTableOne,
  stringTableSix: stringTableSix,
  stringTableThree: stringTableThree,
  stringTableTwo: stringTableTwo,
  sortName: sortName,
  sortPosition: sortPosition,
  sortOffice: sortOffice,
  sortAge: sortAge,
  sortStartDate: sortStartDate,
  sortSalary: sortSalary,
  createTableSearch: createTableSearch
}
}());