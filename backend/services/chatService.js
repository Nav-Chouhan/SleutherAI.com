const Chat = require('../models/chat');
const { validateChat } = require('../validations/chatValidation');

const createChat = async (chatData) => {
  try {
    const {
      userId,
      title,
    } = chatData;

    const userDataValidation = validateChat(chatData);
    if (userDataValidation?.error) {
      return {
        error: `Error: ${userDataValidation.error}`,
      };
    }

    const newChat = new Chat({
      title,
      userId,
      lastUpdated: new Date,
    });
    await newChat.save();

    return { newChat };
  } catch (error) {
    return {
      error: error,
    };
  }
}

const updateLastUpdated = async (chatId) => {
  try {
    if (!chatId) {
      return {
        error: 'Chat Id is required',
      };
    }

    const chat = await Chat.findByIdAndUpdate(
      chatId,
      { lastUpdated: new Date() },
      { new: true },
    );

    if (!chat) {
      return {
        error: 'Chat not found',
      };
    }

    return { chat };
  } catch (error) {
    return {
      error: error,
    };
  }
}

module.exports = {
  createChat,
  updateLastUpdated,
};
