"use client";
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to architect Node.js microservices that can handle millions of requests",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "Backend",
      image: "/images/blog/microservices.jpg",
      slug: "scalable-microservices-nodejs"
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt: "Advanced strategies to make your React applications lightning fast",
      date: "May 22, 2023",
      readTime: "6 min read",
      category: "Frontend",
      image: "/images/blog/react-performance.jpg",
      slug: "react-performance-optimization"
    },
    {
      id: 3,
      title: "Python vs Node.js for Backend Development",
      excerpt: "A comprehensive comparison of these two popular backend technologies",
      date: "April 10, 2023",
      readTime: "10 min read",
      category: "Backend",
      image: "/images/blog/python-node.jpg",
      slug: "python-vs-nodejs"
    },
    {
      id: 4,
      title: "Next.js Authentication Best Practices",
      excerpt: "Secure your Next.js applications with these authentication patterns",
      date: "March 5, 2023",
      readTime: "7 min read",
      category: "Full Stack",
      image: "/images/blog/nextjs-auth.jpg",
      slug: "nextjs-authentication"
    },
    {
      id: 5,
      title: "State Management in Modern React Applications",
      excerpt: "Comparing Redux, Context API, Zustand, and other solutions",
      date: "February 18, 2023",
      readTime: "9 min read",
      category: "Frontend",
      image: "/images/blog/state-management.jpg",
      slug: "react-state-management"
    },
    {
      id: 6,
      title: "Deploying Django Applications to Production",
      excerpt: "A step-by-step guide to deploying Django with Docker and AWS",
      date: "January 30, 2023",
      readTime: "12 min read",
      category: "DevOps",
      image: "/images/blog/django-deploy.jpg",
      slug: "django-production-deployment"
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Shahriar's Blog | Full Stack Developer</title>
        <meta name="description" content="Technical articles about web development, React, Node.js, Python and more" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Developer Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sharing knowledge about web development, programming tips, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Post</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img
                  className="h-64 w-full object-cover md:h-full"
                  src="/images/blog/featured-post.jpg"
                  alt="Featured post cover"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                  Featured • {blogPosts[0].category}
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`} className="block mt-1">
                  <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
                    {blogPosts[0].title}
                  </h3>
                </Link>
                <p className="mt-3 text-gray-600">{blogPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-500">{blogPosts[0].date} • {blogPosts[0].readTime}</span>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read full article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get notified about new articles, tutorials, and development resources.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;