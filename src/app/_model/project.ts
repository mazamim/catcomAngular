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
    cus_name?:string

  }
