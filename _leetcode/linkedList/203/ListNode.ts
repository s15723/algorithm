export default class ListNode {
    public data: number
    public next: ListNode = null

    constructor(data: number | number[]) {
        if (typeof data === 'number') {
            this.data = data
        } else {
            if (data === null || data.length === 0) {
                throw new Error('arr can not be empty')
            }
            this.data = data[0]

            let cur: ListNode = this
            for (let i = 1; i < data.length; i++) {
                cur.next = new ListNode(data[i])
                cur = cur.next
            }
        }
    }

    toString() {
        let str = ''
        let cur: ListNode = this

        while (cur !== null) {
            str += `${cur.data}->`
            cur = cur.next
        }
        str += 'null'

        return str
    }
}
