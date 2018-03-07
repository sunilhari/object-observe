/**
 * Implementation of Object.observe using Proxy
 */
import { TYPE_ADD, TYPE_DELETE, TYPE_READ, TYPE_UPDATE, TYPE_NO_ACTION, _observer } from '../constants'
const handler = {
    set: (target, prop, value) => {
        let operation, oldvalue
        if (prop in target) {
            operation = TYPE_UPDATE
            oldvalue = target[prop]
        }
        else {
            operation = TYPE_ADD
        }
        target[prop] = value
        target[_observer][0]({ value, oldvalue, operation })
    },
    deleteProperty: function (target, prop) {
        let operation, oldvalue;
        if (prop in target) {
            oldvalue = target[prop];
            operation = TYPE_DELETE
            delete target[prop]
        }
        else {
            operation = TYPE_NO_ACTION
            oldvalue = ''
            value = ''
        }
        target[_observer][0]({ value, oldvalue, operation })
    },
}
class Observer {
    observe(target, callback) {
        Reflect.defineProperty(target, _observer, { enumerable: false, configurable: true, writable: false, value: [] });
        target[_observer].push(callback);
        return new Proxy(target, handler)
    }
    unobserve(target) {
        delete target[_observer];
        return true
    }
}
module.exports = new Observer();