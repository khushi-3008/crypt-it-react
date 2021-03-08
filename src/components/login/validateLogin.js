export default function validateLogin(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Please enter username';
    }


    if (values.password !== "khushi") {
        errors.password = "Incorrect password. Try again. ";
    } 

    return errors;
}