var daily = document.getElementById("daily"),
  weakly = document.getElementById("weakly"),
  monthly = document.getElementById("monthly"),
  workHours = document.getElementById("work-hours"),
  playHours = document.getElementById("play-hours"),
  studyHours = document.getElementById("study-hours"),
  exerciseHours = document.getElementById("exercise-hours"),
  socialHours = document.getElementById("social-hours"),
  careHours = document.getElementById("care-hours"),
  Day_Weak = document.querySelectorAll(".Last");

let workTime = document.getElementById("work-time"),
  playTime = document.getElementById("play-time"),
  studyTime = document.getElementById("study-time"),
  exerciseTime = document.getElementById("exercise-time"),
  socialTime = document.getElementById("social-time"),
  careTime = document.getElementById("care-time");

const Work = {
  Daily1: {
    current: `5hrs`,
    previous: `7hrs`,
  },
  Weak: {
    current: `32hrs`,
    previous: `36hrs`,
  },
  Month: {
    current: `103hrs`,
    previous: `128hrs`,
  },
};

const Play = {
  Daily1: {
    current: `1hrs`,
    previous: `2hrs`,
  },
  Weak: {
    current: `10hrs`,
    previous: `8hrs`,
  },
  Month: {
    current: `23hrs`,
    previous: `29hrs`,
  },
};

const Study = {
  Daily1: {
    current: `0hrs`,
    previous: `1hrs`,
  },
  Weak: {
    current: `4hrs`,
    previous: `7hrs`,
  },
  Month: {
    current: `13hrs`,
    previous: `19hrs`,
  },
};

const Exe = {
  Daily1: {
    current: `1hrs`,
    previous: `1hrs`,
  },
  Weak: {
    current: `4hrs`,
    previous: `5hrs`,
  },
  Month: {
    current: `11hrs`,
    previous: `18hrs`,
  },
};

const Social = {
  Daily1: {
    current: `1hrs`,
    previous: `3hrs`,
  },
  Weak: {
    current: `5hrs`,
    previous: `10hrs`,
  },
  Month: {
    current: `21hrs`,
    previous: `23hrs`,
  },
};

const Care = {
  Daily1: {
    current: `0hrs`,
    previous: `1hrs`,
  },
  Weak: {
    current: `2hrs`,
    previous: `2hrs`,
  },
  Month: {
    current: `7hrs`,
    previous: `11hrs`,
  },
};

weakly.addEventListener("click", () => {
  daily.style.color = "#454a82";
  monthly.style.color = "#454a82";
  weakly.style.color = "white";
  Day_Weak.forEach((e) => {
    e.textContent = "Last Weak";
  });
  workHours.textContent = Work.Weak.current;
  workTime.textContent = Work.Weak.previous;
  playHours.textContent = Play.Weak.current;
  playTime.textContent = Play.Weak.previous;
  studyHours.textContent = Study.Weak.current;
  studyTime.textContent = Study.Weak.previous;
  exerciseHours.textContent = Exe.Weak.current;
  exerciseTime.textContent = Exe.Weak.previous;
  socialHours.textContent = Social.Weak.current;
  socialTime.textContent = Social.Weak.previous;
  careHours.textContent = Care.Weak.current;
  careTime.textContent = Care.Weak.previous;
});

monthly.addEventListener("click", () => {
  daily.style.color = "#454a82";
  weakly.style.color = "#454a82";
  monthly.style.color = "white";
  Day_Weak.forEach((e) => {
    e.textContent = "Last Month";
  });
  workHours.textContent = Work.Month.current;
  workTime.textContent = Work.Month.previous;
  playHours.textContent = Play.Month.current;
  playTime.textContent = Play.Month.previous;
  studyHours.textContent = Study.Month.current;
  studyTime.textContent = Study.Month.previous;
  exerciseHours.textContent = Exe.Month.current;
  exerciseTime.textContent = Exe.Month.previous;
  socialHours.textContent = Social.Month.current;
  socialTime.textContent = Social.Month.previous;
  careHours.textContent = Care.Month.current;
  careTime.textContent = Care.Month.previous;
});

daily.addEventListener("click", () => {
  daily.style.color = "white";
  weakly.style.color = "#454a82";
  monthly.style.color = "#454a82";
  Day_Weak.forEach((e) => {
    e.textContent = "Last Day";
  });
  workHours.textContent = Work.Daily1.current;
  workTime.textContent = Work.Daily1.previous;
  playHours.textContent = Play.Daily1.current;
  playTime.textContent = Play.Daily1.previous;
  studyHours.textContent = Study.Daily1.current;
  studyTime.textContent = Study.Daily1.previous;
  exerciseHours.textContent = Exe.Daily1.current;
  exerciseTime.textContent = Exe.Daily1.previous;
  socialHours.textContent = Social.Daily1.current;
  socialTime.textContent = Social.Daily1.previous;
  careHours.textContent = Care.Daily1.current;
  careTime.textContent = Care.Daily1.previous;
});
