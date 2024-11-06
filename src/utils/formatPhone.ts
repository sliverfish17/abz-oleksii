export const formatPhoneNumber = (phone: string) => {
  return `+38 (${phone.slice(3, 6)}) ${phone.slice(6, 9)} ${phone.slice(9, 11)} ${phone.slice(11)}`;
};
