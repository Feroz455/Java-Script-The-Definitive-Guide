let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toDateString();
console.log(timestamp);
console.log(now);
console.log(ms);
console.log(iso);
/*
Output
1664875339167
2022-10-04T09:22:19.167Z
1664875339167
Tue Oct 04 2022
*/