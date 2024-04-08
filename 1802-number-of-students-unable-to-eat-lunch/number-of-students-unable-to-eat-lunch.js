/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    while (sandwiches.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        }
        else {
            let temp = students.shift()
            students.push(temp)

            if (!students.includes(sandwiches[0])) {
                return students.length
            }
        }
    }

    return students.length
};