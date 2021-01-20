class Course implements ICourse {
    id: string;
    title: string;
    creationDate: number;
    duration: number;
    description: string;

    constructor(courseId: string, courseTitle: string, CourseCreationDate: number, courseDuration: number, courseDescription: string){
        this.id = courseId;
        this.title = courseTitle;
        this.creationDate = CourseCreationDate;
        this.duration = courseDuration;
        this.description = courseDescription;
    }

}