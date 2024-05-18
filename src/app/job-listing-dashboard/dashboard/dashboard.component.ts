import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobDetails } from './job-details.model';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ChangeColorDirective } from '../change-color.directive';
import { ExponentialStrengthPipe } from '../exponential-strength.pipe';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    JobDetailsComponent,
    ChangeColorDirective,
    ExponentialStrengthPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  selectedJob: any = {};

  jobs: JobDetails[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService.getJobs().subscribe((res) => {
      this.jobs = res;
    });
  }

  select(job: JobDetails) {
    this.selectedJob = job;
  }

  applied(event: JobDetails) {
    this.jobs.forEach((job) => {
      if (job.id === event.id) {
        job.applied = true;
      } else {
        job.applied = false;
      }
    });

    console.log(this.jobs);
  }

  addJob() {
    this.loggerService
      .addJob({
        id: 8,
        title: 'Electrician',
        salary: '$40,000 - $80,000',
        experience: 'Varies, typically 3-5 years of apprenticeship experience',
        location:
          'Construction sites, residential buildings, commercial buildings',
        description:
          'Electricians install, maintain, and repair electrical systems in various settings. They interpret blueprints, inspect electrical components, and ensure compliance with electrical codes and regulations to ensure safety and functionality.',
      })
      .subscribe();
  }

  editJob() {
    this.loggerService
      .editJob({
        id: 4,
        title: 'Marketing',
      })
      .subscribe();
  }

  deleteJob() {
    this.loggerService.deleteJob(2).subscribe();
  }
}
