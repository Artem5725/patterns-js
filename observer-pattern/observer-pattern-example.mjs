import {Publisher, Subscriber} from "./observer-pattern-base.mjs"

class Button extends Publisher {
    constructor(obj) {
        super();
        this.htmlObj = obj;
    }

    mainLogic() {
        this.htmlObj.addEventListener("click", super.notify.bind(this));
    }
}

class Radio extends Subscriber {
    constructor(name, publisher, obj) {
        super(name, publisher);
        this.htmlObj = obj;
    }

    getDataFromPublisher(data) {
        super.getDataFromPublisher(data);
        this.htmlObj.checked = true;
    }
}

class OutPut extends Subscriber {
    constructor(name, publisher, obj) {
        super(name, publisher);
        this.htmlObj = obj;
    }

    getDataFromPublisher(data) {
        super.getDataFromPublisher(data);
        this.htmlObj.innerText = `Результат от публикующего: тип события ${data.type} сработал на ${data.target}`;
    }
}

let objPublisher = document.getElementById('publisher');
let objSubOutput = document.getElementById('subscriber1');
let objSubRadio = document.getElementById('subscriber2');

let pubButton = new Button(objPublisher);
let subOutput = new OutPut("subOutput", pubButton, objSubOutput);
let subRadio = new Radio("subRadio", pubButton, objSubRadio);

pubButton.mainLogic();

