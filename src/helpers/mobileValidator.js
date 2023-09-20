 

export function mobileValidator(mobile) {
  const mobilePattern = /^[0-9]{10}$/; // This pattern checks for exactly 10 digits (0-9).

  if (!mobile) {
    return "Mobile number can't be empty.";
  }

  if (!mobilePattern.test(mobile)) {
    return 'Please enter a valid 10-digit mobile number.';
  }

  return '';
}