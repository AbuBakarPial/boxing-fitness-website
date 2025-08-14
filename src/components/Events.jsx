'use client';

export default function Events() {
  const events = [
    {
      title: "Let's Make Country Great with Razniti",
      description: "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
      date: "29 May 2021"
    },
    {
      title: "Lets meet & help for education in tax",
      description: "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
      date: "29 May 2021"
    },
    {
      title: "Lets meet for protecting eco system",
      description: "Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.",
      date: "29 May 2021"
    }
  ];

  return (
    <section className="event-section pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 text-center">
            <div className="section-header">
              <h2 className="section-title text-4xl font-bold mb-4">
                OUR <span className="text-red-600">KARATE</span> EVENTS
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mb-30-none mt-12">
          <div className="col-xl-6 col-lg-6 mb-8 lg:mb-0">
            <div className="event-thumb rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Event Background Image</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="event-item-area space-y-6">
              {events.map((event, index) => (
                <div key={index} className="event-item bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="event-content">
                    <div className="event-post-meta flex flex-wrap items-center gap-4 mb-4">
                      <div className="event-badge bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        <span>Event</span>
                      </div>
                      <div className="event-date text-gray-500 text-sm">
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <h3 className="title text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                      <a href="#" className="hover:text-red-600 transition-colors">
                        {event.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}