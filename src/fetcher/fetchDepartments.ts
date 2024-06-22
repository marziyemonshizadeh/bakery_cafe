import axios from "axios";

export interface Department {
  [x: string]: any;
  id: string;
  title: string;
}
export const fetchDepartments = async () => {
  return await axios.get("/api/departments").then((res) => {
    return res.data as Department[];
  });
};
