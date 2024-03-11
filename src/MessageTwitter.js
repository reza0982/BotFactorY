const Immutable = require('immutable')

module.exports = class MessageTwitter {
    constructor(message) {
        this.message = Immutable.fromJS(message)
        this.test = 'test'
    }

    get value() {
        return this.message.get('text')
    }

    format(text) {
        return '@' + this.message.getIn(['user', 'screen_name']) + ' ' + text
    }
}
