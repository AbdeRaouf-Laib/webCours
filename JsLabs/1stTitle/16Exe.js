let isStudent = true;
let hasDiscount = false;
if (isStudent && hasDiscount) {
    console.log("You qualify for a student discount.");
} else if (isStudent || hasDiscount) {
    console.log("You qualify for a discount.");
} else {
    console.log("No discount available.");
}