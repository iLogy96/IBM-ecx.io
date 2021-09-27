const allInputsChecked = () => {
  usernameCheck();
  passwordCheck();
  retypeCheck();
  emailCheck();
};
const form = document.querySelector(".form");

let x = document.querySelector(".toast");
function toast() {
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.toggle("show");
  }, 3000);
}

const usernameCheck = () => {
  const nameInput = document.querySelector(".username");
  nameInput.addEventListener("keyup", (event) => {
    let nameInputValue = event.target.value;
    if (nameInputValue.length > 8) {
      nameInput.classList.remove("is--wrong");
      nameInput.classList.add("is--right");
      x.innerHTML = "Entered Succesfully";
      toast();
    } else if (nameInputValue === "") {
      nameInput.classList.remove("is--wrong");
      nameInput.classList.remove("is--right");
    } else {
      nameInput.classList.remove("is--right");
      nameInput.classList.add("is--wrong");
      x.innerHTML = "Try Again!";
      toast();
    }
  });
};

const passwordCheck = () => {
  const passwordInput = document.querySelector(".password");
  passwordInput.addEventListener("keyup", () => {
    const passwordInputValue = passwordInput.value;
    console.log(passwordInputValue);
    const password =
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
    if (passwordInputValue.match(password) && passwordInputValue.length >= 12) {
      passwordInput.classList.remove("is--wrong");
      passwordInput.classList.add("is--right");
    } else if (passwordInputValue === "") {
      passwordInput.classList.remove("is--wrong");
      passwordInput.classList.remove("is--right");
    } else {
      passwordInput.classList.remove("is--right");
      passwordInput.classList.add("is--wrong");
    }
  });
};

const retypeCheck = () => {
  const retypeInput = document.querySelector(".retype");
  retypeInput.addEventListener("keyup", () => {
    const passwordInputValue = document.querySelector(".password").value;
    const retypeInputValue = retypeInput.value;
    if (retypeInputValue == passwordInputValue) {
      retypeInput.classList.remove("is--wrong");
      retypeInput.classList.add("is--right");
    }
    if (retypeInputValue === "") {
      retypeInput.classList.remove("is--wrong");
      retypeInput.classList.remove("is--right");
    } else {
      retypeInput.classList.remove("is--right");
      retypeInput.classList.add("is--wrong");
    }
  });
};

const emailCheck = () => {
  const emailInput = document.querySelector(".email");
  emailInput.addEventListener("keyup", () => {
    const emailInputValue = emailInput.value;
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInputValue.match(email)) {
      emailInput.classList.remove("is--wrong");
      emailInput.classList.add("is--right");
    } else if (emailInputValue === "") {
      emailInput.classList.remove("is--wrong");
      emailInput.classList.remove("is--right");
    } else {
      emailInput.classList.remove("is--right");
      emailInput.classList.add("is--wrong");
    }
  });
};

allInputsChecked();
