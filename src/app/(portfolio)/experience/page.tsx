import React from 'react'
import ClassicTimeline from '@/components/Exp_timeline/timeline'

const Experience = () => {

  const data = [
    {
      period: "Aug 2025 – Present",
      title: "Software Engineer – Pragmatiq Solutions",
      description: [
        "Joined as an intern and converted to full-time based on performance and technical growth.",
        "Working on a Central Government project focused on developing a high-scale web application using Next.js and modern web technologies.",
        "Contributing to frontend development, API integration, and performance optimization.",
        "Collaborating with cross-functional teams to deliver secure and scalable solutions."
      ],
      address: "Kondapur, Hyderabad, Telangana",
      status: "Internship"
    },
    {
      period: "May 2024 – Jun 2024",
      title: "Industrial Trainee – APTRANSCO",
      description: [
        "Studied end-to-end power generation process through an industrial visit to VTPS (Narla Tatarao Thermal Power Station).",
        "Gained practical knowledge of thermal power plant operations and equipment.",
        "Learned how electrical power is generated, stepped up, and transmitted through high-voltage networks across Andhra Pradesh."
      ],
      address: "Vijayawada, Andhra Pradesh",
      status: "Training"
    },
    {
      period: "Jun 2022 – Aug 2022",
      title: "Project Assistant – Nokia Solutions & Networks India Pvt Ltd",
      description: [
        "Supported engineering teams in inventory management and operational workflows.",
        "Assisted in process optimization within an industrial manufacturing environment.",
        "Prepared and maintained technical and operational documentation.",
        "Contributed to workflow improvements resulting in approximately 15% efficiency gain."
      ],
      address: "Oragadam, Kanchipuram, Tamil Nadu",
      status: "Internship"
    }
  ]
  return (
    <div>
      <ClassicTimeline item={data} />

    </div>
  )
}

export default Experience
