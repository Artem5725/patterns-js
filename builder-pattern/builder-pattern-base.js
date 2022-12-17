class BaseClass {
    constructor(req1, req2, optionalParams) {// optionalParams содержат массив пар (ключ - имя поля, значение - значение)
        this.req1 = req1;
        this.req2 = req2;
        for (let param of optionalParams) {
            this[param[0]] = param[1];
        }
    }
}

class Builder {
    constructor(req1, req2) { // в конструктор добавляются обязательные поля
        this.req1 = req1;
        this.req2 = req2;
    }

    setOptional1(value) {
        this.opt1 = value;
        return this; // важно возвращать this, чтоб была возможность заполнить поля объекта класса в последовательно цепочкой
    }

    setOptional2(value) {
        this.opt2 = value;
        return this;
    }

    setOptional3() {
        this.opt3 = true;
        return this;
    }

    build() { // обязательный метод. формирует параметры для конструктора основного класса
        // можно так и не выпендриваться с обязательными параметрами, которые подаются отдельно
        // (передать просто this, а на стороне базового класса в конструкторе убрать обязательные поля, как отдельные параметры, и все брать из переданного объекта)
        // этот пример на случай если поля в конструкторе базового класса менять не желательно
        return new BaseClass(this.req1, this.req2, Object.entries(this).filter(param =>
            param[0] !== "req1" && param[0] !== "req2"//отделил необязательные параметры
        ));
    }
}

class Director {
    static popularVariant1() {
        return new Builder(123, 321).setOptional1('str').setOptional3();
    }

    static popularVariant2() {
        return new Builder(123, 321).setOptional2('str');
    }
}

let ent1 = new Builder(1, 2).setOptional2(123).setOptional3().build();
let ent2 = new Builder(1, 2).setOptional1("str").build();
let popular1 = Director.popularVariant1();
let popular2 = Director.popularVariant2();

// Использовать, когда в конструктор исходного класса передается много полей, некоторые из которых необязательные
// в таком случае создаем паттерн билдер. В конструктор передаем обязательные поля, а для необязательных полей
// добавляем методы на их задания,
// при чем методы должны возвращать this, чтобы была возможность задать все поля цепочкой
// дополнительно создается метод build, который формирует все собранные обязательные и необязательные поля и подает
// в конструктор исходного класса

// есть еще директор (статическими методами определяет часто встречающиеся наборы параметров) !! вроде как только статические методы использует

// Применения - в классах для элементов, которые кастомизируются через параметры, поданные на конструктор (важно, чтобы были опциональные поля, иначе это бессмысленно)
// например, когда элемент HTML собирается по поданным в конструктор параметрам