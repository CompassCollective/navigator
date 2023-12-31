// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.tostring
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/

const calendar = {
  dateAdd() {},
  dateFromFields() {},
  dateUntil() {},
  day() {},
  dayOfWeek() {},
  dayOfYear() {},
  daysInMonth() {},
  daysInWeek() {},
  daysInYear() {},
  fields() {},
  id: "custom",
  inLeapYear() {},
  mergeFields() {},
  month() {},
  monthCode() {},
  monthDayFromFields() {},
  monthsInYear() {},
  weekOfYear() {},
  year() {},
  yearMonthFromFields() {},
  yearOfWeek() {},
};
const date1 = new Temporal.PlainDate(2000, 5, 2);
const date2 = new Temporal.PlainDate(2000, 5, 2, calendar);

[
  [date1, "2000-05-02"],
  [date2, "2000-05-02[u-ca=custom]"],
].forEach(([date, expected]) => {
  const explicit = date.toString(undefined);
  assert.sameValue(explicit, expected, "default calendarName option is auto");

  const implicit = date.toString();
  assert.sameValue(implicit, expected, "default calendarName option is auto");
});

reportCompare(0, 0);
