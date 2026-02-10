'use client'

import React, { useState } from 'react'
import { Input, Button } from 'antd'
import style from './style.module.css'
import { EditOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const { TextArea } = Input

const ContactPage = () => {

  const [username, setUsername] = useState('')
  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')

  const Handleform = async (e: any) => {
    e.preventDefault()

    const request = await fetch('/api/sendmail', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name: username, mail, msg })
    })

    setUsername('')
    setMail('')
    setMsg('')

    console.log(username, mail, msg)

  }

  return (
    <div className={style.contact_div}>
      <h2>Contact </h2>
      <div className={style.contact_subdiv}>
        <div className={style.right_contact_div}>

          <form onSubmit={Handleform}>

            <Input
              placeholder="Your name"
              type="text"
              className={style.input}
              prefix={<UserOutlined />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="Your email"
              className={style.input}
              type="email"
              prefix={<MailOutlined />}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <div className={style.textareaWrapper}>
              <EditOutlined className={style.textareaIcon} />

              <TextArea
                rows={4}
                placeholder="Edit your message here"
                value={msg}
                className={style.textarea}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <Button type="primary" htmlType="submit">
              Send Message
            </Button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default ContactPage
