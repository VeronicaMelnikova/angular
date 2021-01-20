import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SectionComponent } from './section/section.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, SearchComponent, AddCourseComponent, SectionComponent, BreadcrumbsComponent, FooterComponent],
  exports: [
    CourseListComponent,
    CourseListItemComponent,
    SectionComponent,
    AddCourseComponent,
    SearchComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
