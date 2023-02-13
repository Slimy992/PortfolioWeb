const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerFast = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showFast');
    } else {
      entry.target.classList.remove('showFast');
    }
  });
});

const hiddenFastElements = document.querySelectorAll('.hiddenFast');
hiddenFastElements.forEach((elF) => observerFast.observe(elF));

const observerSlow = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showSlow');
    } else {
      entry.target.classList.remove('showSlow');
    }
  });
});

const hiddenSlowElements = document.querySelectorAll('.hiddenSlow');
hiddenSlowElements.forEach((elS) => observerSlow.observe(elS));


const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showLeft');
    } else {
      entry.target.classList.remove('showLeft');
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
hiddenLeftElements.forEach((elL) => observerLeft.observe(elL));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showRight');
    } else {
      entry.target.classList.remove('showRight');
    }
  });
});

const hiddenRightElements = document.querySelectorAll('.hiddenRight');
hiddenRightElements.forEach((elR) => observerRight.observe(elR));


const observerDrop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showDrop');
    } else {
      entry.target.classList.remove('showDrop');
    }
  });
});

const hiddenDropElements = document.querySelectorAll('.hiddenDrop');
hiddenDropElements.forEach((elD) => observerDrop.observe(elD));
