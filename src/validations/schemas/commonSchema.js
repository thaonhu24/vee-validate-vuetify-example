// *INFO: doc https://vee-validate.logaretm.com/v4/guide/best-practices/#yup-bundle-size
import { string } from "yup";
// import { initCustomRules } from "@/validations/customRules";

const translator = (phase, t, str) => {
  return t ? t(phase) : str;
};

function CommonSchema(t) {
  let _t = t;

  // Getter for translation function
  Object.defineProperty(this, "_t", {
    get: function () {
      if (!_t) {
        throw new Error("Translation function not initialized");
      }
      return _t;
    },
  });

  // Common validations
  this.required = function (field) {
    return string().required(`${field} is required`);
  };

  this.email = string()
    .required("Email is required")
    .email("Invalid email format");

  this.password = string().required(
    translator("password_required", this._t, "Password is required")
  );
}

export default CommonSchema;
