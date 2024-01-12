const today = new Date();

const halloween = [
  "&#128123;",
  "&#127875;",
  "&#129415;",
  "&#129503;",
  "&#129499;",
  "&#127769;",
  "&#129497;",
  "&#129498;",
];

const thanksgiving = [
  "&#129411;",
  "&#127831;",
  "&#127809;",
  "&#127810;",
  "&#128591;",
  "&#129383;",
  "&#127860;",
];

const xmas = [
  "&#127877;",
  "&#127876;",
  "&#129334;",
  "&#127873;",
  "&#129501;",
  "&#127775;",
  "&#129420;",
  "&#129371;",
  "&#127850;",
];

const newYear = [
  "&#128165;",
  "&#127878;",
  "&#127879;",
  "&#129512;",
  "&#129346;",
  "&#127867;",
  "&#127870;",
  "&#127881;",
  "&#127882;",
  "&#128588;",
  "&#129395;",
  "&#128131;",
  "&#128378;",
  "&#127880;",
];

const valentine = [
  "&#128152;",
  "&#128150;",
  "&#127801;",
  "&#128149;",
  "&#128158;",
  "&#128157;",
  "&#128140;",
  "&#128144;",
  "&#127803;",
  "&#127851;",
  "&#128139;",
];

const fourth = [
  ...newYear.slice(0, -7),
  "&#127828;",
  "&#127789;",
  "&#129363;",
  "&#127860;",
  "&#127830;",
];

function writeToHTML(emojis, extra = "") {
  for (let number = 1; number < 13; number++) {
    const emoji = emojis[number % emojis.length];
    const element = document.getElementById(`emoji${number}`);
    element.innerHTML = emoji + extra;
  }
}

function snowflakes() {
  const xmasStart = new Date(today.getFullYear(), 10, 25);
  const xmasEnd = new Date(xmasStart.getFullYear(), 11, 26);
  if (xmasStart <= today && today < xmasEnd) {
    for (let number = 1; number < 11; number++) {
      const element = document.getElementById(`flake${number}`);
      element.innerHTML = "&#x2744;";
    }
  }
}

function compareDates(d1, d2, newYr = false) {
  const currentYear = today.getFullYear();
  const date1 = new Date(currentYear + d1);
  const date2 = new Date(currentYear + d2);

  if (newYr) {
    if (today.getMonth() === 11) {
      const nextYear = new Date(currentYear + 1, 0, 14);
      return date1 <= today && today < nextYear;
    } else {
      return today <= date2;
    }
  }

  return date1 <= today && today < date2;
}

function checkHoliday() {
  const holidays = [
    {
      name: valentine,
      start: [, 2, 7],
      end: [, 2, 15],
      newyr: false,
    },
    {
      name: fourth,
      start: [, 7, 3],
      end: [, 7, 5],
      newyr: false,
    },
    {
      name: halloween,
      start: [, 10, 29],
      end: [, 11, 1],
      newyr: false,
    },
    {
      name: thanksgiving,
      start: [, 11, 1],
      end: [, 11, 25],
      newyr: false,
    },
    {
      name: xmas,
      start: [, 11, 25],
      end: [, 12, 26],
      newyr: false,
    },
    {
      name: newYear,
      start: [, 12, 29],
      end: [, 1, 7],
      newyr: true,
    },
  ];

  holidays.forEach((holiday) => {
    if (compareDates(holiday.start, holiday.end, holiday.newyr)) {
      writeToHTML(holiday.name);
    }
  });
}

checkHoliday();
snowflakes();
