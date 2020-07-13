export interface IEmployee {

  id: number;
  emp_name: string;
  lastname: string;
  position: string;
  mobile: string
  emailadd: string;
  description?:string;
  skills?:string;
  address?:string;
  salarytype?:string;
  salary?:number;
  payment_mode?:string;
  bankdetails?:string;
  created_at?:Date;
}
