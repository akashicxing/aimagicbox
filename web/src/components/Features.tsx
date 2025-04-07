import React from 'react'
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Search',
    description: 'Find the perfect AI tool with our powerful search functionality.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Data-Driven Rankings',
    description: 'Discover the most popular and effective tools based on real usage data.',
    icon: ChartBarIcon,
  },
  {
    name: 'Daily Updates',
    description: 'Stay up-to-date with the latest AI tools and innovations.',
    icon: ClockIcon,
  },
  {
    name: 'Verified Tools',
    description: 'All tools are carefully reviewed and verified for quality.',
    icon: CheckCircleIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Our Directory
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            We provide the most comprehensive and up-to-date collection of AI tools.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 