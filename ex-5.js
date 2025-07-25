const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  return students.reduce((sum,b) => (sum + b.score),0)/ students.length
}

getAverageStudentScore(students);
console.log(getAverageStudentScore(students)) // Output: 87.5
