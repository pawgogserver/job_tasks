const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let columnSchema = new Schema(
  {
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
