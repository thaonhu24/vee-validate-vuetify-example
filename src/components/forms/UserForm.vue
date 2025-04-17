<template>
  <FormProvider v-bind="methods">
    <!-- <v-form @submit="handleSubmitForm" class="px-4">
      <v-text-field v-model="name" label="Name" :error-messages="errors.name" />

      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        :error-messages="errors.email"
      />

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        :error-messages="errors.password"
      />

      <v-text-field
        :model-value="phone"
        @input="setFieldValue('phone', $event.target.value)"
        label="Phone"
        :error-messages="errors.phone"
      />

      <v-btn
        color="primary"
        type="submit"
        :disabled="!meta.valid || !meta.dirty"
      >
        Submit
      </v-btn>
      <v-btn color="outline" class="ml-4" @click="resetForm()"> Reset </v-btn>
      <v-btn color="outline" class="ml-4" @click="switchLang">
        Switch Lang
      </v-btn>
    </v-form> -->
    <v-btn color="outline" class="ml-4" @click="openModal"> Open Modal </v-btn>
    <ModalChild :visible="visibleModal" @close="closeModal" />
  </FormProvider>
</template>

<script setup>
import UserSchema from "@/validations/schemas/userSchema";
import ModalChild from "./ModalChild.vue";
import { useFormValidation } from "@/composables/useFormValidation";
import { useLocale } from "vuetify/lib/framework.mjs";
import { FormProvider } from "@/provider";
import { ref } from "vue";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const visibleModal = ref(false);

const { t, current } = useLocale();
const methods = useFormValidation({
  schema: new UserSchema(t).schema,
  initialValues,
  name: "TEST_FRM_PROVIDER",
});

const {
  errors,
  values,
  isSubmitting,
  submitForm,
  setFieldValue,
  resetForm,
  registerField,
  meta,
} = methods;

const handleSubmitForm = (event) => {
  event.preventDefault();

  submitForm((formValues) => {
    console.log(formValues);
  });
};

// const { name, email, password, phone } = registerField(values);

const switchLang = () => {
  current.value = current.value === "en" ? "vi" : "en";
};

const openModal = () => {
  visibleModal.value = true;
};

const closeModal = () => {
  visibleModal.value = false;
};
</script>
