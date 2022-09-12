import * as TC from 'testcafe';

TC.fixture`Getting Started`
    .page`http://localhost:3000`;

    TC.test('My first test', async t => {
    // Test code
});