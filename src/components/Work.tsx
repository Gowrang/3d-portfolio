import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI Data Analyst",
    category: "Intelligent Web Application",
    tools: "Python, Streamlit, Pandas, Plotly, PyGWalker, DeepSeek API",
    description:
      "An intelligent web application that serves as your personal AI Data Analyst. Upload any CSV dataset, ask questions in plain English, and watch as the AI automatically analyzes the data, provides executive summaries, and builds interactive Plotly charts.",
    link: "https://github.com/Gowrang/ai_data_analyst",
  },
  {
    title: "User Intent Prediction",
    category: "NLP & Production ML System",
    tools: "Python, FastAPI, scikit-learn, DistilBERT, Docker, TF-IDF",
    description:
      "A production-ready multi-label intent classification system for support ticket routing. Classifies tickets into 10 intent categories (billing, login, refund, etc.) using TF-IDF + Logistic Regression or DistilBERT. Includes a FastAPI REST API with batch prediction, Docker deployment ready for AWS ECS/Fargate, and a synthetic 10K-sample dataset generator.",
    link: "https://github.com/Gowrang/user_intent_prediction",
  },
  {
    title: "Crop Predictor",
    category: "ML-based Agricultural Solution",
    tools: "Python, Scikit-learn, Jupyter Notebook, Random Forest",
    description:
      "A high-accuracy crop recommendation system that predicts the best crop to grow based on soil nutrients (N, P, K) and environmental conditions (temperature, humidity, rainfall, pH). Achieves 99.77% accuracy using a Random Forest classifier trained on agricultural datasets.",
    link: "https://github.com/Gowrang/CROP-PREDICTOR",
  },
  {
    title: "Heart Failure Predictor",
    category: "Healthcare AI Application",
    tools: "Python, Deep Learning, Jupyter Notebook, Data Analysis",
    description:
      "A data science project to assess the likelihood of a death event caused by heart failure. Uses 12 clinical features (age, ejection fraction, serum creatinine, etc.) to predict patient mortality risk — designed to help hospitals prioritise treatment for cardiovascular disease patients.",
    link: "https://github.com/Gowrang/Heart-Failure-Predictor",
  },
  {
    title: "Agentic AI Crew",
    category: "Multi-Agent AI System",
    tools: "Python, CrewAI, Supabase, Claude, Gemini, OpenAI, pgvector",
    description:
      "An autonomous multi-agent system with 4 specialised agents (Developer, Task Manager, Research Assistant, Manager) and support for 5 LLM providers including Anthropic Claude, Google Gemini, and OpenAI. Features automatic provider fallback, persistent Supabase storage, and smart task routing based on context.",
    link: "https://github.com/Gowrang/agent-crew",
  },
  {
    title: "Music Player",
    category: "Android Application",
    tools: "Java, Android Studio, Mobile Development",
    description:
      "A native Android music player application built with Java and Android Studio. Features a clean UI for browsing and playing local audio files, with playback controls, playlist management, and media session integration for background playback support.",
    link: "https://github.com/Gowrang/MusicPlayer",
  },
  {
    title: "To-Do List",
    category: "Android Application",
    tools: "Java, Android Studio, SQLite",
    description:
      "A lightweight Android task management application supporting Android 4.4 and below. Users can create tasks with a title and content, mark them done, and edit or delete them. Built with Java using SQLite for persistent local storage and a simple, intuitive dialog-based UX.",
    link: "https://github.com/Gowrang/ToDoList",
  },
];

const Work = () => {
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
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
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
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-btn"
                          data-cursor="disable"
                        >
                          View Project
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
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
