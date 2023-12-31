// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: A number is converted to a string, then to Temporal.PlainYearMonth
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2019, 6);

const arg = 201906;

const result = instance.since(arg);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "201906 is a valid ISO string for PlainYearMonth");

const numbers = [
  1,
  -201906,
  1234567,
];

for (const arg of numbers) {
  assert.throws(
    RangeError,
    () => instance.since(arg),
    `Number ${arg} does not convert to a valid ISO string for PlainYearMonth`
  );
}

reportCompare(0, 0);
