import { addMethod, string } from "yup";

const translator = (phase, t, str) => {
  return t ? t(phase) : str;
};

addMethod(string, "customPassword", function (t) {
  return this.test(
    "customPassword",
    "Password must meet requirements",
    function (value) {
      const { path, createError } = this;

      if (!value) return true;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*]/.test(value);

      if (!hasUpperCase) {
        return createError({
          path,
          message: translator(
            "password_contain_uppercase",
            t,
            "Password must contain uppercase"
          ),
        });
      }

      if (!hasNumber) {
        return createError({ path, message: "Password must contain number" });
      }

      if (!hasSpecialChar) {
        return createError({
          path,
          message: "Password must contain special character",
        });
      }

      return true;
    }
  );
});
