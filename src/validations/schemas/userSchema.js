import { string, date, object } from "yup";
import CommonSchema from "./commonSchema";

const translator = (phase, t, str) => {
  return t ? t(phase) : str;
};

function UserSchema(t) {
  // Call parent constructor
  CommonSchema.call(this, t);

  // Private variables
  let _schema = null;

  // Initialize schema if t is provided in constructor
  _schema = object({
    name: this.required("name"),
    email: this.email,
    password: this.password.customPassword(t),
    phone: string().matches(
      /^0[1-9]\d{8}$/,
      translator("phone", this._t, "Invalid phone number")
    ),
  });

  // Define schema getter property
  Object.defineProperty(this, "schema", {
    get: function () {
      if (!_schema) {
        throw new Error(
          "Schema not initialized. Please provide translation function."
        );
      }
      return _schema;
    },
  });
}

export default UserSchema;
