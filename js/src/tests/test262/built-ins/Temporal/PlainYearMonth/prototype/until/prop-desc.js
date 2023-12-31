// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.until
description: The "until" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.until,
  "function",
  "`typeof PlainYearMonth.prototype.until` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "until", {
  writable: true,
  enumerable: false,
  configurable: true,
});

reportCompare(0, 0);
