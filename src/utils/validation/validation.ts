export const passwordValidationRules = {
  required: 'Password is required',
  pattern: {
    value: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{4,}$/,
    message: 'Must match the pattern 1Ff!',
  },
};
