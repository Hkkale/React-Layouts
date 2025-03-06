let inputEl = document.querySelector("#password");
let showEl = document.querySelector(".fa-eye");
let hideEl= document.querySelector(".fa-eye-slash");
showEl.addEventListener("click", () => {
inputEl.type = "text";
hideEl.classList.remove("hide");
showEl.classList.add("hide");
})
hideEl.addEventListener("click", () => {
inputEl.type = "password";
hideEl.classList.add("hide");
showEl.classList.remove("hide");
})




// function formHandler(e){
//     e.preventDefault();
//     const emailInput = document.getElementById("email");
//     const passwordInput = document.getElementById("password");

//     let isValid = true;
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (email === "") {
//         showError(emailInput, "Email is required");
//         isValid = false;
//     } else if (!isValidEmail(email)) {
//         showError(emailInput, "Enter a valid email");
//         isValid = false;
//     } else {
//         clearError(emailInput);
//     }
    

//     if (password === "") {
//         showError(passwordInput, "Password is required");
//         isValid = false;
//     } else if (password.length < 6) {
//         showError(passwordInput, "Password must be at least 6 characters");
//         isValid = false;
//     } else {
//         clearError(passwordInput);
//     }



//     if (isValid) { 
   
    
//     console.log("email: " + email + " password: " + password);
//     alert("email: " + email + " password: " + password);
//     window.location.href = "./src/pages/home.html";
//     }   

// }



//   function isValidEmail(email) {
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   }

//   function showError(input, message) {
//       clearError(input);
//       const errorElement = document.createElement("small");
//       errorElement.className = "error-message text-red-500 text-sm";
//       errorElement.innerText = message;
//       input.classList.add("border", "border-red-500");
//       input.parentElement.appendChild(errorElement);
//   }

//   function clearError(input) {
//       input.classList.remove("border", "border-red-500");
//       const errorElement = input.parentElement.querySelector(".error-message");
//       if (errorElement) {
//           errorElement.remove();
//       }
//   }


function formHandler(e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    let isValid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError(emailInput, "Enter a valid email");
        isValid = false;
    } else {
        clearError(emailInput);
    }

    if (password === "") {
        showError(passwordInput, "Password is required");
        isValid = false;
    } else if (password.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    if (isValid) {
        console.log("email: " + email + " password: " + password);
        alert("email: " + email + " password: " + password);
        window.location.href = "./src/pages/home.html";
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    clearError(input);
    const errorElement = document.createElement("small");
    errorElement.className = "error-message text-red-500 text-sm";
    errorElement.innerText = message;
   
    
    const grandparent = input.parentElement.parentElement;
    grandparent.appendChild(errorElement);
}

function clearError(input) {
    
    const grandparent = input.parentElement.parentElement;
    const errorElement = grandparent.querySelector(".error-message");
    if (errorElement) {
        errorElement.remove();
    }
}
