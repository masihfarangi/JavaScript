const YearOfBirth = 1999;
let now = 2023;
const eligibleAge = 18;
if (now - YearOfBirth > eligibleAge) {
    console.log(`mark is eligble for driving license bc he is ${now - YearOfBirth}`)
}
else {
    console.log(`he can take it ${(now - YearOfBirth) - eligibleAge} years later`)
}