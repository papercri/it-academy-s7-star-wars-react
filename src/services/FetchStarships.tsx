import { ApiService } from "./ApiService";
import { Starship } from "../types/Interfaces";
import { PaginatedResponse } from "../types/ApiResponse";

const api = new ApiService("https://swapi.py4e.com/api");

export const fetchStarships = async (page: number = 1): Promise<PaginatedResponse<Starship>> => {
  return api.get<PaginatedResponse<Starship>>(`/starships/?page=${page}`);
};