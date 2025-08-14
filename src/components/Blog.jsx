'use client';

export default function Blog() {
  const blogPosts = [
    {
      title: "THE UPCOMING WBC CHAMPION SHIPS 2022 IN FEB",
      excerpt: "Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.",
      date: "Feb 10, 2022",
      author: "Sword Joy",
      category: "Karate",
      image: '/blog/blog-1.jpg'
    },
    {
      title: "THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORIES",
      excerpt: "Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.",
      date: "Feb 10, 2022",
      author: "Sword Joy",
      category: "Trendy",
      image: '/blog/blog-2.jpg'
    },
    {
      title: "EFFECTIVE STRATEGIES AND TIPS FROM THE BEST",
      excerpt: "Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.",
      date: "Feb 10, 2022",
      author: "Sword Joy",
      category: "Boxing",
      image: '/blog/blog-3.jpg'
    }
  ];

  return (
    <section className="blog-section blog-section-two pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-xl-7 text-center">
            <div className="section-header">
              <h2 className="section-title text-4xl font-bold mb-4">
                LATEST <span className="text-red-600">NEWS</span> FROM SWORD
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="blog-area mt-12">
          <div className="row justify-content-center mb-30-none">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-8">
                <div className="blog-item bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="blog-thumb relative">
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Blog Image</span>
                    </div>
                    <div className="blog-date absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="blog-content p-6">
                    <div className="blog-post-meta flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <span className="user text-gray-600">
                        By : {post.author}
                      </span>
                      <span className="category">
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                          {post.category}
                        </a>
                      </span>
                    </div>
                    <h3 className="title text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-red-600 transition-colors cursor-pointer">
                      <a href="#" className="hover:text-red-600 transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}