/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    let roomsMeetingsCount = Array(n).fill(0);
    let roomsSchedule = Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < meetings.length; i += 1) {
        let [start, end] = meetings[i];
        let earliestRoom = 0;
        let earliestTime = Infinity;
        let isFreeRoomFound = false;

        for (let j = 0; j < n; j += 1) {
            if (roomsSchedule[j] <= start) {
                roomsMeetingsCount[j] += 1;
                roomsSchedule[j] = end;
                isFreeRoomFound = true;
                break;
            }

            if (roomsSchedule[j] < earliestTime) {
                earliestTime = roomsSchedule[j];
                earliestRoom = j;
            }
        }

        if (isFreeRoomFound === false) {
            roomsMeetingsCount[earliestRoom] += 1;
            roomsSchedule[earliestRoom] += end - start;
        }
    }

    let maxMeetings = 0
    let numberOfRoomWithMostMeetings = 0;

    for (let i = 0; i < n; i += 1) {
        if (roomsMeetingsCount[i] > maxMeetings) {
            maxMeetings = roomsMeetingsCount[i];
            numberOfRoomWithMostMeetings = i;
        }
    }

    return numberOfRoomWithMostMeetings;
};