// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getoffsetstringfor
description: Leap second is a valid ISO string for Instant
features: [Temporal]
---*/

const instance = new Temporal.TimeZone("UTC");

const arg = "2016-12-31T23:59:60Z";
const result = instance.getOffsetStringFor(arg);
assert.sameValue(
  result,
  "+00:00",
  "leap second is a valid ISO string for Instant"
);

reportCompare(0, 0);
