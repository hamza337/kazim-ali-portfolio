import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="card shadow-lg border-0 rounded-3 h-100">
        <div className="position-relative overflow-hidden rounded-3" style={{ height: '200px' }}>
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={500}
            height={200}
            style={{ objectFit: 'cover' }}
            className="w-100 h-100"
          />
        </div>
        <div className="card-body text-center d-flex flex-column justify-content-between mb-3">
          <h5
            className="card-title text-black fw-semibold mb-2"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {blog.title}
          </h5>
          <p
            className="card-text text-muted mb-3"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {blog.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
