module.exports = function reverse (n) {

    const positiveNumber = Math.abs(n);
    const reversed = positiveNumber.toString().split('').reverse().join('');
    return reversed;
}
