// import { AuthGuard } from './auth/auth.guard';
// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'recipes', pathMatch: 'full' },
//   {
//     path: 'recipes',
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./recipes/recipes.module' ).then( m => m.RecipesPageModule),
//         canLoad: [AuthGuard]
//       },
//       {
//         path: ':recipeId',
//         loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule),
//         canLoad: [AuthGuard]
//       }
//     ]
//   },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  {
    path: 'places',
    loadChildren: './places/places.module#PlacesPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'bookings',
    loadChildren: './bookings/bookings.module#BookingsPageModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
