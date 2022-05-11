// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов. Пример использования:
// let objects = [
// { name: 'Василий', surname: 'Васильев' },
// { name: 'Иван', surname: 'Иванов' },
// { name: 'Пётр', surname: 'Петров' }
// ]

// // fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
// let result = fn(objects, 'name', 'Иван');

// /*
// Результат выполнения должен быть:
// [
// { name: 'Иван', surname: 'Иванов' }
// ]
// */
let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' },
{ name: 'Иван', surname: 'Иванов2' },
{ name: 'Иван', surname: 'Иванов3' },
]
let resultArray = [];
function filterArreyByObjectValue (object, property, value) {
    //iterator тут будет итый объект передаваемого массива
    for (const iterator of object) {
        //iterator[property] в данном случае свойство объекта name. Value это Иван
        if (iterator[property] === value) {
            resultArray.push(iterator);
        }
    }
    return resultArray;
}
let result = filterArreyByObjectValue(objects, 'name', 'Иван');
console.log(result);