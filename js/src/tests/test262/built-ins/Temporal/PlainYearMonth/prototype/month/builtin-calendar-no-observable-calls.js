// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.month
description: >
  Calling the method on an instance constructed with a builtin calendar causes
  no observable lookups or calls to calendar methods.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const monthOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "month");
Object.defineProperty(Temporal.Calendar.prototype, "month", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("month should not be looked up");
  },
});

const instance = new Temporal.PlainYearMonth(2000, 5, "iso8601", 1);
instance.month;

Object.defineProperty(Temporal.Calendar.prototype, "month", monthOriginal);

reportCompare(0, 0);
