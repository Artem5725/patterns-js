class BlockBase {
    constructor(backgroundColor, borderColor, optionalFields) {
        let elem = document.createElement('div');
        elem.style.backgroundColor = backgroundColor;
        elem.style.borderColor = borderColor;
        for (let field in optionalFields) {
            elem.style[field] = optionalFields[field];
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
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    build() {
        return new BlockBase(this.reqBackgroundColor, this.reqBorderColor, Object.entries(this).filter(param => {
            !param[0].startsWith("req") // обязательный параметры помечены префиксом req
        }))
    }
}

function startBuilding() {
    let reqBackgroundColor = document.getElementById('create-background-color').value;
    let reqBorderColor = document.getElementById('create-background-color').value;
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