import React, { useState } from "react";
import DataCourses from "../data/DataCourses";
import "../css/Courses.css";
import { motion } from "framer-motion";

const categoryColors = {
  "Full-Stack": "#8324c7",
  "Fintech": "#00c896",
  "Academic": "#e6a817",
  "Client Work": "#3b82f6",
  "System Design": "#f97316",
  "Desktop App": "#06b6d4",
  "Mobile App": "#ec4899",
  "Backend": "#6366f1",
};

const CategoryTags = ({ categories }) => (
  <div className="project-categories">
    {categories?.map((cat, i) => (
      <span
        key={i}
        className="project-category-tag"
        style={{ "--cat-color": categoryColors[cat] || "#8324c7" }}
      >
        {cat}
      </span>
    ))}
  </div>
);

const FeaturedProject = ({ project }) => {
  const { title, description, image, categories, tags, links, link, target } = project;

  return (
    <motion.div
      className="featured-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="featured-badge">Featured</div>
      <div className="featured-inner">
        <div className="featured-image-side">
          <img src={image} alt={title} className="featured-image" />
          <div className="featured-image-glow" />
        </div>
        <div className="featured-content-side">
          <CategoryTags categories={categories} />
          <h3 className="featured-title">{title}</h3>
          <p className="featured-description">{description}</p>
          <div className="project-tags">
            {tags?.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links-row">
            {links?.length > 0 ? (
              links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                  <span>{l.label}</span>
                  <ArrowIcon />
                </a>
              ))
            ) : (
              <a href={link} target={target || "_blank"} rel="noopener noreferrer" className="project-action-btn">
                <span>View Project</span>
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { title, description, link, image, images, target, categories, tags, links } = project;
  const hasMultipleImages = images && images.length > 1;
  const [imgIndex, setImgIndex] = useState(0);
  const displayImage = hasMultipleImages ? images[imgIndex] : image;

  const goPrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const goNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <motion.div
      className="project-card"
      style={{ "--card-index": index }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={`project-image-container ${hasMultipleImages ? "project-image-container--zoom-out" : ""}`}>
        <img
          src={displayImage}
          alt={title}
          className="project-image"
          key={imgIndex}
        />
        {hasMultipleImages && (
          <div className="project-image-nav" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-image-nav-btn prev" onClick={goPrev} aria-label="Previous image">
              <ChevronIcon dir="left" />
            </button>
            <button type="button" className="project-image-nav-btn next" onClick={goNext} aria-label="Next image">
              <ChevronIcon dir="right" />
            </button>
            <span className="project-image-counter">{imgIndex + 1} / {images.length}</span>
          </div>
        )}
        <div className="card-categories-overlay">
          <CategoryTags categories={categories} />
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags?.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links-row">
          {links?.length > 0 ? (
            links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                <span>{l.label}</span>
                <ArrowIcon />
              </a>
            ))
          ) : (
            <a href={link} target={target || "_blank"} rel="noopener noreferrer" className="project-action-btn">
              <span>Visit Project</span>
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ArrowIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg className="chevron-icon" viewBox="0 0 24 24" style={dir === "left" ? { transform: "rotate(180deg)" } : {}}>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const Courses = () => {
  const sortedCourses = [...DataCourses].sort((a, b) => b.id - a.id);
  const featured = sortedCourses.find((p) => p.featured);
  const rest = sortedCourses.filter((p) => !p.featured);

  const allCategories = [
    "All",
    ...new Set(DataCourses.flatMap((p) => p.categories || []))
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? rest
    : rest.filter((p) => p.categories?.includes(activeFilter));

  return (
    <section className="courses-section">
      <motion.div
        className="courses-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Portfolio</span>
        <h2 className="courses-title">Projects & Work</h2>
        <p className="courses-subtitle">A selection of my recent projects, client work, and academic research.</p>
        <div className="header-line" />
      </motion.div>

      {featured && <FeaturedProject project={featured} />}

      <motion.div
        className="filter-bar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
            style={activeFilter === cat ? { "--cat-color": categoryColors[cat] || "#8324c7" } : {}}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="projects-grid">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="projects-count">
        Showing {filtered.length} of {rest.length} projects
      </div>
    </section>
  );
};

export default Courses;
