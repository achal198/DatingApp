import { Routes } from '@angular/router';
import { MemberListComponent } from './member/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail-resolver';
import { MemberListResolver } from './_resolver/member-list-resolver';
import { MemberEditResolver } from './_resolver/member-edit-resolver';
import { MemberEditComponent } from './member/member-edit/member-edit.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent,
        resolve: {users: MemberListResolver}
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        resolve: {user: MemberDetailResolver}
      },
      {
      path: 'member/edit',
      component: MemberEditComponent,
      resolve: {user: MemberEditResolver}
     },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
