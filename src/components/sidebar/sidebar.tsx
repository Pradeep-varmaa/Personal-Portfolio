import React from 'react'
import style from './style.module.css'
import { FacebookFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined } from "@ant-design/icons"

const Asidebar = () => {
  return (
    <div className={style.maincontainer}>
      {/* <h2 className={style.mainheading}> <a href="#">Portfolio</a></h2> */}

      <div className={style.head_cont}>
        <img className={style.image} src="/varmas.jpg" alt="" />
        <h3>Pradeep Varma Pothabathula</h3>
        <p>Full-Stack Developer</p>
      </div>
      <div className={style.details}>
        <div className={style.sub_details}>
          <h3>Email</h3>
          <span>:</span>
          <p>  PPVARMAJOBS@GMAIL.COM</p>
        </div>
        <div className={style.sub_details}>
          <h3>Mobile</h3>
          <span>:</span>
          <p>+91 9618795584</p>
        </div>
        <div className={style.sub_details}>
          <h3>Address</h3>
          <span>:</span>
          <p>Maramma Temple Street, L B Cherla, Narasapuram, 534275</p>
        </div>
        {/* <div className={style.sub_details}>
          <h3>Email</h3>
          <span>:</span>
          <p>  PPVARMAJOBS@GMAIL.COM</p>
        </div> */}
      </div>
      <div className={style.socialmedia}>
        <a href="#"><LinkedinFilled className = {`${style.icons} ${style.linkedin}`}/></a>
        <a href="#"><GithubOutlined className = {`${style.icons} ${style.github}`}/></a>
        <a href="#"><FacebookFilled className = {`${style.icons} ${style.facebook}`}/></a>
      </div>

    </div>
  )
}

export default Asidebar
