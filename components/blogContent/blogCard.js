import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          width={400}
          height={400}
          src={blog.imageUrl}
          alt={blog.title}
          objectFit="cover"
        />
      </div>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
        <div>
          <span>{blog.date}</span>
          <Link href={`/blogs/${blog.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

