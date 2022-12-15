class BaseClass {
    constructor(mainParam, dependParam1, dependParam2) {
        this.mainParam = mainParam;
        this.dependParam1 = dependParam1;
        this.dependParam2 = dependParam2;
    }
}

class Factory {
    constructor(mainParam) {
        switch (mainParam) {
            case 'val1': {
                return new BaseClass(mainParam, 'dep1.1', 'dep2.1');
            }
            case 'val2': {
                return new BaseClass(mainParam, 'dep1.2', 'dep2.2');
            }
            default:
                break;
        }
    }
}

let ent1 = new Factory('val1');
let ent2 = new Factory('val2');

// скрыто создание объектов через baseClass
// снаружи не видно, что именно подается на вход конструктора

// ПРИМЕНЕНИЕ
// Возможное применение - когда создаем элементы/блоки одного классе, но параметры фиксированы и зависят от какого-то еще параметра.
// Создается фабрика, и в качестве аргумента в конструктор передается этот параметр.
// Например, есть блоки карточек, которые отличаются только размерами. Есть класс этих карточек, в конструктор которого подаются размеры.
// Но в проекте размеры используются только трех типов - большой, средний, маленький.
// Создаем фабрику и в нее в качестве параметра подаем 'big' 'middle' 'small', он вызывает конструтор класса карточек в заданием размера в зависимости от переданного типа
