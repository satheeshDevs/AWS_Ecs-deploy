const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from ECS!"
  });
});

app.get("/api/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "David" }
    ]
  });
});

const PORT = process.env.PORT || 5000;

// Start server only when running this file directly
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export Express app for testing
module.exports = app;