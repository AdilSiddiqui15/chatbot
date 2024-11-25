import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Your main component
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    SignUpComponent // Declare your components here
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add necessary modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
