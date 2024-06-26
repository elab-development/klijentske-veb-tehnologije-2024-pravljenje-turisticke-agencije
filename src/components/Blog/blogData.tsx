import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Tasos",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/tasos.jpg",
    author: {
      name: "Irena Savic",
      image: "/images/blog/author-01.png",
      designation: "Vodic",
    },
    tags: ["More i Plaza"],
    publishDate: "13.08.2024",
  },
  {
    id: 2,
    title: "Tasos",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/tas2.jpg",
    author: {
      name: "Mirko SImic",
      image: "/images/blog/author-02.png",
      designation: "Vodic",
    },
    tags: ["Shoping"],
    publishDate: "18.10.2024",
  },
  {
    id: 3,
    title: "Halkidiki",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/kalamitsi-top-1-1280.jpg",
    author: {
      name: "Milorad Jovic",
      image: "/images/blog/author-03.png",
      designation: "Vodic",
    },
    tags: ["More i Plaza"],
    publishDate: "12.07.2024",
  },
  
];
export default blogData;
