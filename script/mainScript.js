//________Task-1________//
//________Task-2________//
const objectOfAnimals = {
    0: 'zebra',
    1: 'lion',
    2: 'giraffe',
    3: 'skunk',
    4: 'lama',
    5: 'dog',
    6: 'cat'
}



function funcOfAnimals (id) {
    try {
        if (objectOfAnimals[id]) {
            return console.log(objectOfAnimals[id]);
        }
        else {
            throw TypeError('Не найден id!');
        }
    } catch (e) {
        console.error(e);
        console.log('Данного id не существует, введи от 0 до 6');
    }
}
funcOfAnimals(22);










// try {
//     function funcOfAnimals (id) {
//         if (objectOfAnimals[id]) {
//             return console.log(objectOfAnimals[id]);
//         }
//         else {
//             throw TypeError('Не найден id!');
//         }
//     }
//     funcOfAnimals(22);
// } catch (error) {
//     console.log('Данного id не существует, введи от 0 до 6');
// }
// funcOfAnimals();
