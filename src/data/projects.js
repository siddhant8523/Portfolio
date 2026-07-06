const projects = [
  {
    name: "CloudNote",
    status: "building",
    desc: "Full-stack note-taking app with React and Spring Boot. REST APIs for notes, JWT-based auth with role-based access, plus pinned and archived notes.",
    stack: ["React", "Spring Boot", "JPA", "MySQL", "JWT"],
    demo: "#",
    repo: "https://github.com/siddhant8523/cloudnote-demo.git",
  },
  {
    name: "Cloud Contact Manager",
    status: "shipped",
    desc: "Secure cloud-based contact manager with full CRUD, pagination, OAuth2.0 + Spring Security auth, REST APIs, and profile image uploads.",
    stack: ["Spring Boot", "Spring MVC", "Thymeleaf", "MySQL", "OAuth2.0", "Cloudinary", "TailwindCSS"],
    demo: "#",
    repo: "https://github.com/siddhant8523/ContactManager.git",
  },
  {
    name: "Stripe Payment Integration",
    status: "shipped",
    desc: "Scalable payment integration built at HulkHire Tech using Spring Boot microservices — payment processing, status tracking, and Stripe REST APIs with error handling.",
    stack: ["Spring Boot", "Microservices", "Stripe API"],
    demo: "#",
    repo: "https://id.atlassian.com/manage-profile/profile-and-visibility",
  },
];

export default projects;
