import ClassicTimeline from "@/components/timeline/timeline"

export default function ProjectsPage() {

  const data = [
    {
      period: "2023",
      title: "Water Level Monitoring System",
      description: [
        "Developed an IoT-based system to monitor water levels in real time using a UV/water level sensor.",
        "Interfaced the sensor with a microcontroller to detect different water level thresholds.",
        "Implemented visual indications using LEDs/buzzer to alert overflow or low water conditions.",
        "Focused on accurate sensing through calibration and real-time data processing.",
        "Helped in preventing water wastage and improving efficient water management.",
      ],
      status :'completed'
    },

    {
      period: "2024",
      title: "Real-Time Weather App",
      description: [
        "Built an interactive weather application using HTML, CSS, and JavaScript to display real-time climate details.",

        "Integrated a third-party weather API to fetch live temperature, humidity, and weather conditions.",

        "Implemented search functionality allowing users to check weather for any city.",

        "Added input validation and error handling for invalid locations and network issues.",

        "Designed a responsive and user-friendly interface for both mobile and desktop users."
      ],
      status :'completed'
    },

    {
      period: "2025",
      title: "Helpexa Platform",
      description: [
        "Created a web-based platform to digitalize hostel communication and management processes.",
        "Implemented a complaint submission module where hostelers can raise issues through the system.",
        "Developed an admin dashboard to view, manage, and track all registered complaints.",
        "Enabled status updates such as Pending, In Progress, and Resolved for better transparency and workflow tracking.",
        "Integrated Nodemailer to send email notifications to students whenever complaint status is updated.",
        "Built the application using Next.js for frontend & backend APIs and MSSQL for secure data storage.",
        "Designed a responsive and user-friendly interface for both students and administrators.",
      ],
      status :'ongoing'
    }
  ]

  return (
    <div>
      {/* <h1>Project Journey</h1> */}

      <ClassicTimeline items={data} />
    </div>
  )
}
