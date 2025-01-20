const zod = require('zod');

const userIdSchema = zod.string().min(1, "UserId is required.");
const titleSchema = zod.string().min(1, "Title is required.");

const validateChat = (chatData) => {
  const { userId, title } = chatData;

  if (!userId || !title) {
    return {
      error: "Please fill all the required fields.",
    };
  }

  const userIdValidation = userIdSchema.safeParse(userId);
  if (!userIdValidation.success) {
    return {
      error: userIdValidation.error.errors[0].message,
    };
  }

  const titleValidation = titleSchema.safeParse(title);
  if (!titleValidation.success) {
    return {
      error: titleValidation.error.errors[0].message,
    };
  }

  return {
    success: true,
    message: "Validation successful!",
  };
};

module.exports = {
  validateChat,
};
