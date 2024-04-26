//          100 days of coding challenge ( DAY 39 )

// Question 01  
// --Use a switch statement to log the days of the week based on a number (1-7)
function logDayOfWeek(dayNumber: any) {
  switch (dayNumber) { 
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
        default:
          console.log("Invalid day number");
          break;

  }
}
logDayOfWeek(5);
// Question 02
// --This function logs the season based on the month
function logSeason(month: number): void {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

logSeason(4); // Outputs: Spring
logSeason(10); // Outputs: Fall
// Question 03 
// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade: string) {
  switch (grade) {
      case "A":
          console.log("Excellent");
          break;
      case "B":
          console.log("Good");
          break;
      case "C":
          console.log("Fair");
          break;
      case "D":
          console.log("Poor");
          break;
      case "F":
          console.log("Fail");
          break;
      default:
          console.log("Invalid grade");
          break;
  }
}
evaluateGrade("B"); // Outputs: Good
evaluateGrade("F"); // Outputs: Fail
