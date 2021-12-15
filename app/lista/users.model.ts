import { Data } from "@angular/router";
import { UsersService } from "./users.service";

export interface Users{
    id: number;
    email: string;
    nome: string;
    sobrenome: string;
}

export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Users[];
}

export interface RequestCreate {
    nome: string;
    sobrenome: string;
    email: string;
}

export interface ResponseCreate {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
    createdAt: Data;
}



export interface RequestUpdate {
    first_name: string;
    last_name: string;
    email: string;   
}

export interface ResponseUpdate {
    first_name: string;
    last_name: string;
    email: string;
    updateAt: Data;
}
