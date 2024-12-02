const { expect } = require('chai');
const httpFunction = require('../HttpTriggerFunction/index');

describe('HTTP Trigger Function', () => {
    it('should return a personalized greeting when name is provided', async () => {
        const context = { log: () => {} };
        const req = { query: { name: 'NAVNEET' } };

        await httpFunction(context, req);

        expect(context.res.status).to.equal(200);
        expect(context.res.body).to.equal('Hello, NAVNEET. This HTTP-triggered function executed successfully.');
    });

    it('should return a default greeting when name is not provided', async () => {
        const context = { log: () => {} };
        const req = { query: {} };

        await httpFunction(context, req);

        expect(context.res.status).to.equal(200);
        expect(context.res.body).to.equal('This HTTP-triggered function executed successfully.');
    });
});
