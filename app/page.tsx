'use client';

import { ArrowRight, BookOpen, Users2, Bell, School2, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-rose-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <motion.div 
                variants={item}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500 leading-tight mb-6">
                  Smart Classroom
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your teaching experience with our intelligent classroom management platform.
                </p>
                <motion.div 
                  variants={item}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white text-lg h-14 px-8 transition-all duration-300"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg h-14 px-8 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                variants={item}
                className="flex-1 relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-rose-500/20 mix-blend-overlay"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Digital Classroom"
                    className="w-full rounded-2xl"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative" id="features">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={item}
                className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500"
              >
                Smart Features for Modern Education
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <School2 className="h-12 w-12" />,
                    title: "Organizations",
                    description: "Manage multiple classrooms and departments with ease."
                  },
                  {
                    icon: <Users2 className="h-12 w-12" />,
                    title: "Teachers",
                    description: "Create and organize lessons, assignments, and grades."
                  },
                  {
                    icon: <BookOpen className="h-12 w-12" />,
                    title: "Students",
                    description: "Access materials, submit work, and track progress."
                  },
                  {
                    icon: <Bell className="h-12 w-12" />,
                    title: "Notifications",
                    description: "Stay updated with real-time alerts and announcements."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="h-full"
                  >
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border-2 group hover:border-purple-500">
                      <div className="text-purple-600 group-hover:text-rose-500 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 mt-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={item}
                className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500"
              >
                Get Started in Three Simple Steps
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Create Organization',
                    description: 'Set up your organization and create virtual classrooms'
                  },
                  {
                    step: '02',
                    title: 'Add Members',
                    description: 'Invite teachers and students to join your platform'
                  },
                  {
                    step: '03',
                    title: 'Start Learning',
                    description: 'Begin creating and sharing educational content'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className="text-center relative"
                  >
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 text-white text-2xl font-bold mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        {item.step}
                      </div>
                      {/* {index < 2 && (
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-rose-500"></div>
                      )} */}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={item}
                className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500"
              >
                What Our Users Say
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'High School Teacher',
                    content: 'Smart Classroom has transformed how I manage my virtual classroom. The interface is intuitive and my students love it!'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'University Professor',
                    content: 'The ability to organize course materials and track student progress has made online teaching much more efficient.'
                  },
                  {
                    name: 'Emily Davis',
                    role: 'Student',
                    content: 'I can easily access all my course materials and assignments in one place. The notification system keeps me on track.'
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                  >
                    <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border-2 hover:border-purple-500">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-rose-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-purple-600">{testimonial.role}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-rose-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h2 
                variants={item}
                className="text-4xl lg:text-5xl font-bold mb-8 text-white"
              >
                Ready to Transform Your Classroom?
              </motion.h2>
              <motion.p 
                variants={item}
                className="text-xl mb-8 text-white/90"
              >
                Join thousands of educators and students already using Smart Classroom.
              </motion.p>
              <motion.div variants={item}>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg h-14 px-8 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started for Free <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Home</a></li>
                  <li><a href="#features" className="hover:text-rose-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Organizations</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Teachers</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Students</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <p className="mb-4">Stay updated with our latest features and news.</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-rose-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-rose-400 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-rose-400 transition-colors">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; 2025 Smart Classroom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}