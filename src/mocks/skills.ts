import { Skill } from "@api/models/skills";
import { v4 as uuidv4 } from "uuid";

export const SKILLS: Skill[] = [
  {
    _id: "63a2904798084589d5bbb1ea",
    name: "React.js",
    image: {
      url: "/icons/reactjs.svg",
      caption: "React.js",
    },
    domain: 0.7,
    color: "#00D8FF"
  },
  {
    _id: "63a29058d51fd20f28201546",
    name: "Nest.js",
    image: {
      url: "/icons/nestjs.svg",
      caption: "Nest.js",
    },
    domain: 0.6,
    color: "#EA2845"
  },
  {
    _id: "63a290612a886463145e9a7c",
    name: "Postman",
    image: {
      url: "/icons/postman.svg",
      caption: "Postman",
    },
    domain: 0.4,
    color: "#FF6C37"
  },
  {
    _id: "63a29068ec6ef360a6290f3b",
    name: "Bash",
    image: {
      url: "/icons/bash.svg",
      caption: "Bash",
    },
    domain: 0.2,
    color: "#000"
  },
  {
    _id: "63a2906f5265dd876151ef8f",
    name: "Typescript",
    image: {
      url: "/icons/ts.svg",
      caption: "Typescript",
    },
    domain: 0.7,
    color: "#3178C6"
  },
  {
    _id: "63a2907631aaae12f5f9634f",
    name: "Golang",
    image: {
      url: "/icons/golang.svg",
      caption: "Golang",
    },
    domain: 0.4,
    color: "#00ACD7"
  },
  {
    _id: "63a2907deec7733c933dd07a",
    name: "AWS Lambda",
    image: {
      url: "/icons/awslambda.svg",
      caption: "AWS Lambda",
    },
    domain: 0.1,
    color: "#F58534"
  },
  {
    _id: "63a290831fc903287ad93c5b",
    name: "CSS3",
    image: {
      url: "/icons/css3.svg",
      caption: "CSS3",
    },
    domain: 0.8,
    color: "#2965F1"
  },
  {
    _id: "63a2908a44366ea2bc522776",
    name: "Dart",
    image: {
      url: "/icons/dart.svg",
      caption: "Dart",
    },
    domain: 0.3,
    color: "#00C4B3"
  },
  {
    _id: "63a290901be00085b6839324",
    name: "Docker",
    image: {
      url: "/icons/docker.svg",
      caption: "Docker",
    },
    domain: 0.5,
    color: "#1396C3"
  },
  {
    _id: "63a2909b373955717b2fa0c0",
    name: "MongoDB",
    image: {
      url: "/icons/mongodb.svg",
      caption: "MongoDB",
    },
    domain: 0.5,
    color: "#6CAC48"
  },
  {
    _id: "63a290a3cd7feea3a4a559d2",
    name: "MySQL",
    image: {
      url: "/icons/mysql.svg",
      caption: "MySQL",
    },
    domain: 0.2,
    color: "#0A517D"
  },
  {
    _id: "63a290ab95a1431d9f99fe3b",
    name: "Node.js",
    image: {
      url: "/icons/nodejs.svg",
      caption: "Node.js",
    },
    domain: 0.6,
    color: "#8CC84B"
  },
  {
    _id: "63a290b2c767d94b61a3f9e3",
    name: "PostgreSQL",
    image: {
      url: "/icons/postgresql.svg",
      caption: "PostgreSQL",
    },
    domain: 0.2,
    color: "#336791"
  },
  {
    _id: "63a290b825ee6b1458f44a91",
    name: "GraphQL",
    image: {
      url: "/icons/graphql.svg",
      caption: "GraphQL",
    },
    domain: 0.5,
    color: "#E10098"
  },
  {
    _id: "63b21bb89d5c4780dc2eb4b4",
    name: "Java",
    image: {
      url: "/icons/java.svg",
      caption: "Java",
    },
    domain: 0.1,
    color: "#E10098"
  },
  {
    _id: "63b21bb37fe49fc409265cf7",
    name: "Spring Boot",
    image: {
      url: "/icons/spring.svg",
      caption: "Spring Boot",
    },
    domain: 0.1,
    color: "#E10098"
  },
  {
    _id: "63b21baf7e57731899475b47",
    name: "Kotlin",
    image: {
      url: "/icons/kotlin.svg",
      caption: "Kotlin",
    },
    domain: 0.1,
    color: "#E10098"
  },
  {
    _id: "63b21ba9cabb1ebcb5151342",
    name: "Gin",
    image: {
      url: "/icons/gingonic.png",
      caption: "Gin",
    },
    domain: 0.1,
    color: "#E10098"
  },
  {
    _id: "63b787f8dcc429c6e5fb44ec",
    name: "Mongoose",
    image: {
      url: "/icons/mongoose.png",
      caption: "Gin",
    },
    domain: 0.5,
    color: "#E10098"
  },
  {
    _id: "63b789a20d774867ead230d2",
    name: "Socket.io",
    image: {
      url: "/icons/socketio.svg",
      caption: "Socket.io",
    },
    domain: 0.5,
    color: "#E10098"
  },
  {
    _id: "63b78b0c21efa47529745106",
    name: "React Query",
    image: {
      url: "/icons/react-query.svg",
      caption: "React Query",
    },
    domain: 0.6,
    color: "#E10098"
  },
  {
    _id: "63b78bd249c1e0735a81fc37",
    name: "Amazon EC2",
    image: {
      url: "/icons/amazon-ec2.svg",
      caption: "Amazon EC2",
    },
    domain: 0.4,
    color: "#E10098"
  },
  {
    _id: "63b78bece38a0fb6cefe554e",
    name: "Amazon ECS",
    image: {
      url: "/icons/amazon-ecs.svg",
      caption: "Amazon ECS",
    },
    domain: 0.2,
    color: "#E10098"
  },
  {
    _id: "63b78c1076127c33fe5e772f",
    name: "Amazon RDS",
    image: {
      url: "/icons/amazon-rds.svg",
      caption: "Amazon RDS",
    },
    domain: 0.1,
    color: "#E10098"
  },
  {
    _id: "63b78c76630d3f56aecb9fc7",
    name: "Amazon S3",
    image: {
      url: "/icons/amazon-s3.png",
      caption: "Amazon S3",
    },
    domain: 0.2,
    color: "#E10098"
  },
  {
    _id: "63b78cfe273c167b59d88825",
    name: "Flutter",
    image: {
      url: "/icons/flutter.svg",
      caption: "Flutter",
    },
    domain: 0.3,
    color: "#E10098"
  },
  {
    _id: "63b78d7ce664553063a59c1c",
    name: "Axios",
    image: {
      url: "/icons/axios.svg",
      caption: "Axios",
    },
    domain: 0.6,
    color: "#E10098"
  },
  {
    _id: "63b79296018b5a324935c6f8",
    name: "Next.js",
    image: {
      url: "/icons/next-js.svg",
      caption: "Next.js",
    },
    domain: 0.6,
    color: "#E10098"
  },
  {
    _id: "63b79365d40eafd8d3862a4c",
    name: "Framer Motion",
    image: {
      url: "/icons/framer-motion.png",
      caption: "Framer Motion",
    },
    domain: 0.5,
    color: "#E10098"
  },
].sort((a,b)=>b.domain-a.domain);
