class BlockBase {
    constructor(backgroundColor, borderColor, optionalFields) { // опциональные поля передаются как массив пар
        let elem = document.createElement('div');
        elem.style.backgroundColor = backgroundColor;
        elem.style.borderColor = borderColor;
        elem.style.borderStyle = "solid";
        elem.style.borderWidth = "4px";
        elem.style.width = "100px"; // дефолтные значения, которые можно менять через ввод
        elem.style.height = "100px";
        for (let field of optionalFields) {
            elem.style[field[0]] = field[1];
        }
        return elem;
    }
}

class BlockBuilder {
    constructor(reqBackgroundColor, reqBorderColor) {
        this.reqBackgroundColor = reqBackgroundColor;
        this.reqBorderColor = reqBorderColor;
    }

    setWidth(value) {
        this.width = value + "px";
        return this;
    }

    setHeight(value) {
        this.height = value + "px";
        return this;
    }

    build() {
        return new BlockBase(this.reqBackgroundColor, this.reqBorderColor, Object.entries(this).filter(param =>
            !param[0].startsWith("req") // обязательный параметры помечены префиксом req
        ));
    }
}

function startBuilding() {
    let reqBackgroundColor = document.getElementById('create-background-color').value;
    let reqBorderColor = document.getElementById('create-border-color').value;
    let optWidth = document.getElementById('create-width').value;
    let optHeight = document.getElementById('create-height').value;
    let block = new BlockBuilder(reqBackgroundColor, reqBorderColor);
    if (optWidth) {
        block.setWidth(optWidth);
    }
    if (optHeight) {
        block.setHeight(optHeight);
    }
    document.getElementById('sec-to-draw-block').appendChild(block.build());
}

document.getElementById('btn-create').addEventListener('click', startBuilding);