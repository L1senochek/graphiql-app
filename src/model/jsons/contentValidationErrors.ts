interface IContentValidationErrors {
  required: string;
  name: {
    onlyLetters: string;
    capitalLetter: string;
  };
  email: {
    validEmail: string;
  };
  password: {
    letter: string;
    number: string;
    specialCharacter: string;
    length: string;
  };
  confirmPassword: {
    confirm: string;
  };
}

export default IContentValidationErrors;
