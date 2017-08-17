
var message = '';
var student;
var search;

function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message;
}

function getStudentReport (student) {
  var report = "<h2>Student: " + student.name + "</h2>";
  report += "<p>Track: " + student.track + "</p>";
  report += "<p>Achievements: " + student.achievements + "</p>";
  report += "<p>Points: " + student.points + "</p>";
  return report;
}
//get student name print data
while (true) {
  search = prompt('Search student records: type a name [Genesis] or type "quit" to end.');
  //to end program
  if( search === null || search.toLowerCase() === 'quit'){
  //ends the loop
    break;
  }
  for ( var i = 0; i < students.length;  i += 1) {
  student = students[i];
    if(student.name === search) {
    message = getStudentReport(student);
      print(message);
    }
  }
}
