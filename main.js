const form = document.querySelector("form");


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    const password1 = document.getElementById("password");
    const password2 = document.getElementById("confirm-password");
    let inputsArr = Array.from(inputs);
    console.log(inputs);
    inputsArr.forEach((input) => {
        if (input.value === "" && input.getAttribute("data-invalid") === "false"){
            input.setAttribute("data-invalid", true);
            const errorMsg = document.createElement("span");
            errorMsg.textContent = "Input field required";
            errorMsg.classList.add("error");
            input.insertAdjacentElement("afterend", errorMsg)
        }
    });
    if(password1.value !== password2.value && !password1.getAttribute("data-password-notmatched")){
        password1.nextElementSibling?.remove();
        password2.nextElementSibling?.remove();
        password1.setAttribute("data-password-notmatched", true);
        password2.setAttribute("data-password-notmatched", true);
        const errorMsg1 = document.createElement("span");
        const errorMsg2 = document.createElement("span");
        errorMsg1.textContent = "Password not matching";
        errorMsg2.textContent = "Password not matching";
        errorMsg1.classList.add("error");
        errorMsg2.classList.add("error");
        password1.insertAdjacentElement("afterend", errorMsg1);
        password2.insertAdjacentElement("afterend", errorMsg2);
    }
});