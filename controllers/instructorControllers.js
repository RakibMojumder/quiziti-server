const Instructor = require('../models/InstructorModel');

const getInstructor = async (req, res) => {
    try {
        const instructors = await Instructor.find({}).sort({ name: 1 });
        if (instructors) {
            res.json({
                success: true,
                message: 'Successfully got instructors',
                instructors
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

module.exports = getInstructor;

// const data = [
//     {
//         name: "Jon Doe",
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/G3t5fNT/img-1.jpg',
//         info: 'John Doe is a web development instructor with over 10 years of experience in the field. He has worked on a diverse range of projects, from small personal websites to large-scale e-commerce platforms and custom web applications.As an instructor, John is committed to helping learners discover the joy and excitement of programming and web development. His courses feature a hands-on, project-based approach that emphasizes practical skills and real-world applications'
//     },
//     {
//         name: 'Akhil Das',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/xFMxBfZ/img-2.jpg',
//         info: 'Akhil Das is an experienced web development instructor who has been working in the field for over a decade. He has a deep passion for programming and enjoys sharing his knowledge and expertise with others.'
//     },
//     {
//         name: 'Keith perry',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/JzQGRbs/img-6.jpg',
//         info: "Keith Perry is a highly experienced web development instructor with a passion for helping others learn and grow in the field. With over 15 years of experience in web development, Keith has a deep understanding of the industry and a wealth of knowledge to share with learners. Keith's courses are designed to be accessible and engaging, with a project- based approach that emphasizes practical skills and real - world applications.He is highly skilled in a variety of programming languages."
//     },
//     {
//         name: 'Steve Parkar',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/kKt82rf/img-3.jpg',
//         info: 'Steve Parker is a seasoned web development instructor with a wealth of experience and knowledge to share with learners. With over 12 years of experience in the field, Steve has worked on a wide range of projects, from small personal websites to large-scale e-commerce platforms and custom web applications'
//     },
//     {
//         name: 'Angelina Pedro',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/rm780bJ/img-8.jpg',
//         info: 'Angelina Pedro is a talented web development instructor with a passion for helping others learn and grow in the field.With over 8 years of experience in web development. Angelinas courses are designed to be informative and engaging, with a project-based approach that emphasizes practical skills and real-world applications. She is highly skilled in a variety of programming languages, including HTML, CSS, JavaScript, and PHP, and is always exploring new tools and technologies to incorporate into her teaching.'
//     },
//     {
//         name: 'Michel Jordan',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/jf3BVYg/img-4.jpg',
//         info: "Michel Jordan is a highly experienced web development instructor with a passion for helping others learn and grow in the field. With over 15 years of experience in web development, Keith has a deep understanding of the industry and a wealth of knowledge to share with learners. Keith's courses are designed to be accessible and engaging, with a project- based approach that emphasizes practical skills and real - world applications"
//     },
//     {
//         name: 'Peter Henry',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/F0Ghyzp/img-5.jpg',
//         info: 'Peter Henry is an experienced web development instructor who has been working in the field for over a decade. He has a deep passion for programming and enjoys sharing his knowledge and expertise with others.'
//     },
//     {
//         name: 'Kane Winglet',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/tp2hRVz/img-9.jpg',
//         info: 'Kane Winglet is a web development instructor with over 10 years of experience in the field. He has worked on a diverse range of projects, from small personal websites to large-scale e-commerce platforms and custom web applications.As an instructor, John is committed to helping learners discover the joy and excitement of programming and web development. His courses feature a hands-on, project-based approach that emphasizes practical skills and real-world applications'
//     },
//     {
//         name: 'Json peterson',
//         title: 'Web Instructor',
//         image: 'https://i.ibb.co/hLtN1J0/img-7.jpg',
//         info: 'Steve Smith is a highly experienced and knowledgeable web development instructor with a passion for helping others learn and grow in the field. With over 15 years of experience in web development, Steve has a deep understanding of the industry and a wealth of knowledge to share with learners'
//     }
// ]