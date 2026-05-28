'use client'

import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { ArrowRight, TrendingUp, BarChart3, Zap, Database } from 'lucide-react'

export default function Home() {
  const { t } = useTranslation()

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor sales data in real-time with interactive charts'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify market trends and seasonal patterns'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Process large datasets with advanced algorithms'
    },
    {
      icon: Zap,
      title: 'AI Recommendations',
      description: 'Get intelligent insights for business decisions'
    }
  ]

  const categories = [
    { name: 'Skincare', emoji: '🧴' },
    { name: 'Makeup', emoji: '💄' },
    { name: 'Perfume', emoji: '🌹' },
    { name: 'Haircare', emoji: '💇' },
    { name: 'Korean Cosmetics', emoji: '✨' }
  ]

  return (
    <div className="bg-gradient-soft min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-700">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/dashboard" className="btn-primary flex items-center gap-2">
                {t('hero.startAnalytics')}
                <ArrowRight size={20} />
              </Link>
              <Link href="/dashboard" className="btn-secondary">
                {t('hero.viewDashboard')}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-soft p-6 h-40 flex flex-col justify-center">
              <div className="text-4xl font-bold gradient-text">2.5M+</div>
              <div className="text-gray-600 text-sm mt-2">Total Sales</div>
            </div>
            <div className="card-soft p-6 h-40 flex flex-col justify-center">
              <div className="text-4xl font-bold gradient-text">45K</div>
              <div className="text-gray-600 text-sm mt-2">Active Customers</div>
            </div>
            <div className="card-soft p-6 h-40 flex flex-col justify-center">
              <div className="text-4xl font-bold gradient-text">1.2K</div>
              <div className="text-gray-600 text-sm mt-2">Products</div>
            </div>
            <div className="card-soft p-6 h-40 flex flex-col justify-center">
              <div className="text-4xl font-bold gradient-text">98%</div>
              <div className="text-gray-600 text-sm mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Powerful Analytics Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card-soft p-8 text-center hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center">
                    <Icon className="text-gray-700" size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Cosmetic Categories
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="card-soft p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{category.emoji}</div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-warm rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start analyzing your cosmetic store data today with our comprehensive Big Data platform
          </p>
          <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}