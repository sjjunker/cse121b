// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'The Library', 
            enrolled: 26, 
            days: 'TTH', 
            instructor: 'Albert Einstein',
        },
        {
            sectionNum: 2, 
            roomNum: 'My House', 
            enrolled: 17, 
            days: 'MWF', 
            instructor: 'Bill Nye',
        },
    ],

    enrollStudent: function(sectionNum) {
        const index = this.sections.findIndex(section => section.sectionNum == sectionNum);
        
        if (index >= 0) {
            this.sections[index].enrolled++;
            OutputSections(this.sections);
        }
    },

    dropStudent: function(sectionNum) {
        const index = this.sections.findIndex(section => section.sectionNum == sectionNum);
        
        if (index != -1) {
            this.sections[index].enrolled--;
            OutputSections(this.sections);
        }
    },
};

//Set the course name and code to the h1 and h2 elements
function SetCourseNameAndCode(course) {

const courseName = document.getElementById("courseName");
const courseCode = document.getElementById("courseCode");

courseName.innerText = course.name;
courseCode.innerText = course.code;

}

//Output sections
function OutputSections(sections) {

const tableRow = document.getElementById("sections");
let rowData = "";

sections.forEach(section => 
    rowData +=
        `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>"`
);
tableRow.innerHTML = rowData;
}

//Add Event Listeners
const enrollStudentButton = document.getElementById("enrollStudent");
const dropStudentButton = document.getElementById("dropStudent");
  
enrollStudentButton.addEventListener("click", function() {
    const sectionNum = document.getElementById("sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
    
dropStudentButton.addEventListener("click", function() {
    const sectionNum = document.getElementById("sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

//Output the sections to the table
SetCourseNameAndCode(aCourse);
OutputSections(aCourse.sections);