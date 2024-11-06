export interface IRegistrationFormInputs {
  name: string;
  email: string;
  phone: string;
  position_id: number | null;
  photo: FileList | null;
}
