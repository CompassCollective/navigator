// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.tostring
description: Empty or a function object may be used as options
features: [Temporal]
---*/

const instance = new Temporal.Duration(0, 0, 0, 0, 1);

const result1 = instance.toString({});
assert.sameValue(
  result1, "PT1H",
  "options may be an empty plain object"
);

const result2 = instance.toString(() => {});
assert.sameValue(
  result2, "PT1H",
  "options may be a function object"
);

reportCompare(0, 0);
