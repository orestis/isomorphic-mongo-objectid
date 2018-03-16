'use strict';

var ObjectID = require('../src/isomorphic-mongo-objectid.js');

describe('ObjectID', function () {

    it('should allow creation with no arguments', function() {

        var oid = new ObjectID();

        expect(oid instanceof ObjectID).toEqual(true);
    });

    it('should allow creation without new operator', function() {
        expect(ObjectID() instanceof ObjectID).toEqual(true);
    });

    it('should expose .getDate method', function() {
        expect(ObjectID().getDate).toBeDefined();
    });

    it('should expose .toArray method', function() {
        expect(ObjectID().toArray).toBeDefined();
    });

    it('should expose .toString method', function() {
        expect(ObjectID().toString).toBeDefined();
    });

    it('should create an objectID', function() {

        var objectId = new ObjectID(0, 0, 0, 0x00ffffff);
        var objectIdString = objectId.toString();

        expect(objectIdString).not.toBe(null);
        expect(objectId.toString()).toEqual('000000000000000000ffffff');
    });

    it('should serialize and deserialize the timestamp', function() {

        var now = new Date();
        var timeStamp = Math.floor(now.valueOf() / 1000) * 1000;
        var aboutNow = new Date(timeStamp);
        var objectId = new ObjectID();

        expect(objectId.getDate().valueOf()).toEqual(aboutNow.valueOf());
    });

    it('should serialize to a byte array', function() {

        var oArray = new Array(0x50, 0x7f, 0x1f, 0x77, 0xbc, 0xf8, 0x6c, 0xd7, 0x99, 0x43, 0x90, 0x11);
        var oString = '507f1f77bcf86cd799439011';
        var objectId = new ObjectID(oString);

        expect(objectId.toString()).toEqual(oString);
        expect(objectId.toArray()).toEqual(oArray);
    });

});
