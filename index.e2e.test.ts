import * as TC from 'testcafe';

TC.fixture`Getting Started`
    .page`http://0.0.0.0:3000`;

    TC.test('My first test', async t => {
    // Test code
});