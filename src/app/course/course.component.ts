import { Response } from 'express';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import {
    debounceTime,
    distinctUntilChanged,
    startWith,
    tap,
    delay,
    map,
    concatMap,
    switchMap,
    withLatestFrom,
    concatAll, shareReplay, catchError, flatMap, filter
} from 'rxjs/operators';
import { merge, fromEvent, Observable, concat, throwError, combineLatest } from 'rxjs';
import { Lesson } from '../model/lesson';
import { CoursesService } from '../services/courses.service';
import { resolveMx } from 'dns';


interface CourseData {
    course: Course;
    lessons: Lesson[];
}


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

    data$: Observable<CourseData>;


    constructor(private route: ActivatedRoute,
        private coursesService: CoursesService) {


    }

    ngOnInit() {

        console.log("==========================FILTER==========================================")
        this.coursesService.loadAllAdvanceCouses().pipe(
            tap(v => console.log("===TAB COMPONENT===", v)),
           filter(v  => v.payload[4].category ==="BEGINNER") 
        ).subscribe(result=> 
            console.log('===result FILTER===', result)
        );


        const courseId = parseInt(this.route.snapshot.paramMap.get("courseId"));

        const course$ = this.coursesService.loadCourseById(courseId)
            .pipe(
                startWith(null)
            );

        const lessons$ = this.coursesService.loadAllCourseLessons(courseId)
            .pipe(
                startWith([])
            );

        this.data$ = combineLatest([course$, lessons$])
            .pipe(
                map(([course, lessons]) => {
                    return {
                        course,
                        lessons
                    }
                }),
                tap(console.log)
            );


    }


}











