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


const observerEtoile = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showEtoile');
    } else {
      entry.target.classList.remove('showEtoile');
    }
  });
});

const hiddenEtoileElements = document.querySelectorAll('.hiddenEtoile');
hiddenEtoileElements.forEach((elE) => observerEtoile.observe(elE));


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
