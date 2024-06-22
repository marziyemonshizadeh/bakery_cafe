import { fetchDepartments } from "@/fetcher/fetchDepartments";
import { useQuery } from "@tanstack/react-query";

export function useGetDepartments() {
  return useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
  });
}
