class Ticker {
    tick = 0

    increment = () => {
        console.log(this)
        this.tick++
    }
}

const ticker = new Ticker()
const { increment } = ticker
increment()