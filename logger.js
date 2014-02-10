var logger = {
    enabled: true,
    level: 3,
    output: function (action, msgs) {
        'use strict';
        if (logger.enabled && console !== undefined) {
            msgs = Array.prototype.slice.call(msgs);
            if (msgs && msgs.length > 0) {
                var msg = new Date().toString().split(' ').splice(1, 4).join('-') + ' (' + action + ') >>> ' + msgs.join('');
                if (logger.level >= logger[action]) {
                    if (console.hasOwnProperty(action.toLowerCase())) {
                        console[action.toLowerCase()](msg);
                    } else {
                        console.log(msg);
                    }
                }
            }
        }
    },

    DEBUG: 3,
    debug: function () {
        'use strict';
        logger.output('DEBUG', arguments);
    },

    INFO: 2,
    info: function () {
        'use strict';
        logger.output('INFO', arguments);
    },

    WARN: 1,
    warn: function () {
        'use strict';
        logger.output('WARN', arguments);
    },

    ERROR: 0,
    error: function () {
        'use strict';
        logger.output('ERROR', arguments);
    }
};

module.exports = logger;