const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let columnSchema = new Schema(
  {
    _id: {
      type: ObjectId,
    },
    name: {
      type: String,
    },
    bgColor: {
      type: Number,
    },
  },
  {
    collection: 'column',
  }
);

const column = mongoose.model('Column', columnSchema);

module.exports = {
  column,
};
