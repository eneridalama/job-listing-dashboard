import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'job-listing-dashboard', pathMatch: 'full'},
  {
    path: 'job-listing-dashboard',
    loadChildren: () =>
      import(
        './job-listing-dashboard/job-listing-dashboard-routing.module'
      ).then((m) => m.JobListingDashboardRoutingModule),
  }
];
