'use strict';

module.exports = function (object, addByName) {
    Object.defineProperty(object, 'addByName', {
        enumerable: true,
        value: addByName
    });
};
