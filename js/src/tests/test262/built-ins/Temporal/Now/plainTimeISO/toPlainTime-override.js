// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.plaintimeiso
description: PlainDateTime.toPlainTime is not observably called
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const actual = [];
const expected = [
  "has timeZone.getOffsetNanosecondsFor",
  "has timeZone.getPossibleInstantsFor",
  "has timeZone.id",
  "get timeZone.getOffsetNanosecondsFor",
  "call timeZone.getOffsetNanosecondsFor",
];

Object.defineProperty(Temporal.PlainDateTime.prototype, "toPlainTime", {
  get() {
    actual.push("get Temporal.PlainDateTime.prototype.toPlainTime");
    return function() {
      actual.push("call Temporal.PlainDateTime.prototype.toPlainTime");
    };
  },
});

const timeZone = TemporalHelpers.timeZoneObserver(actual, "timeZone", {
  getOffsetNanosecondsFor(instant) {
    assert.sameValue(instant instanceof Temporal.Instant, true, "Instant");
    return -Number(instant.epochNanoseconds % 86400_000_000_000n);
  },
});

const result = Temporal.Now.plainTimeISO(timeZone);
assert.sameValue(result instanceof Temporal.PlainTime, true);
for (const property of ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"]) {
  assert.sameValue(result[property], 0, property);
}

assert.compareArray(actual, expected);

reportCompare(0, 0);
