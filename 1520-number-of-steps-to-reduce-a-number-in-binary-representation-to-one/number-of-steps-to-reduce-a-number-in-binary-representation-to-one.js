/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
   let result = carry = 0;

   for (let i = s.length - 1; i > 0; i--) {
      const str = s[i];

      if (str === '0') {
         result += carry ? 2 : 1;
         continue;
      }
      
      result += carry ? 1 : 2;
      carry = 1;
   }
   return result + carry;
};