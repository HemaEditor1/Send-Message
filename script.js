// Write Year On Footer
let myFooter = document.querySelector(".footerWhats");
let yearParagraph = document.createElement("h3");

yearParagraph.textContent = `Copyright © ${new Date().getFullYear()}`;
myFooter.appendChild(yearParagraph);

let myFooterTele = document.querySelector(".footerTele");
let yearParagraph2 = document.createElement("h3");

yearParagraph2.textContent = `Copyright © ${new Date().getFullYear()}`;
myFooterTele.appendChild(yearParagraph2);

// ----------------------------------------------------------

let whatsSec = document.querySelector(".bodyWhats");
let teleSec = document.querySelector(".bodyTele");

let whats = document.querySelectorAll(".whats");
let tele = document.querySelectorAll(".tele");

let inPt = document.querySelectorAll(".numInput");

let spmtWats = document.querySelector(".numSubmit");
let spmtTele = document.querySelector(".numSubmitTele");

// WhatsApp Btn 1
whats[0].onclick = function () {
  closeAlert();
  whatsSec.classList.replace("deactive", "active");
  teleSec.classList.replace("active", "deactive");
  inPt[0].focus();
};

// Telegram Btn 1
tele[0].onclick = function () {
  inPt[0].value = "";
  closeAlert();
  whatsSec.classList.replace("active", "deactive");
  teleSec.classList.replace("deactive", "active");
  inPt[1].focus();
};

// WhatsApp Btn 2
whats[1].onclick = function () {
  inPt[1].value = "";
  closeAlert();
  whatsSec.classList.replace("deactive", "active");
  teleSec.classList.replace("active", "deactive");
  inPt[0].focus();
};

// Telegram Btn 2
tele[1].onclick = function () {
  closeAlert();
  whatsSec.classList.replace("active", "deactive");
  teleSec.classList.replace("deactive", "active");
  inPt[1].focus();
};

// ------------------------------------------------------------------

// No Phone Number Function
function typeNums() {
  let alertBox = document.querySelector(".alert-content");
  alertBox.innerHTML = "";
  let pargraph1 = document.createElement("p");
  let pargraph2 = document.createElement("p");
  let pargraphBig = document.createElement("h2");
  let createBtn = document.createElement("button");
  pargraphBig.textContent = "Write Phone Number!";
  pargraph1.textContent = `انت مكتبتش رقم`;
  pargraph2.textContent = `اتأكد انك كاتب 11 رقم بالظبط`;
  createBtn.textContent = "Ok";
  alertBox.appendChild(pargraphBig);
  alertBox.appendChild(pargraph1);
  alertBox.appendChild(pargraph2);
  alertBox.appendChild(createBtn);

  createBtn.onclick = () => closeAlert();
}

// ------------------------------------------------------------------

// WhatsApp Input
inPt[0].addEventListener("change", function () {
  let phoneNum = inPt[0].value;

  if (phoneNum.length !== 11) {
    console.log("Please Write 11 Nums");
    showAlert();
    numberOfNums();
  }

  function numberOfNums() {
    let alertBox = document.querySelector(".alert-content");
    alertBox.innerHTML = "";
    let pargraph1 = document.createElement("p");
    let pargraph2 = document.createElement("p");
    let pargraphBig = document.createElement("h2");
    let createBtn = document.createElement("button");
    pargraphBig.textContent = "Invalid Phone Number!";
    pargraph1.textContent = `انت كتبت ${phoneNum.length} ارقام بس`;
    pargraph2.textContent = `اتأكد انك كاتب 11 رقم بالظبط`;
    createBtn.textContent = "Ok";
    alertBox.appendChild(pargraphBig);
    alertBox.appendChild(pargraph1);
    alertBox.appendChild(pargraph2);
    alertBox.appendChild(createBtn);

    createBtn.onclick = () => closeAlert();
  }
});

inPt[0].addEventListener("input", function () {
  let phoneNum = inPt[0].value;

  // World Wide Phone Number
  if (phoneNum.slice(0, 1) !== "0") {
    if (phoneNum.length === 12) {
      window.location.href = `https://wa.me/${phoneNum}`;
      inPt[0].value = "";
    }
  } else {
    // Egyption Phone Number
    if (phoneNum.length === 11) {
      window.location.href = `https://wa.me/2${phoneNum}`;
      inPt[0].value = "";
    }
  }
});

inPt[0].addEventListener("blur", function () {
  if (inPt[0] === "") {
    closeAlert();
  } else if (inPt[0].length !== 11) {
    closeAlert();
  }
});

spmtWats.onclick = function () {
  if (inPt[0].value === "") {
    typeNums();
    showAlert();
  } else if (inPt[0].length !== 11) {
    showAlert();
  }
};

// ------------------------------------------------------------------

// Telegram Input
inPt[1].addEventListener("change", function () {
  let phoneNum = inPt[1].value;

  if (phoneNum.length !== 11) {
    console.log("Please Write 11 Nums");
    showAlert();
    numberOfNums();
  }

  function numberOfNums() {
    let alertBox = document.querySelector(".alert-content");
    alertBox.innerHTML = "";
    let pargraph1 = document.createElement("p");
    let pargraph2 = document.createElement("p");
    let pargraphBig = document.createElement("h2");
    let createBtn = document.createElement("button");
    pargraphBig.textContent = "Invalid Phone Number!";
    pargraph1.textContent = `انت كتبت ${phoneNum.length} ارقام بس`;
    pargraph2.textContent = `اتأكد انك كاتب 11 رقم بالظبط`;
    createBtn.textContent = "Ok";
    alertBox.appendChild(pargraphBig);
    alertBox.appendChild(pargraph1);
    alertBox.appendChild(pargraph2);
    alertBox.appendChild(createBtn);

    createBtn.onclick = () => closeAlert();
  }
});

inPt[1].addEventListener("input", function () {
  let phoneNum = inPt[1].value;

  if (phoneNum.length === 11) {
    window.location.href = `https://t.me/+2${phoneNum}`;
    inPt[1].value = "";
  }
});

inPt[1].addEventListener("blur", function () {
  if (inPt[1] === "") {
    closeAlert();
  } else if (inPt[1].length !== 11) {
    closeAlert();
  }
});

spmtTele.onclick = function () {
  if (inPt[1].value === "") {
    typeNums();
    showAlert();
  } else if (inPt[1].length !== 11) {
    showAlert();
  }
};

// ---------------------------------------------- Alert

function showAlert() {
  document.getElementById("custom-alert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

function closeAlertOnOutsideClick(event) {
  // if clicked out of the Alert Box
  const alertContent = document.querySelector(".alert-content");
  if (!alertContent.contains(event.target)) {
    closeAlert();
  }
}
