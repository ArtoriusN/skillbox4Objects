    // У нас есть объект, в котором хранятся зарплаты нашей команды:
    // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
    // Если объект salaries пуст, то результат должен быть 0.
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
        }
        let keySumm = 0;
        function summOffers(obj) {
            for (const key in obj) {
                keySumm += obj[key];
                console.log(obj[key]);
                }
                return keySumm;
            }
    
        let summ = summOffers(salaries);
        console.log(summ);