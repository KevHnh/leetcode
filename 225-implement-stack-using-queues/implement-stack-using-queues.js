class MyStack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(x) {
        this.queue1.push(x)
    }

    pop() {
        while (this.queue1.length !== 1) {
            this.queue2.push(this.queue1.shift())
        }

        let x = this.queue1.shift()

        while (this.queue2.length !== 0) {
            this.queue1.push(this.queue2.shift())
        }

        return x
    }

    top() {
        return this.queue1[this.queue1.length - 1]
    }

    empty() {
        return this.queue1.length === 0
    }
}