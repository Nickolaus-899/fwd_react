import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "@/app/classes";

function toHex(value: number) {
  let res = "";
  let someNumber = value;
  while (someNumber > 0) {
    let numberToAdd = someNumber % 16;
    if (numberToAdd < 10) {
      res = (someNumber % 16).toString() + res;
    } else {
      let letter = String.fromCharCode(numberToAdd + 55);
      res = letter + res;
    }
    someNumber = Math.floor(someNumber / 16);
  }
  return res;
}

function fromHex(value: string) {
  return parseInt(value, 16);
}

export function encodeName(value: string, key: string) {
  let pos = 0;
  let token = "";

  for (let i = 0; i < value.length; i++) {
    let code = value.charCodeAt(i) + key.charCodeAt(pos);
    token = token + toHex(code);
    pos = pos + 1;
    if (pos === key.length) {
      pos = 0;
    }
  }
  return token;
}

export function decodeToken(token: string, key: string) {
  let pos = 0;
  let value = "";

  for (let i = 0; i < token.length; i = i + 2) {
    let code = fromHex(token[i] + token[i + 1]);

    code = code - key.charCodeAt(pos);
    value = value + String.fromCharCode(code);
    pos = pos + 1;
    if (pos === key.length) {
      pos = 0;
    }
  }
  return value;
}

export function validationInput() {
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  console.log(passwordInput.value);
  const tempVal = passwordInput.value;
  const parentNode = passwordInput.parentNode as HTMLElement;

  const existingErrorMessage = parentNode.querySelector("p");

  if (!checkPassword(tempVal)) {
    if (existingErrorMessage) {
      parentNode.removeChild(existingErrorMessage);
    }

    const errorMessageElement = document.createElement("p");
    errorMessageElement.style.fontFamily = "'Inter', sans-serif";
    errorMessageElement.style.fontSize = "12px";
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML =
      "Password should contain at least 1 special symbol, <br>" +
      "1 letter is uppercase,<br>" +
      "1 number and <br>" +
      "Minimal length is 6 chars!";

    parentNode.appendChild(errorMessageElement);
  } else {
    if (existingErrorMessage) {
      parentNode.removeChild(existingErrorMessage);
    }
  }
}

export function matchingPasswords() {
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const cpasswordInput = document.getElementById(
    "cpassword"
  ) as HTMLInputElement;
  const parentNode = cpasswordInput.parentNode as HTMLElement;

  const existingErrorMessage = parentNode.querySelector("p");
  if (existingErrorMessage) {
    parentNode.removeChild(existingErrorMessage);
  }

  if (passwordInput.value !== cpasswordInput.value) {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.style.fontFamily = "'Inter', sans-serif";
    errorMessageElement.style.fontSize = "12px";
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = "Passwords are not match";

    parentNode.appendChild(errorMessageElement);
  }
}

export function checkPassword(str: string): boolean {
  const re: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return re.test(str);
}
export function nameValidation() {
  const name = document.getElementById("name") as HTMLInputElement;
  const parentNode = name.parentNode as HTMLElement;
  const existingErrorMessage = parentNode.querySelector("p");
  if (existingErrorMessage) {
    parentNode.removeChild(existingErrorMessage);
  }
  if (name.value.length < MIN_NAME_LENGTH) {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.style.fontFamily = "'Inter', sans-serif";
    errorMessageElement.style.fontSize = "12px";
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = "Minimal length of name is 4";
    parentNode.appendChild(errorMessageElement);
  } else if (name.value.length > MAX_NAME_LENGTH) {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.style.fontFamily = "'Inter', sans-serif";
    errorMessageElement.style.fontSize = "12px";
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = "Maximal length of name is 20";
    parentNode.appendChild(errorMessageElement);
  }
}

export function checkEmail(): void {
  const email = document.getElementById("email") as HTMLInputElement;
  const parentNode = email.parentNode as HTMLElement;
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const existingErrorMessage = parentNode.querySelector("p");
  if (existingErrorMessage) {
    parentNode.removeChild(existingErrorMessage);
  }
  if (!emailRegex.test(email.value)) {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.style.fontFamily = "'Inter', sans-serif";
    errorMessageElement.style.fontSize = "12px";
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = "Invalid email";
    parentNode.appendChild(errorMessageElement);
  }
}
