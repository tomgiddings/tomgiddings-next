import * as TC from 'testcafe';
import { testcafeAudit } from 'testcafe-lighthouse';

// Test: Accessibility

fixture`Lighthouse`.page`http://localhost:3000`;

test('Lighthouse accessibility audit', async (t) => {
  await testcafeAudit({
    url: 'http://localhost:3000',
    thresholds: {
      accessibility: 100,
    },
    cdpPort: 9222,
  });
});

// Test: Terminal greetings based on time of day

fixture`Good morning`.clientScripts([
  { module: 'mockdate' },
  { content: "MockDate.set('2022-11-22 11:22:33 AM')" },
]).page`http://localhost:3000`;

test('Good morning greeting appears in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .contains('Good morning', 'contains good morning');
});

test('Good afternoon does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good afternoon', 'does not contain good afternoon');
});

test('Good evening does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good evening', 'does not contain good evening');
});

fixture`Good afternoon`.clientScripts([
  { module: 'mockdate' },
  { content: "MockDate.set('2022-11-22 1:22:33 PM')" },
]).page`http://localhost:3000`;

test('Good afternoon greeting appears in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .contains('Good afternoon', 'contains good afternoon');
});

test('Good morning does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good morning', 'does not contain good morning');
});

test('Good evening does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good evening', 'does not contain good evening');
});

fixture`Good evening`.clientScripts([
  { module: 'mockdate' },
  { content: "MockDate.set('2022-11-22 8:22:33 PM')" },
]).page`http://localhost:3000`;

test('Good evening greeting appears in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .contains('Good evening', 'contains good evening');
});

test('Good morning does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good morning', 'does not contain good morning');
});

test('Good afternoon does not appear in terminal', async (t) => {
  const greeting = await TC.Selector('#greeting');
  await t
    .expect(greeting.innerText)
    .notContains('Good afternoon', 'does not contain good afternoon');
});
