import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})
export class AutentificationService {

    private AUTH_REQUEST: string = "https://localhost:44338/Auth";
    private REGISTER_REQUEST: string = "https://localhost:44338/Auth/register";
    private CHECK_EMAIL: string = "https://localhost:44338/Auth/email/";
    private FORGOT_EMAIL: string = "https://localhost:44338/SendEmail/forgotPasswordToken/";
    private AUTH: string = "loggedIn";

    constructor(private http: HttpClient, private route: Router) {

    }
    GetToken() {
        throw new Error('Method not implemented.');
    }
}