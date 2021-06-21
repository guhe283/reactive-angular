import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable, throwError } from 'rxjs';
import { filter, map, shareReplay, catchError, tap } from 'rxjs/operators';
import { Lesson } from '../model/lesson';


@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(private http: HttpClient) {

    }

    loadCourseById(courseId: number) {
        return this.http.get<Course>(`/api/courses/${courseId}`)
            .pipe(
                shareReplay()
            );
    }

    loadAllCourseLessons(courseId: number): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                pageSize: "10000",
                courseId: courseId.toString()
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }

    loadAllAdvanceCouses(): Observable<any> {
        console.log("=====================SERVICE=================================")
        return this.http.get<any>('/api/courses').pipe(
            tap(v => console.log("===TAB===", v)),
            map(data => data.nodes.map(node => [node, node.gpsLng])),
            //filter(f=> f <= 0),
            catchError(error => throwError(error))
        );
    }
        

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>("/api/courses")
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


    saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
        return this.http.put(`/api/courses/${courseId}`, changes)
            .pipe(
                shareReplay()
            );
    }


    searchLessons(search: string): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                filter: search,
                pageSize: "100"
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


}







