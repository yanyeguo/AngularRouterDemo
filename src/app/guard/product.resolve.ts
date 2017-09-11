import { Product } from './../product/product.component';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product>{


        constructor(private router: Router) {

        }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
        const productId: number = route.params['id'];
        if (productId == 2) {
            return new Product(2, 'iphone7');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }

    }

}