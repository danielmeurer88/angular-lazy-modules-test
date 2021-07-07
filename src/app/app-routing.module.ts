import { NgModule, Testability } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [

    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'context-1',
      loadChildren: () => import('./context-1/context-1.module').then(m => m.Context1Module),
    },
    {
      path: 'context-2',
      loadChildren: () => import('./context-2/context-2.module').then(m => m.Context2Module),
    },
    {
        path: 'test/:number/:id/view',
        component: TestComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
