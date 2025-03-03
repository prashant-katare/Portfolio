import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const { years, months } = this.getYearsAndMonthsSince(this.startDate);
    this.totalWorkExperienceinYears = years;
    this.totalMonthsSinceStartDate = months;
  }

  totalWorkExperienceinYears: number = 0;
  totalMonthsSinceStartDate: number = 0;

  startDate: Date = new Date("2021-08-12");

  experiencePeriod: string = "(Aug 2021 - Present)";
  post: string = "Backend Developer - Tata Consultancy Services";

  courses: {name: string, id: string}[] = [
    {
      name: "Introduction to HTML5 (Coursera)",
      id: "7WCTHLPFTP9B"
    },
    {
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      id: "273187650OCAJSE8"  
    }
  ];

  bio: string = "Experienced Spring Boot Developer with over 3+ years of expertise in developing scalable and high-performance web applications and microservices. Proficient in Java and Spring Boot frameworks, with hands- on experience in RESTful APIs and Microservices architecture. Adept atbuilding secure, database-driven applications and integrating various third- party services. Strong problem-solving skills with a focus on deliveringclean, maintainable, and efficient code.";

  skills: string[] =[
    "Java", 
    "Spring Boot", 
    "Angular",
    "MySql",
    "Java Microservices",
    "RESTful API Development",
    "Linux",
    "JavaScript",
    "TypeScript",  
    "Bash",
    "Git",
    "Jira",
    "Problem Solving",
    "HTML5",
    "CSS",
    "Powershell",
    "Bootstrap"
];

experienceItems:string[] = [
  "Developed and maintained scalable RESTful APIs and microservices using Spring Boot, ensuring efficiency and reliability.",
  "Designed and maintained databases using MySQL, ensuring data integrity and optimal performance.",
  "Developing microservices using Java Spring Boot, Spring Data JPA, Restful services with good quality of code.",
  "Integrated third-party APIs and services, including payment gateways, authentication services (JWT), and logging mechanisms.",
  "Collaborated with cross-functional teams to deliver high-quality, scalable software solutions in an Agile environment.",
  "Participated in Agile development sprints, contributing to sprint planning, daily stand-ups, and retrospectives.",
  "Led the migration of a legacy monolithic application to a microservices architecture, improving scalability and maintainability.",
  "Reduced application response time by 30% by optimizing code and database queries."
]

projects = [
  {
    "title": "Book Recommendation Site",
    "description": "Developed a full-stack e-commerce website using Angular and Spring Boot, with features such as book management, shopping cart, and payment processing.",
    "technologies": ["Angular", "Spring Boot", "MySQL", "Bootstrap", "HTML5", "CSS"],
    "buttons" : [
      {
        "name": "Github-Frontend",
        "link": "https://github.com/prashant-katare/FindMeABook-Frontend"
      },
      {
        "name": "Github-Backend",
        "link": "https://github.com/prashant-katare/FindMeABook-Backend"
      }
    ]
  },
  {
    "title": "Hotel-Rating Microservice Application",
    "description": "A microservice application created using all essential microservices aspects like Service Discovery, microservice communication using Feign Client, API Gateway, external configuration using Config Server, circuit breaker using resilience4j.",
    "technologies": ["Java", "Spring Boot", "MySQL", "Eureka", "Feign Client", "API Gateway", "Config Server", "Resilience4j"],
    "buttons" : [
      {
        "name": "Github",
        "link": "https://github.com/prashant-katare/Hotel-Rating-Microservices"
      }
    ]
  },
  { 
    "title": "Netflix-Clone",
    "description": "An atempt to make a netflix-clone app using Angular. The backend api used to fetch data is TMDb API (Only accessable using VPN inside India).",
    "technologies": ["Angular", "Spring Boot", "MySQL", "Bootstrap", "HTML5", "CSS"],
    "buttons" : [
      {
        "name": "Github",
        "link": "https://github.com/prashant-katare/Netflix-Clone"
      }
    ]
  },
  {
    "title": "Blog Site",
    "description": "A personal blogging platform for my personal blogs. The web app is hosted on AWS EC2 instance using nGinx. The backend Java Jar file is also hosted on the same server as a linux service.",
    "technologies": ["Angular", "Spring Boot", "MySQL", "Bootstrap", "HTML5", "CSS"],
    "buttons" : [
      {
        "name": "Github-Frontend",
        "link": "https://github.com/prashant-katare/mHealth-Frontend"
      },
      {
        "name": "Github-Backend",
        "link": "https://github.com/prashant-katare/mHealth-Backend"
      }
    ]
  }
]

getYearsAndMonthsSince(startDate: Date): { years: number; months: number } {
  let start = new Date(startDate);
  let now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  if (months < 0) {
      years--;  // Decrease a year if current month is before start month
      months += 12;
  }

  console.log(years, months);
  
  return { years, months };
}




}
