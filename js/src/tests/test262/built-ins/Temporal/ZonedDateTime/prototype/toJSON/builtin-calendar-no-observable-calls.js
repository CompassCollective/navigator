// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.tojson
description: >
  Calling the method on an instance constructed with a builtin calendar causes
  no observable lookups or calls to calendar methods.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const idOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "id");
Object.defineProperty(Temporal.Calendar.prototype, "id", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("id should not be looked up");
  },
});

const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "iso8601");
instance.toJSON();

Object.defineProperty(Temporal.Calendar.prototype, "id", idOriginal);

reportCompare(0, 0);
