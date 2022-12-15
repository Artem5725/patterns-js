class HeaderCard {
    /*...*/
    /* block functionality */
    /*...*/
    create() {
        let elem = document.createElement('div');
        elem.classList.add('header__card');
        elem.innerText = 'Header card';
        return elem;
    }
}

class FooterCard {
    /*...*/
    /* block functionality */
    /*...*/
    create() {
        let elem = document.createElement('div');
        elem.classList.add('footer__card');
        elem.innerText = 'Footer card';
        return elem;
    }
}


class CardAbstractFactory {
    constructor(elem) {
        switch (elem.value) {
            case 'footer': {
                return new FooterCard();
            }
            case 'header': {
                return new HeaderCard();
            }
            default:
                break;
        }
    }
}

let buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener('click', function () {
        let card = new CardAbstractFactory(this);
        document.getElementById('section1').appendChild(card.create());
    });
}
