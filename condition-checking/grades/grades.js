var element = document.getElementById( 'result' );
var result = "<h2>Results</h2><p>";
var a = 0;
var b = 0;
var c = 0;
var f = 0;
var total = 0

function checkGrade( grade ) {

    // Check grade

    if( grade == '' ) {

        result += 'End</p>';

        total = a + b + c + f;
        result += `<p>
                        A Grades: ${a}, ${((a/total)*100).toFixed(2)}%<br>
                        B Grades: ${b}, ${((b/total)*100).toFixed(2)}%<br>
                        C Grades: ${c}, ${((c/total)*100).toFixed(2)}%<br>
                        F Grades: ${f}, ${((f/total)*100).toFixed(2)}%
                   </p>`;
        element.innerHTML = result;
        result += '<h2>Results</h2><p>';
        return;

    } else if( grade > 100 || grade < 0 ) {

        result += `${grade} is not a valid grade, must be between 0 and 100</p>`;

    } else if( grade >= 90 && grade <= 100 ) {

        result += `${grade} gives a grade of: A+</p>` ;
        a++;

    } else if( grade >= 80 && grade <= 89 ) {

        result += `${grade} gives a grade of: A</p>`;
        a++;

    } else if( grade >= 70 && grade <= 79 ) {

        result += `${grade} gives a grade of: B+</p>`;
        b++;

    } else if( grade >= 60 && grade <= 69 ) {

        result += `${grade} gives a grade of: B</p>`;
        b++;

    } else if( grade >= 50 && grade <= 59 ) {

        result += `${grade} gives a grade of: C+</p>`;
        c++;

    } else if( grade >= 40 && grade <= 49 ) {

        result += `${grade} gives a grade of: C</p>`;
        c++;

    } else if( grade >= 0 && grade <= 39 ) {

        result += `${grade} gives a grade of: F</p>`;
        f++;

    }

    element.innerHTML = result;
}