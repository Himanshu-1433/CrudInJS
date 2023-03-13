let Fname = document.getElementById("Fname");
let EmailAdd = document.getElementById("EmailAdd");
let Pnumber = document.getElementById("Pnumber");
let date = document.getElementById("date");
let time = document.getElementById("time");
let colorInput = document.getElementById("colorInput");
let Payment = document.getElementsByName("payment");
let Age = document.getElementById("Age");
let termsAcondition = document.getElementById("termsAcondition");
let iconOfAge = document.getElementById("iconOfAge");
let span = document.getElementsByTagName("span");
let submit = document.getElementById("submit");
let table = document.getElementById("table");
let FileInput = document.getElementById("FileInput");
document.getElementById("msgError").style.display = "none";
function ageChecker(val) {
  iconOfAge.innerHTML = val;
  ageC();
}
let EmailValidation =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let check = 1;
function NameChecker() {
  if (Fname.value == "" || !Fname.value.match(/^[A-Za-z]+$/)) {
    document.getElementById("errorMsgName").innerHTML = "Enter valid Name";
    return false;
  } else {
    document.getElementById("errorMsgName").innerHTML = "";
    return true;
  }
}
function EmailChecker() {
  if (EmailAdd.value == "" || !EmailAdd.value.match(EmailValidation)) {
    document.getElementById("errorMsgEmail").innerHTML = "Enter valid Email";
    return false;
  } else {
    document.getElementById("errorMsgEmail").innerHTML = " ";
    return true;
  }
}
function NumberChecker() {
  if (Pnumber.value == "" || !Pnumber.value.match(/^[0-9]+$/)) {
    document.getElementById("errorMsgNumber").innerHTML = "Enter valid Number";
    return false;
  } else {
    document.getElementById("errorMsgNumber").innerHTML = " ";
    return true;
  }
}
function DateChecker() {
  if (date.value == "") {
    document.getElementById("errorMsgDate").innerHTML = "Enter valid Date";
    return false;
  } else {
    document.getElementById("errorMsgDate").innerHTML = " ";
    return true;
  }
}
function TimeChecker() {
  if (time.value == "") {
    document.getElementById("errorMsgTime").innerHTML = "Enter valid time";
    return false;
  } else {
    document.getElementById("errorMsgTime").innerHTML = " ";
    return true;
  }
}

function ColorChecker() {
  if (colorInput.value == "choose") {
    document.getElementById("errorMsgColor").innerHTML = "Choose Color";
    return false;
  } else {
    document.getElementById("errorMsgColor").innerHTML = " ";
    return true;
  }
}
let PaymentMethodType = "";
function PaymentChecker() {
  let Pay = 0;
  if (document.getElementById("Cash").checked) {
    document.getElementById("errorMsgPayment").innerHTML = "";
    Pay = 0;
    PaymentMethodType = "Cash";
    return true;
  } else if (document.getElementById("Card").checked) {
    document.getElementById("errorMsgPayment").innerHTML = "";
    Pay = 0;
    PaymentMethodType = "Card";
    return true;
  } else if (document.getElementById("UPI").checked) {
    document.getElementById("errorMsgPayment").innerHTML = "";
    Pay = 0;
    PaymentMethodType = "UPI";
    return true;
  } else if (Pay == 0) {
    document.getElementById("errorMsgPayment").innerHTML =
      "Please select one of the above method";
    return false;
  }
}

function ageC() {
  if (Age.value == 0) {
    document.getElementById("errorMsgAge").innerHTML = "Please enter Your Age";
    return false;
  } else {
    document.getElementById("errorMsgAge").innerHTML = "";
    return true;
  }
}

function FileChecker() {
  if (FileInput.value == "") {
    document.getElementById("errorMsgFile").innerHTML = "Please Choose File";
    return false;
  } else {
    document.getElementById("errorMsgFile").innerHTML = "";
    return true;
  }
}
function checkBox() {
  if (termsAcondition.checked == false) {
    document.getElementById("errorMsgTerms").innerHTML =
      "Please check This box";
    return false;
  } else {
    document.getElementById("errorMsgTerms").innerHTML = "";
    return true;
  }
}

function checker() {
  if (
    NameChecker() &&
    EmailChecker() &&
    NumberChecker() &&
    DateChecker() &&
    TimeChecker() &&
    ColorChecker() &&
    PaymentChecker() &&
    ageC() &&
    FileChecker() &&
    checkBox()
  ) {
    return true;
  } else {
    return false;
  }
}

let idOfUpdate = "NoSet";
submit.addEventListener("click", () => {
  if (checker()) {
    let dataForm = {
      0: Fname.value,
      1: EmailAdd.value,
      2: Pnumber.value,
      3: date.value,
      4: time.value,
      5: colorInput.value,
      6: PaymentMethodType,
      7: Age.value,
      8: FileInput.value,
      9: "checked",
    };
    console.log(idOfUpdate);
    if (idOfUpdate == "NoSet") {
      let data = JSON.parse(localStorage.getItem("data"));
      if (data == null) {
        let arr = [dataForm];
        localStorage.setItem("data", JSON.stringify(arr));
        document.getElementById("msg").innerHTML = "Item are Added";
        window.location.reload();
      } else {
        console.log("Added");
        document.getElementById("msgError").style.display = "none";
        data.push(dataForm);
        localStorage.setItem("data", JSON.stringify(data));
        document.getElementById("msg").innerHTML = "Item are Added";
        window.location.reload();
      }
    }
    if (idOfUpdate != "NoSet") {
      let arr = JSON.parse(localStorage.getItem("data"));
      arr[idOfUpdate] = dataForm;
      localStorage.setItem("data" , JSON.stringify(arr));
      window.location.reload();
      console.log("fire");
    }
  } else {
    document.getElementById("msgError").style.display = "block";
  }
});
function selectData() {
  let arr = JSON.parse(localStorage.getItem("data"));
  if (arr != null) {
    for (let x = 0; x < arr.length; x++) {
      let row = document.createElement("tr");
      row.classList.add("row");
      for (let y = 0; y <= 10; y++) {
        if (y < 10) {
          let col = document.createElement("td");
          col.classList.add("col-1");
          col.innerHTML = arr[x][y];
          row.appendChild(col);
        }
        if (y == 9) {
          let col = document.createElement("td");
          col.innerHTML =
            '<button href="javascript:void(0)" class="btn btn-warning" onclick="editData(' +
            x +
            ')"><i class="fa-solid fa-pen-to-square"></i></button>';
          col.classList.add("col-1");
          row.appendChild(col);
        }
        if (y == 10) {
          let col = document.createElement("td");
          col.innerHTML =
            '<button href="javascript:void(0)" class="btn btn-danger" onclick="deleteData(' +
            x +
            ')"><i class="fa-solid fa-trash"></i></button>';
          col.classList.add("col-1");
          0;
          row.appendChild(col);
        }
      }
      table.appendChild(row);
    }
  } else {
    console.log("null");
  }
}

selectData();

function deleteData(id) {
  let data = JSON.parse(localStorage.getItem("data"));
  data.splice(id, 1);
  console.log("deleted");
  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
  console.log(data[id]);
}
function editData(id) {
  idOfUpdate = id;
  let data = JSON.parse(localStorage.getItem("data"));
  let modalOfForm = document.getElementById("exampleModalLong");
  modalOfForm.classList.add("show");
  modalOfForm.style.display = "block";
  modalOfForm.style.background = "rgb(104 24 14 / 28%)";
  modalOfForm.style.overflow = "auto";
  Fname.value = data[id][0];
  EmailAdd.value = data[id][1];
  Pnumber.value = data[id][2];
  date.value = data[id][3];
  time.value = data[id][4];
  colorInput.value = data[id][5];
  Payment.value = data[id][6];
  Age.value = data[id][7];
  termsAcondition.value = data[id][9];
  FileInput.value = data[id][8];
  console.log(data);
}

// let Fname = document.getElementById("Fname");
// let EmailAdd = document.getElementById("EmailAdd");
// let Pnumber = document.getElementById("Pnumber");
// let date = document.getElementById("date");
// let time = document.getElementById("time");
// let colorInput = document.getElementById("colorInput");
// let Payment = document.getElementsByName("payment");
// let Age = document.getElementById("Age");
// let termsAcondition = document.getElementById("termsAcondition");
// let iconOfAge = document.getElementById("iconOfAge");
// let span = document.getElementsByTagName("span");
// let submit = document.getElementById("submit");
// let table = document.getElementById("table");
// let FileInput = document.getElementById("FileInput");
