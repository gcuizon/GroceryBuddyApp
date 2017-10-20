import {Observable} from 'rxjs/Observable'
import {UserClass} from './user';
import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()//because Http is a service
export class UserService implements OnInit{
    userLoginURL = "http://localhost:8080/grocery-buddy-service/services/userLogin";
    user:UserClass;
    
    constructor(private http:Http){
        this.loginUser().subscribe(
            usr => this.user = usr
         );
    }

    public loginUser() : Observable<UserClass>{
        return this.http.get(this.userLoginURL)
                    .map(res => <UserClass>res.json());
    }

    ngOnInit(){

       
    }

}