"use client"
import React from 'react'
import style from './style.module.css'

const AboutPage = () => {
  return (
    <div>

      <section className={style.about}>
        <h2>About Me</h2>

        <p>
          I am a motivated <strong>Full-Stack Developer</strong> with expertise in
          <strong> Next.js, React, Express.js, and Python</strong>, passionate about building
          scalable and user-friendly web applications. I enjoy transforming ideas into
          real digital solutions with clean architecture and intuitive interfaces.
        </p>

        <p>
          My focus is on creating responsive front-end experiences combined with
          efficient back-end logic, databases, and authentication systems. I follow
          best practices to write <strong>clean, maintainable, and performance-oriented code</strong>.
        </p>

        <p>
          As an <strong>IEEE member</strong> and a <strong>Kabaddi team lead</strong>,
          I have developed leadership, teamwork, and communication skills that help me
          collaborate effectively in professional environments.
        </p>

        <p>
          I am committed to continuous learning and adopting modern technologies to
          deliver impactful and innovative digital solutions.
        </p>
      </section>

    </div>
  )
}

export default AboutPage