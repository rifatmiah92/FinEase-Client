function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 animate-fade-in">
        <h1 className="text-5xl font-bold text-white mb-8 animate-slide-down">
          About Us
        </h1>
        <div className="text-white/90 space-y-6 text-lg animate-slide-up">
          <p>
            We are passionate developers building modern web applications with
            cutting-edge technologies.
          </p>
          <p>
            Our mission is to create beautiful, functional, and user-friendly
            applications that solve real problems.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold">5.0</div>
              <div className="text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
