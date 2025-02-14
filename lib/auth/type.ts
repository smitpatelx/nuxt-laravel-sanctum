
export type AccountData = {
  id: number;
  email: string;
  email_verified_at: string | null;
  name: string;
  two_factor_secret: string | null;
  two_factor_recovery_codes: string | null;
  two_factor_confirmed_at: string | null;
  created_at: string;
  updated_at: string;
}

export type LoginFlow = {
  email: string;
  password: string;
};

export type RegisterFlow = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};