export interface IProject {

    id: number;
    address: string;
    jobType: string;
    describtion: string;
    status: string
    remarks: string;
    cus_id :number;
    client_id :number;
    client_name?:string;
    cus_name?:string;
    emp_names?:[];
    created_at?:Date;
    jobTypeID?:number;

  }

  export interface IJobType {

    id: number;
    jobType: string;
    describtion?: string;
    measurement?: string;
    unitPrice?: string
    created_at?:Date;
    updated_at?:Date;

  }

  export interface ICount {
    name: string;
    value: number;



  }
