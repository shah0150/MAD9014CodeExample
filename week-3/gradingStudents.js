let studentScores = [85, 92, 78, 60, 45, 100];

function calculateGrades(score){
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F'
    }
}

for (let i = 0; i <studentScores.length; i++){
    let score = studentScores[i];
    let grade = calculateGrades(score);
    console.log('Student ' + (i + 1) + ' Score = ' + score + ' Grade = ' + grade);
}
// let studentScores = [85, 92, 78, 60, 45, 100];

// for (let i = 0; i < studentScores.length; i++) {
//     if (studentScores[i] >= 90) {
//         console.log(`Student ${i + 1}: your score is A`);
//     } else if (studentScores[i] >= 80 && studentScores[i] <= 89) {
//         console.log(`Student ${i + 1}: your score is B`);
//     } else if (studentScores[i] >= 70 && studentScores[i] <= 79) {
//         console.log(`Student ${i + 1}: your score is C`);
//     } else if (studentScores[i] >= 60 && studentScores[i] <= 69) {
//         console.log(`Student ${i + 1}: your score is D`);
//     } else {
//         console.log(`Student ${i + 1}: your score is F`);
//     }
// }

