import bannerImg from '../../assets/banner-stack.png'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* ── Text Column ─────────────────────────── */}
        <div className="flex-1 text-center md:text-left">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-5"
          >
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Explore frontend, backend, database, and tooling options.
            Compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
            <a
              href="#technologies"
              className="brand-gradient-bg text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 w-full sm:w-auto text-center"
            >
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="border border-gray-300 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ── Illustration Column ───────────────── */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Isometric illustration of a technology stack with layered components"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
            width={480}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
