const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      index: true,
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    chatId: {
      index: true,
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
    },
    prompt: {
      type: String,
      required: true,
    },
    response: [{
      type: String,
    }],
    reaction: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
