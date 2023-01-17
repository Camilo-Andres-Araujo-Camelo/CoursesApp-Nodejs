const db = require('../utils/database')
const User = require('../models/user.models');
const Course = require('../models/course.models');
const UserCourse = require('../models/userCourse.models')
const Video = require('../models/video.models');
const Category = require('../models/category.models');
const CourseCategory = require('../models/courseCategory.models');
const CategoryVideo = require('../models/categoryVideo.models')

const users = [
  { firstName: "Juan", lastName: "Perez", password: "1234", email: "juan@gmail.com" }, // 1
  { firstName: "Pedro", lastName: "Diaz", password: "1234", email: "pedro@gmail.com" }, // 2
  { firstName: "Luis", lastName: "Silva", password: "1234", email: "luis@gmail.com" } // 3
];

const courses = [
  { title: "React", description: "Best React course", instructor: "Kun Aguero", categoryId: 1 }, // 1
  { title: "Node", description: "The Node experts", instructor: "Michael Jordan", categoryId: 2 },// 2
  { title: "HTML and CSS", description: "Fundamentals courses", instructor: "Chicharito", categoryId: 3 }, // 3
  { title: "Intro a Plataforma", description: "Aprender a usar la plataforma", instructor: "Pepe Grillo", categoryId: 4 }, // 3
];

const categories = [
  { name: 'Front-end' }, // 1
  { name: 'Back-end'}, // 2
  { name: 'Basics' }, // 3
  { name: 'Web development'} // 4
];

const videos = [
  { title: 'Primera clase React', url: 'https://www.youtube.com/watch?v=saGYMhApaH8', courseId: 1, categoryId: 1}, // 1
  { title: 'Primera clase Node', url: 'https://www.youtube.com/watch?v=doLMt10ytHY', courseId: 2, categoryId: 2}, // 2
  { title: 'Primera clase HTML and CSS', url: 'https://www.youtube.com/watch?v=p38WgakuYDo', courseId: 3, categoryId: 3}, // 3
  { title: 'Intro Web development', url: 'https://www.youtube.com/watch?v=A95yW-LVnbY', courseId: 4, categoryId: 4} // 4
];

const userCourse = [
  { userId: 1, courseId: 1},
  { userId: 1, courseId: 2},
  { userId: 2, courseId: 2},
  { userId: 2, courseId: 3},
  { userId: 3, courseId: 3},
  { userId: 3, courseId: 1}
];

const coursesCategorys = [
  { courseId: 1, categoryId: 1},
  { courseId: 1, categoryId: 4},
  { courseId: 2, categoryId: 2},
  { courseId: 2, categoryId: 4},
  { courseId: 3, categoryId: 3},
  { courseId: 3, categoryId: 4},
];

const categoryVideo = [
  { videoId: 1, categoryId: 1 },
  { videoId: 2, categoryId: 2 },
  { videoId: 3, categoryId: 3 },
  { videoId: 4, categoryId: 4 },
]

// db.sync( {alter:true} ) // Sincronizar y fuerza la alteración de las tablas
db.sync({ force: true })
    .then( () => {
        console.log('Iniciando la siembra de informacion');
        users.forEach( user => User.create(user));
        setTimeout(() => {
            courses.forEach( course => Course.create(course))
        }, 150);
        setTimeout(() => {
            categories.forEach( category => Category.create(category));
        }, 300);
        setTimeout(() => {
            videos.forEach((video) => Video.create(video));
        }, 450);
        setTimeout(() => {
          userCourse.forEach((uc) => UserCourse.create(uc));
        }, 450);
        setTimeout(() => {
          coursesCategorys.forEach((cc) => CourseCategory.create(cc));
        }, 450);
        setTimeout(() => {
          categoryVideo.forEach((vc) => CategoryVideo.create(vc));
        }, 600);

    })
    .catch( err => console.log(err) )