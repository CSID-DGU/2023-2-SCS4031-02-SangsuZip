import { EventEmitter } from 'events';

const Events = {
    TAG_RECOMMENED : 'tag-recommened'
}

const eventEmitter = new EventEmitter();

export { eventEmitter, Events};