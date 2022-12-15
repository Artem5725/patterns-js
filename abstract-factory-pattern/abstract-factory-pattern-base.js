class BaseClass1 {
    constructor(par1, par2) {
        this.type = 'typeSpecial';
        this.par1 = par1;
        this.par2 = par2;
    }
}

class BaseClass2 {
    constructor(par1, par2) {
        this.type = 'typeDefault';
        this.par1 = par1;
        this.par2 = par2;
    }
}

class AbstractFactory {
    constructor(type) {
        switch (type) {
            case 'type1': {
                return new BaseClass1('val1.1', 'val2.1');
            }
            case 'type2': {
                return new BaseClass1('val1.2', 'val2.2');
            }
            default:
                break;
        }
    }
}

let ent1 = new AbstractFactory('type1');
let ent2 = new AbstractFactory('type2');

// ПРИМЕНЕНИЕ
// возможно неплохо использовать, когда мы должны создать специфический блок (или элемент)
// т.е. нужна кнопка для блока такого-то, создаем абстрактную фабрику кнопок. В конструктор передаем блок, в котором надо создать кнопку
// по имени блока (можно не по имени а прямо по объекту) вызывается конструктор кнопок данного блока
