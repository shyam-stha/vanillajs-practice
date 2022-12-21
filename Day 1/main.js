const button = document.querySelector("button");
const heading = document.querySelector("h3");

const setName = () => {
  const enteredName = prompt("Your name please..");

  if (!enteredName) {
    setName();
  } else {
    localStorage.setItem("name", enteredName);
    heading.textContent = `Welcome, ${enteredName}`;
  }
};

button.textContent = "click";

if (!localStorage.getItem("name")) {
  button.textContent = "Set Name";
  setName();
} else {
  const name = localStorage.getItem("name");
  heading.textContent = `Welcome, ${name}`;
  button.textContent = "Remove Name";
  button.click = ()=>{
    localStorage.removeItem("name")
  }
}
