'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Asidebar from '@/components/sidebar/sidebar'
import style from './layout.module.css'
import ThemeToggle from '@/components/theme-toggle/page'

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <section className={style.maincontainer}>
      <section className={style.leftcontainer}>
        <Asidebar />
      </section>

      <section className={style.rightcontainer}>
        <nav>
          <Link
            href="/about"
            title='About'
            className={pathname.includes('/aboutme') ? style.active
              : style.inactive}
          >
            About me
          </Link>

          <Link
            href="/projects"
            title='Projects'
            className={pathname.includes('/projects') ? style.active
              : style.inactive}
          >
            Projects
          </Link>

          <Link
            href="/experience"
            title='Experience'
            className={pathname.includes('/experience') ? style.active
              : style.inactive}
          >
            Experience
          </Link>

          {/* <Link
            href="/achievements"
            className={pathname.includes('/achievements') ? style.active
              : style.inactive}
          >
            Achievements
          </Link> */}

          <Link
            href="/contact"
            title='contact'
            className={pathname.includes('/contactme') ? style.active
              : style.inactive}
          >
            Contact
          </Link>
          <ThemeToggle/>

        </nav>
        <div className={style.children}>
          {children}
        </div>
      </section>
    </section>
  )
}
