import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/admin-panel/login/login.component';
import { DashboardComponent } from './components/admin-panel/dashboard/dashboard.component';
import { AddProductComponent } from './components/admin-panel/add-product/add-product.component';
import { ProductInfoComponent } from './components/admin-panel/product-info/product-info.component';
import { SidebarComponent } from './components/admin-panel/sidebar/sidebar.component';
import { ListProductsComponent } from './components/admin-panel/list-products/list-products.component';
import { EditProductComponent } from './components/admin-panel/edit-product/edit-product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { PaymentService } from './services/payment.service';
import { AuthGuard } from './guards/auth.guard';
import { PaymentRequestComponent } from './components/payment-request/payment-request.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBrtlnRJMHelhlBEANHZb3IC3zpkMcvNgY',
  authDomain: 'headphones-6a918.firebaseapp.com',
  databaseURL: 'https://headphones-6a918.firebaseio.com',
  projectId: 'headphones-6a918',
  storageBucket: 'headphones-6a918.appspot.com',
  messagingSenderId: '631364083549'
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pay', component: PaymentRequestComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'admin-panel/login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel/addproduct', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel/list-products', component: ListProductsComponent, canActivate: [AuthGuard]},
  {path: 'product/:id', component: ProductInfoComponent, canActivate: [AuthGuard]},
  {path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    ProductsComponent,
    PagenotfoundComponent,
    AddProductComponent,
    ProductInfoComponent,
    DashboardComponent,
    ListProductsComponent,
    LoginComponent,
    SidebarComponent,
    EditProductComponent,
    ProductDetailsComponent,
    CartComponent,
    SignupComponent,
    SigninComponent,
    PaymentRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ProductsService,
    CartService,
    AuthService,
    AuthGuard,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
