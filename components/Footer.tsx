'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Beauty Analytics</h3>
            <p className="text-gray-600 text-sm mb-4">
              Big Data-based cosmetic store analytics platform
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 hover:text-soft-beige transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-soft-beige transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-soft-beige transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-soft-beige transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-gray-900 transition-smooth">Home</a></li>
              <li><a href="/about" className="hover:text-gray-900 transition-smooth">About</a></li>
              <li><a href="/features" className="hover:text-gray-900 transition-smooth">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/docs" className="hover:text-gray-900 transition-smooth">Documentation</a></li>
              <li><a href="/blog" className="hover:text-gray-900 transition-smooth">Blog</a></li>
              <li><a href="/support" className="hover:text-gray-900 transition-smooth">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@beautyanalytics.com" className="hover:text-gray-900 transition-smooth">
                  info@beautyanalytics.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+77123456789" className="hover:text-gray-900 transition-smooth">
                  +7 (712) 345-67-89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Astana, Kazakhstan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2024 Beauty Analytics Dashboard. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gray-900 transition-smooth">
                Privacy
              </a>
              <a href="/terms" className="hover:text-gray-900 transition-smooth">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}