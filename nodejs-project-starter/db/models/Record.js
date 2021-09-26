const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RecordSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lastn: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    localAddres: {
        type: String
    },
    localAddres: {
        type: String
    },
    localAddres: {
        type: String
    },
    localAddres1: {
        type: String
    },
    localAddres2: {
        type: String
    },
    localAddres3: {
        type: String
    },
    localAddres4: {
        type: String
    },
    localAddres5: {
        type: String
    },
    localAddres6: {
        type: String
    },
    localAddres7: {
        type: String
    },
    localAddres8: {
        type: String
    },
    localAddres9: {
        type: String
    },
    localAddres10: {
        type: String
    },
    localAddres11: {
        type: String
    },
    localAddres12: {
        type: String
    },
    localAddres13: {
        type: String
    },
    localAddres14: {
        type: String
    },
    localAddres15: {
        type: String
    },
    createdAt: {
        type: Number,
        default: () => Date.now()
    },
});

RecordSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = mongoose.model("Record", RecordSchema, "Record");
