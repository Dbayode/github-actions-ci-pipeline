const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("GET / returns the welcome message", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://localhost:${port}/`
        );

        const body = await response.text();

        assert.equal(response.status, 200);

        assert.equal(
            body,
            "Welcome to my GitHub Actions CI Pipeline!"
        );
    } finally {
        server.close();
    }
});

test("GET /health returns OK", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://localhost:${port}/health`
        );

        const data = await response.json();

        assert.equal(response.status, 200);
        assert.equal(data.status, "OK");
    } finally {
        server.close();
    }
});
