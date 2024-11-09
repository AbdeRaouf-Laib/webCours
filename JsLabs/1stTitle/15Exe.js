let dayOfWeek = "Tuesday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!")
        break;
    default:
        console.log("Invalidday.");
}//It's a weekday.