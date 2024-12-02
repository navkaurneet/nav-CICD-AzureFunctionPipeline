const assert = require('chai').assert;
const functionHandler = require('../index');

describe('Azure Function Tests', function () {
    it('should return Hello, World!', async function () {
        const context = { log: () => {} };
        const req = { query: {} };
        await functionHandler(context, req);

        assert.strictEqual(context.res.body, 'Hello, World!');
    });

    it('should return Hello, <name>!', async function () {
        const context = { log: () => {} };
        const req = { query: { name: 'Azure' } };
        await functionHandler(context, req);

        assert.strictEqual(context.res.body, 'Hello, Azure!');
    });
});
