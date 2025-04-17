import { onUnmounted } from "vue";

export function useFormContext(keyName: string): any {
  const generateFormIdentifier = (name: string | undefined) => {
    if (!name) {
      return "";
    }
    return `__form-${name}__`;
  };
  const formIdentifier = generateFormIdentifier(keyName);

  onUnmounted(() => {
    delete window[formIdentifier];
  });

  return window[formIdentifier] || {};
}
