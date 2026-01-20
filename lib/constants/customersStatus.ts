import type { Status } from "../types/status";

export function getCustomerStatus (age: number) {
    if(age < 35) return "Active"
    if(age < 50) return "Inactive"
    return "blocked"
}