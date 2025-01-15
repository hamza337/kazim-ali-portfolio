module.exports = [
  { icon: "home", itemName: "Home", link: true, itemRoute: "/", activeClass: "active" },
  { icon: "blog", itemName: "Blogs", link: true, itemRoute: "/blogs", activeClass: "" },
  { 
    icon: "course", 
    itemName: "Courses", 
    link: false, 
    itemRoute: "#", 
    subItems: [
      { itemName: "National Courses", itemRoute: "/national-courses" },
      { itemName: "International Courses", itemRoute: "/international-courses" },
    ],
  },
  { icon: "testimonial", link: true, itemName: "CSS & PMS Essays", itemRoute: "/css-and-pms-essays", activeClass: "" },
  { icon: "portfolio", link: true, itemName: "Student Reviews", itemRoute: "/reviews", activeClass: "" },
];
