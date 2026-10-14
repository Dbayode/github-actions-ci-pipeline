const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my GitHub Actions CI Pipeline!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Application is running successfully"
    });
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
