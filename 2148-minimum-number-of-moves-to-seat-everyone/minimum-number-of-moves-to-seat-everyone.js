/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let ans = 0

    for (let i = 0; i < seats.length; i++) {
        let var1 = Math.max(seats[i], students[i])
        let var2 = Math.min(seats[i], students[i])

        ans += Math.abs(var1 - var2)
    }

    return ans
};