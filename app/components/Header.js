
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'

export default function Header(){
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/profile')
      const profile = await response.json()
      setProfile(profile)
    }
    fetchData()
  }, [])
  return (
    <header className="flex bg-slate-200 px-10 py-2">
      <Link href={`/`}>
        <a className="flex-grow flex items-center">
          <Image src="/adaltas.svg" className='cursor-pointer h-6 mr-5' alt="Adaltas Logo" width={25} height={25} />
          <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
            Web technologies
          </span>
        </a>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
        { profile && (
          <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            <Link href="/profile">
              <a className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
                {profile.username}
                <OutlineUserCircleIcon />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </header>
  )
}
