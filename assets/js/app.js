//Classes
class CalculateBudget {
  calculateBudget(amount) {
    let changeAlert = document.querySelector(".alert-dark");
    lastAmount.textContent -= amount;
    console.log(amount);
    console.log(lastAmount.textContent);
    if (firstAmount.textContent / 4 > lastAmount.textContent) {
      //   changeAlert.removeAttribute("class");
      changeAlert.setAttribute("class", "alert alert-danger");
    } else if (firstAmount.textContent / 2 > lastAmount.textContent) {
      //   changeAlert.removeAttribute("class");
      changeAlert.setAttribute("class", "alert alert-warning");
    }
  }
}
class HTMLShow {
  showBudget(value) {
    if (value !== "")
      showBudget.setAttribute("style", "display:block !important");
    else showBudget.removeAttribute("style");
    firstAmount.textContent = value;
    lastAmount.textContent = value;
  }

  validateData() {
    //get value of work

    let p = document.createElement("p"),
      insertValue = document.querySelector("#insertValue");
    p.setAttribute("class", "alert alert-danger");
    p.textContent = "لطفا مقادیر را به درستی وارد نمایید";
    insertValue.insertBefore(p, form);
    btnSubmit.disabled = true;

    //write setTimeOut
    setTimeout(() => {
      p.remove();
      btnSubmit.disabled = false;
    }, 2000);
  }
}

//Variables
let firstBudget = document.querySelector("#fAmount"),
  showBudget = document.querySelector("#showBudget"),
  firstAmount = document.querySelector("#firstAmount"),
  lastAmount = document.querySelector("#lastAmount"),
  form = document.querySelector("#form"),
  nameWork = document.querySelector("#work"),
  workAmount = document.querySelector("#price"),
  btnSubmit = document.querySelector("#btnSubmit"),
  htmlShow = new HTMLShow(),
  calculateBudget = new CalculateBudget();

//EventListeners
eventListeners();
function eventListeners() {
  //input changed
  firstBudget.addEventListener("input", (value) => {
    htmlShow.showBudget(value.target.value);
  });
  //submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameWork.value == "" || workAmount.value == "") htmlShow.validateData();
    else calculateBudget.calculateBudget(workAmount.value);
    form.reset();
  });
}
