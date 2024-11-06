// Add event listener to handle form submission
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    
    // Get the marks from the input fields
    var mathMarks = parseInt(document.getElementById('math').value);
    var scienceMarks = parseInt(document.getElementById('science').value);
    var englishMarks = parseInt(document.getElementById('english').value);
    var socialMarks = parseInt(document.getElementById('social').value);

    
    // Calculate the average grade
    var totalMarks = mathMarks + scienceMarks + englishMarks + socialMarks;
    var average = totalMarks / 4;
    
    // Determine grade based on average
    var grade = '';
    if (average >= 90) {
      grade = 'A+';
    } else if (average >= 80) {
      grade = 'A';
    } else if (average >= 70) {
      grade = 'B';
    } else if (average >= 60) {
      grade = 'C';
    } else if (average >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    
    // Show result
    document.getElementById('result').innerHTML = `Your Grade: ${grade}<br>Average Marks: ${average}`;
  });
  