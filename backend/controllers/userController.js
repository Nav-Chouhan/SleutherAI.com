const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const userData = req.body;

    const user = await userService.registerUser(userData);
    if (user?.error) {
      return res.status(403).json({
        error: user.error,
      });
    }

    res.status(201).json({ user });
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

const loginUser = async (req, res) => {
  try {
    const userData = req.body;

    const user = await userService.loginUser(userData);
    if (user?.error) {
      let statusCode = 403;
      if (user.error === 'User not found') {
        statusCode = 404;
      }
      return res.status(statusCode).json({
        error: user.error,
      });
    }

    res.status(200).json({ user });
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userService.getUser(userId);
    if (user?.error) {
      return res.status(403).json({
        error: user.error,
      });
    }

    res.status(200).json({ user });
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userService.deleteUser(userId, userData);
    if (user?.error) {
      return res.status(403).json({
        error: user.error,
      });
    }

    res.status(204);
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

const sendForgetPasswordMail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userService.sendForgetPasswordMail(email);
    if (user?.error) {
      return res.status(403).json({
        error: user.error,
      });
    }

    res.status(200).json({ message: user.message });
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

const resetPassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;

    const user = await userService.resetPassword(userId, userData);
    if (user?.error) {
      return res.status(403).json({
        error: user.error,
      });
    }

    res.status(200).json({ user });
  } catch(error) {
    res.status(500).send(
      `Error: ${error}`,
    );
  }
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  resetPassword,
  sendForgetPasswordMail,
  deleteUser,
};
