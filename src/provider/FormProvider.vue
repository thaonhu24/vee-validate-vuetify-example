<template>
  <slot />
</template>

<script lang="ts" setup>
import { useAttrs, defineOptions } from "vue";

defineOptions({
  inheritAttrs: false,
});

const generateFormIdentifier = (name: string | undefined) => {
  if (!name) {
    return "";
  }
  return `__form-${name}__`;
};

const attrs = useAttrs();

const identifier = generateFormIdentifier(attrs.name as string);

if (identifier) {
  window[identifier] = attrs;
}
</script>
