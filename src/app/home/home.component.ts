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
  }

  bio: string = "Backend Developer with 3+ years of experience in building scalable microservices and RESTful APIs using Java and Spring Boot. Passionate about optimizing performance, integrating third-party services, and delivering clean, maintainable code.";

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
        "link": "https://github.com/Prash4nt-K/Hotel_Rating_App"
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
        "link": "https://github.com/Prash4nt-K/Netflix_Clone"
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


}
