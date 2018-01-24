import { Observable } from 'rxjs/Observable'
import { UserClass } from './user';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()//because Http is a service
export class UserService implements OnInit {
    userLoginURL = "http://localhost:8080/grocery-buddy-service/services/userLogin";
    public activeUser: UserClass = new UserClass();

    constructor(private http: Http) {
        let user = new UserClass();
        user.name = 'Che';
        user.password = 'Passw0rd';

        this.loginUser(user).subscribe(
            (usr: UserClass) => {
                this.activeUser = usr;
                console.log('Logged in User: ' + this.activeUser.name);
                console.log('User ID: ' + this.activeUser.id);
            },
            (error) => this.onGetError(error),
            
        );
    }

    public loginUser(user:UserClass):Observable<UserClass> {
        //pass the user object
        return this.http.get(
            this.constructGetReqLoginURL(this.userLoginURL, user))
            .map(
                (res:Response) =>{
                    const usr: UserClass = res.json();
                    return usr;
                }
            );
    }

    public onGetError(error:any){
        console.log('ERROR: ' + error);
    }

    private constructGetReqLoginURL(url: String, user: UserClass){
        return url + "?name=" + user.name + "&password=" + user.password;
    }

    ngOnInit() {


    }

}