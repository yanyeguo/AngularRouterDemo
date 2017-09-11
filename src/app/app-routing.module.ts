import { ProductResolve } from './guard/product.resolve';
import { UnsaveGuard } from './guard/unsave.guard';
import { LoginGuard } from './guard/login.guard';
import { ChatComponent } from './chat/chat.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Code404Component } from './code404/code404.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' },
  {
    path: 'product/:id', component: ProductComponent, children: [
      { path: '', component: ProductDetailComponent },
      { path: 'seller/:id', component: SellerInfoComponent },
    ],
    resolve: {
      product: ProductResolve
    }
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsaveGuard]
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsaveGuard, ProductResolve]
})
export class AppRoutingModule { }
