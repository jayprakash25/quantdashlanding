import React from "react"
import { Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black relative nav-items text-white py-8 border-t border-[#8DC63F]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
            <Link href="https://twitter.com" passHref>
              <Twitter className="w-6 h-6 text-[#8DC63F] hover:text-[#5E8B43] transition-colors duration-300" aria-label="Twitter" />
            </Link>
            <Link href="https://linkedin.com" passHref>
              <Linkedin className="w-6 h-6 text-[#8DC63F] hover:text-[#5E8B43] transition-colors duration-300" aria-label="LinkedIn" />
            </Link>
            <Link href="mailto:contact@quantdash.com" passHref>
              <Mail className="w-6 h-6 text-[#8DC63F] hover:text-[#5E8B43] transition-colors duration-300" aria-label="Email" />
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400 max-w-md">
            © 2024 QuantDash. All rights reserved.

            </p>
          </div>
         
        </div>
        <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
        Empowering quant finance enthusiasts with cutting-edge practice and learning tools.

          </p>
        </div>
      </div>
    </footer>
  )
}