/*!
 * isomorphic-mongo-objectid - v@version@
 * Pure JavaScript implementation of mongodb ObjectId for the browser and server
 * https://github.com/john-doherty/isomorphic-mongo-objectid
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function () {

    'use strict';

    /*
     * Refactored version of source by Jonathan Häberle (jonathan.haeberle@gmail.com)
     * https://github.com/dreampulse/ObjectId.js
     */

    var _increment = 0;
    var _pid = Math.floor(Math.random() * (32767));
    var _machine = Math.floor(Math.random() * (16777216));

    if (typeof window !== 'undefined') {

        var storage = window.localStorage;

        var mongoMachineId = parseInt(storage.mongoMachineId, 10);

        if (mongoMachineId >= 0 && mongoMachineId <= 16777215) {
            _machine = Math.floor(storage.mongoMachineId);
        }

        storage.mongoMachineId = _machine;
    }

    /**
     * Creates a new mongo db style ObjectID
     * @returns {ObjectID} instance of ObjectID
     */
    function ObjectID() {

        var args = arguments;

        if (!(this instanceof ObjectID)) {
            if (args.length > 0) {
                return new ObjectID(args[0], args[1], args[2], args[3]);
            }
            else {
                return new ObjectID();
            }
        }

        if (typeof args[0] === 'object') {
            this.timestamp = args[0].timestamp;
            this.machine = args[0].machine;
            this.pid = args[0].pid;
            this.increment = args[0].increment;
        }
        else if (typeof args[0] === 'string' && args[0].length === 24) {
            this.timestamp = Number('0x' + args[0].substr(0, 8));
            this.machine = Number('0x' + args[0].substr(8, 6));
            this.pid = Number('0x' + args[0].substr(14, 4));
            this.increment = Number('0x' + args[0].substr(18, 6));
        }
        else if (args.length === 4 && args[0] !== null) {
            this.timestamp = args[0];
            this.machine = args[1];
            this.pid = args[2];
            this.increment = args[3];
        }
        else {
            this.timestamp = Math.floor(new Date().valueOf() / 1000);
            this.machine = _machine;
            this.pid = _pid;
            this.increment = _increment++;
            if (_increment > 0xffffff) {
                _increment = 0;
            }
        }
    }

    ObjectID.prototype.getDate = function () {
        return new Date(this.timestamp * 1000);
    };

    ObjectID.prototype.toArray = function () {
        var strOid = this.toString();
        var array = [];
        var i;
        for (i = 0; i < 12; i++) {
            array[i] = parseInt(strOid.slice(i * 2, i * 2 + 2), 16);
        }
        return array;
    };

    ObjectID.prototype.toString = function () {

        var timestamp = this.timestamp.toString(16);
        var machine = this.machine.toString(16);
        var pid = this.pid.toString(16);
        var increment = this.increment.toString(16);

        return [
            '00000000'.substr(0, 8 - timestamp.length) + timestamp,
            '000000'.substr(0, 6 - machine.length) + machine,
            '0000'.substr(0, 4 - pid.length) + pid,
            '000000'.substr(0, 6 - increment.length) + increment
        ].join('');
    };

    if (typeof module !== 'undefined') {
        module.exports = ObjectID;
    }
    else {
        window.ObjectID = ObjectID;
    }

})();
