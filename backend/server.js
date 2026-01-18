const express = require("express");
const cors = require("cors");

const {
  validateContact,
  validateApply,
} = require("./middleware/validate");

const app = express();
app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Contact API + middleware
app.post("/api/contact", validateContact, (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 Contact Form:");
  console.log("Name:", name);
console.log("Mail:", email);
console.log("Msg:", message);


  res.json({
    success: true,
    message: "Contact form received successfully",
  });
});

// Job Apply API + middleware
app.post("/api/apply", validateApply, (req, res) => {
  const { role } = req.body;

  console.log("🧑‍💻 Job Applied:", role);

  res.json({
    success: true,
    message: `Applied successfully for ${role}`,
  });
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
