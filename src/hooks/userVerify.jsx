import passwordValidator from "password-validator";

// Username
let usernameSchema = new passwordValidator();
usernameSchema.is().min(8)                                // Minimum length 8

//Password and Confirm password
let passwordSchema = new passwordValidator();
passwordSchema
    .is().min(8)                                          // Minimum length 8
    .has().uppercase()                                    // Must have uppercase letters
    .has().not().spaces()                                 // Should not have spaces
    .has(/[@#*$_]/)                                       // Must have @ # * $ _


// const verifyUsername = (variable) => {
//         return usernameSchema.validate(variable);
// }

const userVerify = () => {
  // const [verifyPassworod , setVerifyPassword] = useState('');

  const verifyPassword = (variable) => {
    return passwordSchema.validate(variable)
  };

  const verifyUsername = (variable) => {
    return usernameSchema.validate(variable);
}
  

  return {verifyUsername , verifyPassword};
};

export default userVerify;
