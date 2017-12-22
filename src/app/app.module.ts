import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';


const firebaseConfig = {
  apiKey: "AIzaSyC6vTKvJfWbYFPWFsF-5cN0UNDzQqxlV7E",
  authDomain: "angular-crud1.firebaseapp.com",
  databaseURL: "https://angular-crud1.firebaseio.com",
  projectId: "angular-crud1",
  storageBucket: "angular-crud1.appspot.com",
  messagingSenderId: "953415941333"
};

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
