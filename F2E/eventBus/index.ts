type EventType = string | symbol

type Handler<T = any> = (event?: T) => void
type WildcardHandler = (type: EventType, event?: any) => void

type EventHandlerList = Array<Handler>
type WildcardHandlerList = Array<WildcardHandler>

type EventHandlerMap = Map<
    EventType,
    EventHandlerList | WildcardHandlerList
>

interface EventBus {
    all: EventHandlerMap

    on<T = any>(type: EventType, handler: Handler<T>): void
    on(type: '*', handler: WildcardHandler): void

    off<T = any>(type: EventType, handler: Handler<T>): void
    off(type: '*', handler: WildcardHandler): void

    emit<T = any>(type: EventType, event?: T): void
    emit(type: '*', event?: any): void
}

function eventBus(all?: EventHandlerMap): EventBus {
    all = all || new Map()

    return {
        all,

        on<T = any>(type: EventType, handler: Handler<T>) {
            const handlers = all.get(type)
            // handlers 是指针，所以不需要 all.set(type, all.get(type).push(handler)得到的新handlers)
            const added = handlers && handlers.push(handler)
            if (!added) {
                all.set(type, [handler])
            }
        },

        off<T = any>(type: EventType, handler: Handler<T>) {
            const handlers = all.get(type)
            if (handlers) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1)
            }
        },

        emit<T = any>(type: EventType, event?: T) {
            ;((all.get(type) || []) as EventHandlerList)
                .slice()
                .map((handler) => handler(event))

            ;((all.get('*') || []) as WildcardHandlerList)
                .slice()
                .map((handler) => handler(type, event))
        },
    }
}

let bus = eventBus()
bus.on('*', () => console.log('*'))
bus.on('hello', (e) => console.log(e))
bus.on('hello', (e) => console.log(`${e}!!!`))
bus.emit('hello', 'world')
