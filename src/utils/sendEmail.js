import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjsConfig";

export function sendEmailForm(formRef, onSuccess, onError) {
  return emailjs
    .sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formRef.current,
      { publicKey: EMAILJS_CONFIG.publicKey },
    )
    .then(
      () => onSuccess?.(),
      (err) => onError?.(err),
    );
}
