

export const VALIDATION_LIMITS = {
  NAME_MAX: 50,
  EMAIL_MAX: 50,
  PHONE_DIGITS: 10,
  MESSAGE_MAX: 250,
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_FIRST_DIGIT_REGEX = /^[6-9]/;
const PHONE_STRICT_10_DIGIT_REGEX = /^[6-9]\d{9}$/;

/**
 * Format phone number by stripping non-numeric characters and capping at 10 digits
 */
export function formatPhoneNumber(value = "") {
  return value.replace(/\D/g, "").slice(0, VALIDATION_LIMITS.PHONE_DIGITS);
}

/**
 * Validates an individual contact form field
 * @param {string} field - 'name' | 'email' | 'phone' | 'message'
 * @param {string} value - The input value
 * @returns {string} Error message, or empty string if valid
 */
export function validateContactField(field, value = "") {
  const trimmed = typeof value === "string" ? value.trim() : "";

  switch (field) {
    case "name":
      if (!trimmed) {
        return "Please enter your name.";
      }
      if (trimmed.length > VALIDATION_LIMITS.NAME_MAX) {
        return `Name must not exceed ${VALIDATION_LIMITS.NAME_MAX} characters.`;
      }
      return "";

    case "email":
      if (!trimmed) {
        return "Please enter your email.";
      }
      if (trimmed.length > VALIDATION_LIMITS.EMAIL_MAX) {
        return `Email must not exceed ${VALIDATION_LIMITS.EMAIL_MAX} characters.`;
      }
      if (!EMAIL_REGEX.test(trimmed)) {
        return "Please enter a valid email address.";
      }
      return "";

    case "phone":
      if (!trimmed) {
        return "Please enter your mobile number.";
      }
      if (trimmed.length !== VALIDATION_LIMITS.PHONE_DIGITS) {
        return `Mobile number must be exactly ${VALIDATION_LIMITS.PHONE_DIGITS} digits.`;
      }
      if (!PHONE_FIRST_DIGIT_REGEX.test(trimmed)) {
        return "First digit must be between 6 and 9.";
      }
      if (!PHONE_STRICT_10_DIGIT_REGEX.test(trimmed)) {
        return "Invalid 10-digit mobile number format.";
      }
      return "";

    case "message":
      if (!trimmed) {
        return "Please enter your message.";
      }
      if (trimmed.length > VALIDATION_LIMITS.MESSAGE_MAX) {
        return `Message must not exceed ${VALIDATION_LIMITS.MESSAGE_MAX} characters.`;
      }
      return "";

    default:
      return "";
  }
}

/**
 * Validates the entire contact form
 * @param {{ name: string, email: string, phone: string, message: string }} formData
 * @returns {{ errors: Record<string, string>, isValid: boolean }}
 */
export function validateContactForm(formData) {
  const errors = {
    name: validateContactField("name", formData.name),
    email: validateContactField("email", formData.email),
    phone: validateContactField("phone", formData.phone),
    message: validateContactField("message", formData.message),
  };

  const isValid = !Object.values(errors).some((error) => Boolean(error));

  return { errors, isValid };
}
