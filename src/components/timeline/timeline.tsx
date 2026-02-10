'use client'

import "./timeline.css"
import { Tooltip } from "antd"

type Item = {
  period: string
  title: string
  description: string[]
  status : string
}

export default function ClassicTimeline({
  items,
}: {
  items: Item[]
}) {
  return (
    <div className="timeline">

      <div className="timeline-line"></div>
      {/* MAIN LINE */}

      {items.map((item, index) => (
        <div key={index} className="timeline-item">

          {/* DOT */}
          <Tooltip title={`Status : ${item.status}`} ><div className={item.status}></div></Tooltip>


          {/* CONTENT */}
          <div>
            <p className="timeline-date">
              {item.period}
            </p>

            <h3 className="timeline-title">
              {item.title}
            </h3>
            <ul className="bullet-points">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

        </div>
      ))}

    </div>
  )
}
