---
title: Date and Time in JavaScript
date: 2021/2/30
tag: javascript
description: ISO 8601 is an International Standard for the representation of dates and times
---

# Date and Time in JavaScript

Below are widely used date/time standards/systems(ways of tracking time).

- [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (Coordinated Universal Time)
- [ISO format](https://en.wikipedia.org/wiki/ISO_8601)
- [Unix/Epoch Time](https://en.wikipedia.org/wiki/Unix_time)

Greenwich Mean Time (GMT) is often interchanged or confused with Coordinated Universal Time (UTC). But GMT is a time zone and UTC is a time standard.

In JavaScript's Date object, the time value is `UTC`.

```js
new Date(); // Thu Jul 07 2021 18:51:31 GMT+0530 (India Standard Time)
```

A JavaScript date is specified as the number of `milliseconds` that have elapsed since midnight on January 1, 1970, UTC.

```js
new Date().getTime(); // 1625750552245
// OR
Date.now(); // 1625750552245
```

This date and time are not the same as the UNIX epoch. In UNIX epoch date is specified as the number of `seconds` that have elapsed since midnight on January 1, 1970, UTC)

Also we have to consider [Time zones and time offsets](https://en.wikipedia.org/wiki/UTC_offset)

To understand date parts like `GMT+0530` from above date, keep reading below

## ISO 8601

### Why to choose ISO 8601

The International Standard for the representation of dates and times is ISO 8601.

The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.

### ISO 8601 date format breakdown/parts

Let's take example of date/time in ISO 8601 standard. To get date in ISO, try `new Date().toISOString()`

```
new Date().toISOString(); // "2021-07-07T07:20:04.633Z"
```

Here is format

```js
// Complete date plus hours, minutes and seconds
YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)
```

```js
// Complete date plus hours, minutes, seconds
// and a decimal fraction of a second
YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)
```

In above example

- The `T` in the middle separates the year-month-day portion from the hour-minute-second portion.
- The `Z` on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced "Zulu" per military/aviation tradition.

where:

- YYYY = four-digit year
- MM = two-digit month (01=January, etc.)
- DD = two-digit day of month (01 through 31)
- hh = two digits of hour (00 through 23) (am/pm NOT allowed)
- mm = two digits of minute (00 through 59)
- ss = two digits of second (00 through 59)
- s = one or more digits representing a decimal fraction of a second
- TZD = time zone designator (Z or +hh:mm or -hh:mm)

This profile defines two ways of handling time zone offsets:

Times are expressed in UTC (Coordinated Universal Time), with a special UTC designator ("Z").

- Times are expressed in local time, together with a time zone offset in hours and minutes. A time zone offset of "+hh:mm" indicates that the date/time uses a local time zone which is "hh" hours and "mm" minutes ahead of UTC.
- A time zone offset of "-hh:mm" indicates that the date/time uses a local time zone which is "hh" hours and "mm" minutes behind UTC.

## date/time conversions

So finally, with JavaScript's `Date` object we can covert our local(host machine) date/time in any standard like ISO, UTC etc

like

```js
new Date().toLocaleString(); // "07/07/2021, 18:48:39"

new Date().toISOString(); // "2021-07-07T07:20:04.633Z"

new Date().toUTCString(); // "Wed, 07 Jul 2021 07:19:56 GMT"

new Date().toGMTString(); // "Wed, 07 Jul 2021 07:19:40 GMT"
```

For more details you can play with `new Date()` in console.

Thanks!

## References

- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
