import axios from "axios";

export const api = axios.create({
  baseURL: "https://complaintmanagementsystembackend-1.onrender.com/api/users"
});
