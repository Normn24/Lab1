"use strict";

let tabActive = document.querySelectorAll(".tabs-title");
let tabContent = document.querySelectorAll(".tabs-content li");

tabContent.forEach((item) => {
  item.style.display = "none";
})

tabActive.forEach((item) => {
  item.addEventListener('click', () => {

    tabActive.forEach((navLink) => {
      navLink.classList.remove('active');
    });
    item.classList.add('active');

    const tabName = item.getAttribute('data-tab');
    tabContent.forEach((content) => {
      content.style.display = 'none';
    });

    const tabContentActive = document.querySelector(`[data-tab-content="${tabName}"]`);
    tabContentActive.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `
  });
});



// Task 1
function displayResult() {
  const n = parseInt(document.querySelector("#input__firstElement").value);
  const k = parseInt(document.querySelector("#input__secondElement").value);
  const arrStart = [];
  const arrK = [];
  const finallArr = [];

  for (let i = 1; i <= n; i++) {
    arrStart.push(i)
  }

  for (let j = 1; j <= k; j++) {
    const randNumber = arrStart[Math.floor(Math.random() * arrStart.length)];
    arrK.push(randNumber);
    arrStart.splice(arrStart.indexOf(randNumber), 1);
  }

  const sortArrK = arrK.sort();
  for (let l = 0; l <= arrK.length; l++) {
    for (let j = l + 1; j < arrK.length; j++) {
      finallArr.push(`[${sortArrK[l]} ${sortArrK[j]}]`)
    }
  }

  const displayResult = document.querySelector(".result__task1 span");
  displayResult.innerHTML = finallArr;
}


// Task 2
function filterBy() {
  const inputFilter = document.querySelector("#input__task2").value;
  const inputType = document.querySelector("#type__input").value;
  const displayResult = document.querySelector(".result__task2 span");
  const arrayFilter = inputFilter.split(" ");
  const resultFilter = []

  arrayFilter.filter((item) => {
    if (inputType === "string") {
      if (typeof item === inputType) {
        if (!parseInt(item)) {
          resultFilter.push(item)
        }
      }
    } else if (inputType === "number") {
      if (typeof parseInt(item) === inputType) {
        if (parseInt(item)) {
          resultFilter.push(item)
        }
      }
    }
  })

  displayResult.innerHTML = resultFilter;
}


// Task 3
function lengthOfSelect() {
  const select = document.querySelector(".lengthOfPassword");
  for (let i = 1; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
}
lengthOfSelect()

function generateRandomPassword() {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const lengthOfPassword = document.querySelector(".lengthOfPassword").value;
  const resultPassword = document.querySelector(".result__task3 span");
  let password = "";

  for (let i = 0; i < lengthOfPassword; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  resultPassword.innerHTML = password;
}