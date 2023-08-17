const bankName = "IDAN Bank";
const userName = "Yusuf Muhammad Najeeb";
let accountBalance = 5000;
let userPin = 1234;
// alert(`Welcome to ${bankName}.
// Your Everyday Cash Paddi💱.

// INSERT YOUR CARD TO PERFORM A TRANSACTION`);
// let inputPin = +prompt("Please enter you secret pin");
if (inputPin === userPin) {
  let process =
    +prompt(`Main menu: Please enter a corresponding number to carryout your transaction...
  1. Balance enquiry            5. Transfer
  2. Pin Change                   6. Cash Withdrawal
  3. Utility/Bill Payment       7. Fast Cash
  4. Mini Statement             8. Others`);

  switch (process) {
    case 1:
      alert(`Your account balance is ₦${accountBalance}.
      Thank YOU.`);
      break;
    case 2:
      {
        let oldPin = +prompt(`Enter old Pin`);
        let newPin = +prompt(`Enter new Pin`);
        let msg =
          oldPin === userPin
            ? alert("Successful: Your pin has been updated")
            : alert(
                "Wrong pin: You will be barred after 3 unsuccessful attempts"
              );
        userPin = newPin;
      }
      break;
    case 3:
      alert("Coming Soon");
      break;
    case 4:
      alert(`Feature Unavailable`);
      break;
    case 5:
      alert(`Feature unavailable`);
      break;
    case 6:
      let amount = +prompt(`Select Amount
      1. 500            5. 10000
      2. 1000          6. 20000
      3. 2000          7. 40000
      4. 5000          8. Others`);
      if (amount > 0) {
        switch (amount) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            alert("Please wait while your transaction is processing...");
            alert("Please take your cash");
            confirm("Do you wish to perform another transaction");
          case 8:
            let userAmount = +prompt("Enter amount");
            if (userAmount > 0 && typeof userAmount === "number") {
              alert("Please wait while your transaction is processing...");
              alert("Please take your cash ₦" + userAmount);
              confirm("Do you wish to perform another transaction");
            } else {
              alert("Invalid request");
            }
        }
      } else {
        alert("Enter a valid amount");
      }
      break;
    case 7:
      alert(`Feature unavailable`);
      break;
    case 8:
      alert(`Feature unavailable`);
      break;
    default:
      alert("Please enter a valid number....");
  }
} else {
  alert("Please Enter a Valid pin");
}
