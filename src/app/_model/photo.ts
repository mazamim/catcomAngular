export interface Photo {
  id: number;
  emp_id:number;
  url: string;
  description: string;
  created_at?: Date;
  updated_at?:Date;
  isMain?: boolean;
}
