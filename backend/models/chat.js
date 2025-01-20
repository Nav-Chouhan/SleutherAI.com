const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    userId: {
      index: true,
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    lastUpdated: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  },
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
