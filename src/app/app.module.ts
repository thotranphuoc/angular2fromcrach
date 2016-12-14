import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { AboutComponent } from './component/about.component';
import { PostsService } from './service/posts.service';


import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './service/firebase.service';
import { FirebaseComponent } from './component/firebase.component';

import { ChatComponent } from './component/chat/chat.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBT8kacfD_SYp8Ei6TBcUEFlxnDK3GtYc0",
  authDomain: "businesscontacts-94792.firebaseapp.com",
  databaseURL: "https://businesscontacts-94792.firebaseio.com",
  storageBucket: "businesscontacts-94792.appspot.com"
};

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: UserComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    FirebaseComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    PostsService,
    FirebaseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


