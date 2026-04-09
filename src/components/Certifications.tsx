import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    category: "Professional Certificate",
    tools: "Google (Coursera)",
    description: "An 8-course specialized program covering Foundations of Cybersecurity, Play It Safe, Linux & SQL, Assets & Threats, Detection & Response, Network Security, and Python Automation.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "AI Engineer Agentic Track",
    category: "Training Certificate",
    tools: "Udemy",
    description: "Comprehensive training track on The Complete Agent & Multi-Agent Course for building autonomous agents and agentic AI systems.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "Fundamentals of Deep Learning",
    category: "Workshop Certificate",
    tools: "NVIDIA Deep Learning Institute (DLI)",
    description: "Completion of workshop exploring fundamental techniques in deep learning and neural networks.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "Supervised Machine Learning",
    category: "Course Certificate",
    tools: "DeepLearning.AI & Stanford Online",
    description: "Foundational machine learning concepts for regression and classification tasks.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "Advanced Learning Algorithms",
    category: "Course Certificate",
    tools: "DeepLearning.AI & Stanford Online",
    description: "Advanced learning algorithms training from the Machine Learning specialization.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "Android App Development for Beginners",
    category: "Course Certificate",
    tools: "GeeksforGeeks",
    description: "Self-paced foundational course covering basics of Android app development.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  },
  {
    title: "Basics of Python - Part I & II",
    category: "Guided Path Certificate",
    tools: "Code360 by Coding Ninjas",
    description: "Complete foundational guided path on Python programming fundamentals and coding concepts.",
    link: "https://drive.google.com/drive/folders/1vnwwzrzofx2_0jFEEVFBZnRokYLws5ui?usp=drive_link",
  }
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, certifications.length]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, certifications.length]);

  if (certifications.length === 0) return null;

  return (
    <div className="work-section" id="certifications">
      <div className="work-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous certification"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next certification"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certifications.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="carousel-category">
                          {cert.category}
                        </p>
                        <p className="carousel-description">
                          {cert.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Issuer</span>
                          <p>{cert.tools}</p>
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-btn"
                          data-cursor="disable"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to certification ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
