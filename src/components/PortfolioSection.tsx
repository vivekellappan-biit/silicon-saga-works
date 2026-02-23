import { motion } from "framer-motion";

const arulvakkuScreenshots = [
  "https://play-lh.googleusercontent.com/KqLE5c9ZMUtUEBEWxJeszB4NbWa7Mf2mOC582wwy3F-W5FGQaobf7t3qiByXWBp6TwRD=w1052-h592",
  "https://play-lh.googleusercontent.com/aLVz6N3r2MJI1Gcew4MEKsktkWM4ZMDfGBFcfuidZJRGIyGbNsQ2aJvMJyTMq89rIA=w1052-h592",
  "https://play-lh.googleusercontent.com/hL8HqEFt-OivToDgoqsurxStaXf0UDNrbRVVmgQRfKUt2iFRLfA9xQ2CqhdLpzfxYjo=w1052-h592",
  "https://play-lh.googleusercontent.com/WeZabjko8QU-mdCQDYuB2z5O5yFXTUSrtMG5WjzQiakO-07Ef9OTvHbyNh4TpzpxfALe=w1052-h592",
];

const projects = [
  {
    title: "Tamil Bible RC - Arulvakku",
    description:
      "Android app for Tamil-speaking Christians with Bible reading, liturgical content, prayers, and media resources.",
    client: "arulvakku.com",
    rating: "4.53",
    ratings: "1,080",
    reviews: "370",
    downloads: "100,000+",
    category: "Books & Reference",
    updated: "Jan 5, 2026",
    url: "https://play.google.com/store/apps/details?id=com.arulvakku&hl=en_IN&gl=in",
    screenshots: arulvakkuScreenshots,
  },
  {
    title: "VaThala Health Expert",
    description:
      "Healthcare provider app for managing consultations, schedules, settlements, and patient workflows.",
    client: "vathala.com",
    rating: "4.81",
    ratings: "299",
    reviews: "252",
    downloads: "10,000+",
    category: "Medical",
    updated: "Jan 6, 2026",
    url: "https://play.google.com/store/apps/details?id=com.vathalaServiceIndividual&hl=en_IN&gl=in",
    screenshots: [
      "https://play-lh.googleusercontent.com/6AIdAunZ7HIeWbytPf_ptod09vd0mEzIoPK-FqkQSXbyR7rE0sh3UBLbL_ckykJFsfAA=w1052-h592",
      "https://play-lh.googleusercontent.com/-E5qbLnbXVfl3nTCMdSRlBTmxjspOatk5zmpP-5mBmH_Z9jcSclCfa_ca6m1wvjnPPVk=w1052-h592",
      "https://play-lh.googleusercontent.com/zkXodZC9B0k4gOBp18Dv18lULYtbNfLSIN2aGXWYA-lZNpDrR9NBKFaDdNjov6nOi4Q=w1052-h592",
      "https://play-lh.googleusercontent.com/SHhGpYZoRXBcWSfCUlXfg0Zvz7ek25zqbxPHoc1upxqb5CG-UsWpDwq3wV5XqR31kVU=w1052-h592",
    ],
  },
  {
    title: "VaThala",
    description:
      "User-side healthcare app for booking doctor consultations and home healthcare services.",
    client: "vathala.com",
    rating: "4.65",
    ratings: "115",
    reviews: "90",
    downloads: "10,000+",
    category: "Medical",
    updated: "Dec 31, 2025",
    url: "https://play.google.com/store/apps/details?id=com.androidVathalaUser&hl=en_IN&gl=in",
    screenshots: [
      "https://play-lh.googleusercontent.com/2K3odsKVBNjHHdaOF6D9DSu0HnYnI-49Jzh9h2zDC5bvI9M5BFbz1tKavssVxyHxYGA=w1052-h592",
      "https://play-lh.googleusercontent.com/azg9Onn67fsUs582hQcQyeT4h7OrwVMVcLFwMpNhimcQ6AGIHNCGVU0fGy2t_AgEs-A=w1052-h592",
      "https://play-lh.googleusercontent.com/yA_b6tjShs9FUd5wFNwdE5zQJiY3oQmxVzjkH83Wz9MHb0kLIAsRAEMcOpizBD8pIGk=w1052-h592",
      "https://play-lh.googleusercontent.com/BlXqhMfY9RbLRLuq_Rl8IHZCuk5We4Y7y01eSujQMlpB_5s6l4qpPg5HyEgR6IsShw=w1052-h592",
    ],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-32 bg-background px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Recent Works</h2>
        <p className="text-muted-foreground mt-5 max-w-md mx-auto text-lg">
          Recent products shipped for real users.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto mt-12 grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-card-foreground">{project.title}</h3>
            <p className="text-muted-foreground mt-3">{project.description}</p>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.screenshots.map((screenshot, screenshotIndex) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                  loading="lazy"
                  className="w-full max-w-[220px] mx-auto h-auto rounded-xl border border-border object-contain"
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-3">
              Client:{" "}
              <a
                href={`https://${project.client}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {project.client}
              </a>
            </p>

            <div className="flex flex-wrap gap-2 mt-5 text-sm">
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Rating: {project.rating}
              </span>
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Ratings: {project.ratings}
              </span>
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Reviews: {project.reviews}
              </span>
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Downloads: {project.downloads}
              </span>
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Category: {project.category}
              </span>
              <span className="rounded-full border border-border px-3 py-1 bg-background">
                Updated: {project.updated}
              </span>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View on Google Play →
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
