import { CanActivate } from '@angular/router';
export class LoginGuard implements CanActivate {
    canActivate() {
        const login: boolean = Math.random() < 0.5;
        if (!login) {
            console.log('请登录用户');
        }else{
            console.log('登录成功');
        }
        return login;
    }
}