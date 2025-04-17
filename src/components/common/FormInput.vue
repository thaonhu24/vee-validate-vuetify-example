<template>
  <div class="form-group">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-input"
      :class="{ error: error }"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  error: String,
  type: {
    type: String,
    default: "text",
  },
});

defineEmits(["update:modelValue"]);
</script>
