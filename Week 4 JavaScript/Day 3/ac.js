// alert(message)
// Alert has one button: (OK) - CREATES A BROWSER POP UP BOX
/* alert("Alert Button: Click ok to Proceed"); */

//confrim(message)
// has two buttons: (OK and cancel)

     /* confirm("click the cancel button"); */

// if else with confirm  - WHILE LOOP

let confirmMsg = "";

if (confirm("click ok to continue")) {
    confirmMsg = "You pressed ok"
} else {
    confirmMsg = "You pressed cancel"
};
document.write(confirmMsg);