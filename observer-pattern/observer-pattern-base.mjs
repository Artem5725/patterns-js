export class Publisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(obj) {
        this.subscribers.push(obj);
    }

    unsubscribe(obj) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== obj);
    }

    notify(data) {
        for (let obj of this.subscribers) {
            obj.getDataFromPublisher(data);
        }
    }
}

export class Subscriber {
    constructor(name, publisher) {
        this.name = name;
        publisher.subscribe(this);
    }

    getDataFromPublisher(data) {
        console.log(this.name + data);
    }
}

// TEST
let publisher = new Publisher();
let subscriber1 = new Subscriber("sub1", publisher);
let subscriber2 = new Subscriber("sub2", publisher);

publisher.notify(" all subscribed");
console.log("Unsubscribe 2");
publisher.unsubscribe(subscriber2);
publisher.notify(" one remains");