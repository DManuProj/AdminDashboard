function gradingStudents(grades) {
  // Write your code here
  let nextMultiOfFive = Math.floor(grades / 5) * 5 + 5;

  if (grades >= 38) {
    let number = nextMultiOfFive - grades;
    if (number < 3) {
      return nextMultiOfFive;
    } else {
      return grades;
    }
  } else {
    return grades;
  }
}

gradingStudents(73);
