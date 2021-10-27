function dr(countS, startIndexToDraw, countToDraw) {
    let str = '';
    for (let i = 0; i < countS; i++) {
        let finishIndex = startIndexToDraw + countToDraw;
        if (i >= startIndexToDraw && i < finishIndex)
            str = str + '*';
        else
            str = str + ' ';
    }
    console.log(str);
}
let currentIndex = 15;
for (let index = 1; index <= 15; index++) { //lines
    dr(30, currentIndex--, (index * 2) - 1);
}
for (let index = 1; index <= 15; index++) {
    dr(30, currentIndex++, 30 - ((index * 2) - 1));
}