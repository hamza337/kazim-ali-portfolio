import Image from 'next/image';
import Link from 'next/link';
import { getBlogBySlug, blogs } from '../../../components/blogContent/blogs';
import BlogSlider from '../../../components/blogContent/blogSlider';

export default function BlogPost({ slug }) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/blogs" 
        className="text-blue-500 hover:text-blue-600 transition-colors duration-200 mb-4 inline-block"
      >
        ← Back to Blogs
      </Link>
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            width={400}
            height={400}
            src={blog.imageUrl}
            alt={blog.title}
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="flex justify-between items-center text-gray-500 mb-4">
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">{blog.content}</p>
        </div>
      </article>
      <div className="mt-12">
        <BlogSlider blogs={blogs} currentSlug={slug} />
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
