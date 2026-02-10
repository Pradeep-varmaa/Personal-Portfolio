import React from 'react'
import style from './timeline.module.css'
import { Tooltip } from 'antd'

type item = {
    period: string
    title: string
    description: string[]
    address: string
    status : string
}

const ClassicTimeline = ({ item }: { item: item[] }) => {
    return (
        <div>

            <div className={style.timeline}>

                <div className={style.timeline_line}></div>
                {item.map((item, index) => (
                    <div key={index} className={style.timeline_item}>

                        {/* DOT */}
                        <Tooltip title={`Status : ${item.status}`} ><div className={style.dot}></div></Tooltip>


                        {/* CONTENT */}
                        <div>
                            <p className={style.timeline_date}>
                                {item.period}
                            </p>

                            <h3 className={style.timeline_title}>
                                {item.title}
                            </h3>
                            <ul className={style.bullet_points}>
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ClassicTimeline
