class Card {
    constructor(type, width, height) {
        this.width = width;
        this.height = height;
        this.elemType = type;
    }

    create() {
        let elem = document.createElement('div');
        elem.style.width = this.width;
        elem.style.height = this.height;
        elem.style.backgroundColor = 'black';
        elem.style.color = 'white';
        elem.innerText = this.elemType;
        return elem;
    }
}

class CardFactory {
    constructor(type) {
        switch (type) {
            case 'big': {
                return new Card(type, "300px", "400px");
            }
            case 'middle': {
                return new Card(type, "200px", "300px");
            }
            case 'small': {
                return new Card(type, "100px", "200px");
            }
            default:
                break;
        }
    }
}

document.querySelectorAll('#btn1')[0].addEventListener('click', function () {
    let chosenVariant = document.querySelectorAll('#select-to-choose')[0].value; // вернет value выбранной опции
    let elem = new CardFactory(chosenVariant);
    document.getElementById('section-to-draw').appendChild(elem.create());
});

