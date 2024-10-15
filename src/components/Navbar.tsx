'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`text-white py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'} nav-items`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="white" />
            <path
              d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z"
              fill="black"
            />
          </svg>
          <span className="text-2xl font-bold">QuantDash</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-300">Contact</a>
          <Button className="bg-[#8DC63F] hover:bg-[#7AB62F] text-black font-semibold">
            Sign me up
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Contact</a>
            <Button className="bg-[#8DC63F] hover:bg-[#7AB62F] text-black font-semibold w-full">
              Sign me up
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}