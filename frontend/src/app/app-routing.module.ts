import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./service/guard/auth.guard";
import {LoginGuard} from "./service/guard/login.guard";

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () => import('./core/pages/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./core/pages/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'cart-items/checkout',
    loadChildren: () => import('./core/pages/checkout/checkout.module').then(m => m.CheckoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart-items',
    loadChildren: () => import('./core/pages/cart-items/cart-items.module').then(m => m.CartItemsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./core/pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'search/:keyword',
    loadChildren: () => import('./core/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./core/pages/products/products.module').then(m => m.ProductsModule)
  },
  {path: 'category', loadChildren: () => import('./core/pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'products', loadChildren: () => import('./core/pages/products/products.module').then(m => m.ProductsModule)},

  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: '**',
    loadChildren: () => import('./core/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
