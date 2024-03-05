let generateOTP = document.getElementById("generateOTP");
let generatedOTP = document.getElementById("generatedOTP")
let user = document.getElementById("username");
user.innerHTML = "Ray User";
// let 
function otpGenerated() {
    return () => {
        let otp = Math.floor(Math.random() * 10000);
        generatedOTP.innerHTML = `Generated OTP: ${otp}`;
    };
}

generateOTP.addEventListener("click", otpGenerated());