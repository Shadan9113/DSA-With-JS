const isArmstrongNumber = (number) => {
    const digits = number.toString().length; // Find the number of digits
    let sum = 0;
    let temp = number;

    // Calculate the sum of each digit raised to the power of digits
    while (temp > 0) {
        const digit = temp % 10; // Get the last digit
        sum += digit ** digits; // Add digit^digits to the sum
        temp = Math.floor(temp / 10); // Remove the last digit
    }

    // Return true if the sum equals the original number
    return sum === number;
};

// Example usage
const num = 153;
console.log(
    `${num} is ${isArmstrongNumber(num) ? "an Armstrong" : "not an Armstrong"} number.`
);
