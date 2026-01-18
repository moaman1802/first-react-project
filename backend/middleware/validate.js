// Contact form validation
const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All contact fields are required",
    });
  }

  next(); // request aage bhejo
};

// Job apply validation
const validateApply = (req, res, next) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({
      success: false,
      message: "Job role is required",
    });
  }

  next();
};

module.exports = {
  validateContact,
  validateApply,
};
