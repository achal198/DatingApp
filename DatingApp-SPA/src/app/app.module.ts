import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-Jwt';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailResolver } from './_resolver/member-detail-resolver';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { MemberListResolver } from './_resolver/member-list-resolver';
import { MemberEditResolver } from './_resolver/member-edit-resolver';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/Auth/Login"],
      },
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
