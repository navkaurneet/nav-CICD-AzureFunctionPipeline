module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? `Hello, ${name}. This HTTP-triggered function executed successfully.`
        : "This HTTP-triggered function executed successfully.";

    context.res = {
        // HTTP status code
        status: 200,
        // Response body
        body: responseMessage
    };
};
