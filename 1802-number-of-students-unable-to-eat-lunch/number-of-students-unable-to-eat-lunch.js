/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let eat = 0
    let totalStudents = students.length

    while (sandwiches.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            eat++
        }
        else {
            let temp = students.shift()
            students.push(temp)

            if (!students.includes(sandwiches[0])) {
                return totalStudents - eat
            }
        }
    }

    return totalStudents - eat
};