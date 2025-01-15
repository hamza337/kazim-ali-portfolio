export const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content: "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this blog post, we'll cover the basics of Next.js and walk you through creating your first app. We'll discuss key concepts like pages, routing, and data fetching, and show you how to leverage Next.js features to build fast, scalable web applications.Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this blog post, we'll cover the basics of Next.js and walk you through creating your first app. We'll discuss key concepts like pages, routing, and data fetching, and show you how to leverage Next.js features to build fast, scalable web applications.Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this blog post, we'll cover the basics of Next.js and walk you through creating your first app. We'll discuss key concepts like pages, routing, and data fetching, and show you how to leverage Next.js features to build fast, scalable web applications.Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this blog post, we'll cover the basics of Next.js and walk you through creating your first app. We'll discuss key concepts like pages, routing, and data fetching, and show you how to leverage Next.js features to build fast, scalable web applications.",
    author: "John Doe",
    date: "2023-05-15",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    excerpt: "Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs.",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this comprehensive guide, we'll explore the core concepts of Tailwind CSS, including its utility classes, responsive design system, and customization options. You'll learn how to leverage Tailwind's powerful features to create stunning, performant designs without writing custom CSS.",
    author: "Jane Smith",
    date: "2023-05-20",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    slug: "the-power-of-react-hooks",
    excerpt: "Explore how React Hooks can simplify your code and make your components more reusable.",
    content: "React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class. In this blog post, we'll dive deep into the world of React Hooks, exploring popular hooks like useState, useEffect, and useContext. We'll also look at how to create custom hooks to encapsulate and reuse stateful logic across your application.",
    author: "Alice Johnson",
    date: "2023-05-25",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    excerpt: "Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs.",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this comprehensive guide, we'll explore the core concepts of Tailwind CSS, including its utility classes, responsive design system, and customization options. You'll learn how to leverage Tailwind's powerful features to create stunning, performant designs without writing custom CSS.",
    author: "Jane Smith",
    date: "2023-05-20",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    slug: "the-power-of-react-hooks",
    excerpt: "Explore how React Hooks can simplify your code and make your components more reusable.",
    content: "React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class. In this blog post, we'll dive deep into the world of React Hooks, exploring popular hooks like useState, useEffect, and useContext. We'll also look at how to create custom hooks to encapsulate and reuse stateful logic across your application.",
    author: "Alice Johnson",
    date: "2023-05-25",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    excerpt: "Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs.",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this comprehensive guide, we'll explore the core concepts of Tailwind CSS, including its utility classes, responsive design system, and customization options. You'll learn how to leverage Tailwind's powerful features to create stunning, performant designs without writing custom CSS.",
    author: "Jane Smith",
    date: "2023-05-20",
    imageUrl: "/placeholder.jpeg"
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    slug: "the-power-of-react-hooks",
    excerpt: "Explore how React Hooks can simplify your code and make your components more reusable.",
    content: "React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class. In this blog post, we'll dive deep into the world of React Hooks, exploring popular hooks like useState, useEffect, and useContext. We'll also look at how to create custom hooks to encapsulate and reuse stateful logic across your application.",
    author: "Alice Johnson",
    date: "2023-05-25",
    imageUrl: "/placeholder.jpeg"
  }
];

export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
}

