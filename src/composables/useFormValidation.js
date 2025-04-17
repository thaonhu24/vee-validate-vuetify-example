import { ref } from "vue";
import { useForm } from "vee-validate";

export function useFormValidation({ schema, initialValues = {}, name }) {
  const isSubmitting = ref(false);

  const methods = useForm({
    validationSchema: schema,
    initialValues,
  });

  const { handleSubmit, defineField } = methods;

  const registerField = (values) => {
    return Object.keys(values).reduce((map, key) => {
      const [fieldName] = defineField(key);

      map[key] = fieldName;
      return map;
    }, {});
  };

  const submitForm = (callback) => {
    handleSubmit((formValues) => {
      try {
        isSubmitting.value = true;

        callback(formValues);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        isSubmitting.value = false;
      }
    })();
  };

  return {
    ...methods,
    name,
    registerField,
    isSubmitting,
    submitForm,
  };
}
