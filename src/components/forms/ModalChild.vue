<template>
  <v-dialog :model-value="visible" max-width="500">
    <v-card>
      <v-card-title>Modal Title</v-card-title>
      <v-form @submit="handleSubmitForm" class="px-4">
        <v-text-field v-model="name" label="Name" />

        <v-text-field v-model="email" label="Email" type="email" />

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :error-messages="errors.password"
        />

        <!-- <v-text-field
          :model-value="values.phone"
          @input="setFieldValue('phone', $event.target.value)"
          label="Phone"
          :error-messages="errors.phone"
        /> -->

        <v-btn color="primary" type="submit"> Submit </v-btn>
        <v-btn color="outline" class="ml-4" @click="resetForm()"> Reset </v-btn>
      </v-form>
      <v-card-actions>
        <v-btn color="primary" @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useFormContext } from "@/hook";
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: Boolean,
});

const methods = useFormContext("TEST_FRM_PROVIDER");

const handleSubmitForm = (event) => {
  event.preventDefault();

  // submitForm((formValues) => {
  //   console.log(formValues);
  // });
};

const { registerField, errors, values } = methods;

const { name, email, password, phone } = registerField(values);

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped></style>
