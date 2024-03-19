export interface SignUp {
  name: string;
  email: string;
  phone: number;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface AddMember {
  id: string;
  name: string;
  email: string;
  phonenumber: number;
  schoolnumber: number;
  address: string;
  district: string;
  state: string;
  pincode: number;
  image: string;
}
