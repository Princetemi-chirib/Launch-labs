"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container - Rounded white card with shadow */}
      <div className="max-w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Headline/Hero Section with Header */}
      <section className="px-4 md:px-8 py-4 md:py-8">
        <div 
          className="mx-auto relative w-full"
          style={{
            maxWidth: '1448px',
            borderRadius: '40px',
            padding: '20px',
          }}
        >
          {/* Header - Centered */}
          <div className="flex justify-center mb-6 relative z-10">
            <Header />
          </div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '1448px' }}
          >
            {/* Left Column - Text Content */}
            <div className="flex flex-col gap-6" style={{ width: '724px' }}>
              {/* Headline */}
              <h1 
                className="text-black"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '56px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                }}
              >
                Empower Your SME with the Tools of Tomorrow.
          </h1>

              {/* Descriptive Paragraph */}
              <p 
                className="text-gray-700 max-w-xl text-base md:text-lg"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                }}
              >
                We build AI-powered systems that help you attract more customers, automate your daily tasks, and make smarter business decisions — effortlessly
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button 
                  className="text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  style={{
                    width: '203px',
                    height: '50px',
                    borderRadius: '40px',
                    paddingTop: '8px',
                    paddingRight: '20px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    gap: '8px',
                    background: 'linear-gradient(to right, #60a5fa, #9333ea)',
                  }}
                >
                  Get Started
                </button>
                <button 
                  className="text-white font-medium hover:bg-teal-800 transition-colors flex items-center justify-center"
                  style={{
                    width: '203px',
                    height: '50px',
                    borderRadius: '40px',
                    paddingTop: '8px',
                    paddingRight: '20px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    gap: '8px',
                    backgroundColor: '#0f766e',
                  }}
                >
                  Book a Demo
                </button>
              </div>
              {/* Mobile hero image */}
              <div className="md:hidden relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/1c5ae816618838e0ddb6348afe0a601debd61f33.jpg"
                  alt="Laptop displaying website"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Desktop Right Column - Image */}
            <div className="hidden md:block relative h-[896px] rounded-r-[40px] overflow-hidden md:-mt-6" style={{ width: '724px' }}>
              <Image
                src="/1c5ae816618838e0ddb6348afe0a601debd61f33.jpg"
                alt="Laptop displaying website"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: '#8C8C8C', opacity: 0.5, mixBlendMode: 'multiply' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

        {/* About Us Section */}
        <section className="px-4 md:px-12 py-12 md:py-16">
          <motion.h2 
            className="text-center text-black mb-12"
            style={{
              fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 500,
              fontSize: '56px',
              lineHeight: '120%',
              letterSpacing: '0%',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto w-full md:w-[1370px] gap-8 md:gap-[100px]"
          >
            {/* Left Column - Image */}
            <div 
              className="relative overflow-hidden mx-auto md:mx-0 w-full h-64 md:w-[674px] md:h-[452px] rounded-[40px]"
            >
              <Image
                src="/1241e9c4e1431ba5c11468f71b0c515369a786cb.jpg"
                alt="Team members around a desk"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="flex flex-col gap-6">
              <h3 
                className="text-black"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '56px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                }}
              >
                Who We Are
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '150%',
                }}
              >
                Launch Labs is a full-service technology and digital marketing agency dedicated to helping small and medium businesses (SMEs) grow smarter, faster, and more efficiently. We specialize in building connected systems that combine web development, automation, and AI to simplify how businesses run.
              </p>
            </div>
          </div>
        </section>
        {/* Mission, Vision, and Why Choose Section */}
        <section className="px-4 md:px-12 py-12 md:py-16">
          <div className="mx-auto w-full md:w-[1370px] flex flex-col gap-16 md:gap-20">
            {/* Row 2: Mission & Vision (text left) | Image right */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[120px]">
              <div className="flex flex-col gap-8 order-2 md:order-1">
                <div className="flex flex-col gap-4">
                  <h3 className="text-black" style={{ fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 500, fontSize: '56px', lineHeight: '120%', letterSpacing: '0%' }}>Our Mission</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '150%' }}>
                    To empower SMEs with smart systems that automate operations, drive sales, and enable data-driven growth, helping business owners save time, cut costs, and scale effortlessly.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-black" style={{ fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 500, fontSize: '56px', lineHeight: '120%', letterSpacing: '0%' }}>Our Vision</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '150%' }}>
                    To become the leading growth partner for African SMEs building a future where every business, no matter its size, can leverage AI and automation to compete on a global scale.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden w-full h-64 md:w-[674px] md:h-[452px] rounded-[40px] mx-auto md:mx-0 order-1 md:order-2">
                <Image src="/510ee954e17b1e8de21402c99c9e5d4d6085d66c.jpg" alt="Conference room meeting" fill className="object-cover" />
              </div>
            </div>

            {/* Row 3: Why Choose (image left) | Text right */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[120px]">
              <div className="relative overflow-hidden w-full h-64 md:w-[674px] md:h-[452px] rounded-[40px] mx-auto md:mx-0">
                <Image src="/5b9e1ae206abe9e648d561e41b818104690d8767.jpg" alt="Workspace with laptop and notebook" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-black" style={{ fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 500, fontSize: '56px', lineHeight: '120%', letterSpacing: '0%' }}>Why Choose Launch Labs</h3>
                <ul className="flex flex-col gap-3 list-disc list-inside text-gray-700" style={{ fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '150%' }}>
                  <li>End-to-end business systems</li>
                  <li>AI-powered automation (Cassidy)</li>
                  <li>Data-driven insights and reporting</li>
                  <li>Seamless CRM and booking integration</li>
                  <li>Targeted ads and lead generation</li>
                  <li>Real-time performance tracking</li>
                  <li>Scalable solutions for SMEs</li>
                  <li>24/7 customer support automation</li>
                  <li>Fast, modern website development</li>
                  <li>Measurable growth and ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="px-6 md:px-12 py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 
                className="text-center text-black mb-4"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '56px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                }}
              >
                Our Services
              </h2>
              <div className="flex flex-col items-start">
                <h3 
                  className="text-black mb-4"
                  style={{
                    fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 500,
                    fontSize: '28px',
                    lineHeight: '74.24px',
                    letterSpacing: '0.64px',
                    verticalAlign: 'middle',
                  }}
                >
                  Smart systems for modern businesses
                </h3>
                <p 
                  className="text-gray-700 w-full text-left whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '150%',
                  }}
                >
                  We build connected solutions that help small and medium enterprises automate operations, attract customers, and grow faster.
                </p>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Custom Website Design */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/2f6286276dfbbf62cdc6b0b7f54f11cf907b7730.jpg"
                    alt="Custom Website Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Custom Website Design</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    We build modern, responsive, and conversion-driven websites that reflect your brand and engage your audience.
                  </p>
                </div>
              </div>

              {/* Card 2: AI Sales & Support Assistant */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/2357fafb8fb717f0c4b08840e297a10bb6e130fd.jpg"
                    alt="AI Sales & Support Assistant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">AI Sales & Support Assistant</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Deploy our AI assistant to handle customer inquiries, calls, and follow-ups and 24/7 support without human downtime.
                  </p>
                </div>
              </div>

              {/* Card 3: Secure Payment Integration */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/a885b96db0ac0074a249ccb0bcfd0045a6f830e1.jpg"
                    alt="Secure Payment Integration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Secure Payment Integration</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Add trusted and seamless payment gateways to make transactions easy and secure.
                  </p>
                </div>
              </div>

              {/* Card 4: CRM Setup & Management */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/8bcdc5fc3ad59cfc1226c899a0dcfe53d2aabc30.jpg"
                    alt="CRM Setup & Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">CRM Setup & Management</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Track leads, manage customer data, and streamline client relationships with integrated CRM solutions.
                  </p>
                </div>
              </div>

              {/* Card 5: Automated Booking Systems */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/2f6286276dfbbf62cdc6b0b7f54f11cf907b7730.jpg"
                    alt="Automated Booking Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Automated Booking Systems</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Simplify scheduling with smart booking tools for appointments, consultations, or services.
                  </p>
                </div>
              </div>

              {/* Card 6: Performance Analytics & Reporting */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/b2d1d8d4bde16335e2f3b4e8da5b9196d2605458.jpg"
                    alt="Performance Analytics & Reporting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Performance Analytics & Reporting</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Get detailed insights into your business performance — track ROI, lead quality, and efficiency with clarity.
                  </p>
                </div>
              </div>

              {/* Card 7: Brand Growth Strategy & Optimization */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/1ad6fa533ba46cf79bd3c25d2ca0fc606cb2dc3a.jpg"
                    alt="Brand Growth Strategy & Optimization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Brand Growth Strategy & Optimization</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Strengthen your brand presence, improve customer experience, and make data-driven decisions to scale sustainably.
                  </p>
                </div>
              </div>

              {/* Card 8: Digital Advertising */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/39bc91949ae924030ebeb6ecb4b918e4324f2d46.png"
                    alt="Digital Advertising"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black font-bold text-xl mb-3">Digital Advertising</h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                    }}
                  >
                    Reach the right audience with optimized ad campaigns that drive traffic, leads, and sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tools We Use Section */}
        <section id="tools" className="py-12">
          <div
            className="mx-auto flex flex-col items-center justify-center overflow-hidden w-full"
            style={{
              width: '100%',
              height: '415px',
              backgroundColor: '#0E6B67',
              borderRadius: '0px'
            }}
          >
            <h2
              className="text-white mb-10"
              style={{
                fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 500,
                fontSize: '56px',
                lineHeight: '120%'
              }}
            >
              Tools We Use
            </h2>
            {/* Marquee container */}
            <div className="relative w-full overflow-hidden py-4">
              <div
                className="flex flex-nowrap items-center gap-10"
                style={{
                  width: '200%',
                  animation: 'scrollX 30s linear infinite'
                }}
              >
                {/* Track (duplicated for seamless loop) */}
                <div className="flex flex-nowrap items-center gap-10">
                  <Image className="shrink-0" src="/56e5607b8ee3df7a5c0c49549b8b84a377a41a0b.png" alt="Logo 1" width={100} height={36} />
                  <Image className="shrink-0" src="/358985bb8303b9609b920f9d89e4df4b9bcb7f5e.png" alt="Logo 2" width={100} height={36} />
                  <Image className="shrink-0" src="/bb0e8e585bed1fd8c1c436e9e4978502598ecc8f.png" alt="Logo 3" width={100} height={36} />
                  <Image className="shrink-0" src="/paystack_logo.svg.png" alt="Paystack" width={130} height={44} />
                  <Image className="shrink-0" src="/39bc91949ae924030ebeb6ecb4b918e4324f2d46.png" alt="Logo 5" width={100} height={36} />
                  <Image className="shrink-0" src="/Symbol.svg.png" alt="Logo 6" width={100} height={36} />
                </div>
                <div className="flex flex-nowrap items-center gap-10">
                  <Image className="shrink-0" src="/56e5607b8ee3df7a5c0c49549b8b84a377a41a0b.png" alt="Logo 1" width={100} height={36} />
                  <Image className="shrink-0" src="/358985bb8303b9609b920f9d89e4df4b9bcb7f5e.png" alt="Logo 2" width={100} height={36} />
                  <Image className="shrink-0" src="/bb0e8e585bed1fd8c1c436e9e4978502598ecc8f.png" alt="Logo 3" width={100} height={36} />
                  <Image className="shrink-0" src="/paystack_logo.svg.png" alt="Paystack" width={130} height={44} />
                  <Image className="shrink-0" src="/39bc91949ae924030ebeb6ecb4b918e4324f2d46.png" alt="Logo 5" width={100} height={36} />
                  <Image className="shrink-0" src="/Symbol.svg.png" alt="Logo 6" width={100} height={36} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works Section (moved below Tools) */}
        <section id="how-it-works" className="px-6 md:px-12 py-12 md:py-16">
          <h2
            className="text-center text-black mb-10"
            style={{
              fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 500,
              fontSize: '56px',
              lineHeight: '120%'
            }}
          >
            How It Works
          </h2>

          {/* Block 1 */}
          <div
            className="mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            style={{
              width: '1423px',
              height: '511px',
              backgroundColor: '#EFF7F7',
              borderRadius: '25px',
            }}
          >
            <div
              className="relative overflow-hidden w-full h-64 md:w-[660.2px] md:h-[511px] rounded-[25px] md:ml-[45px]"
            >
              <Image src="/eab59bff8ec9e5980ed997420f00422ae4276b75.jpg" alt="Build Your System" fill className="object-cover" />
            </div>
            <div className="px-6">
              <h3
                className="text-black mb-4"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '32px'
                }}
              >
                1. Build Your System
              </h3>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                We create everything your business needs to run online — beautifully designed websites, seamless integrations, and an AI-powered assistant that never sleeps.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div
            className="mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            style={{
              width: '1423px',
              height: '511px',
              backgroundColor: '#EFF7F7',
              borderRadius: '25px',
            }}
          >
            <div className="px-6 order-2 md:order-1">
              <h3
                className="text-black mb-4"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '32px'
                }}
              >
                2. Run Ads & Automation
              </h3>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                We help you reach your ideal customers with data-backed advertising and smart automation. Workflows make sure leads never fall through the cracks.
              </p>
            </div>
            <div
              className="relative overflow-hidden order-1 md:order-2 w-full h-64 md:w-[660.2px] md:h-[511px] rounded-[25px] md:ml-[45px]"
            >
              <Image src="/8bcdc5fc3ad59cfc1226c899a0dcfe53d2aabc30.jpg" alt="Run Ads & Automation" fill className="object-cover" />
            </div>
          </div>

          {/* Block 3 */}
          <div
            className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            style={{
              width: '1423px',
              height: '511px',
              backgroundColor: '#EFF7F7',
              borderRadius: '25px',
            }}
          >
            <div
              className="relative overflow-hidden w-full h-64 md:w-[660.2px] md:h-[511px] rounded-[25px] md:ml-[45px]"
            >
              <Image src="/f16b8f933cb17f331112d5ec8de1e942facaac45.jpg" alt="See Results & Decide" fill className="object-cover" />
            </div>
            <div className="px-6">
              <h3
                className="text-black mb-4"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '32px'
                }}
              >
                3. See Results & Decide
              </h3>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                We deliver real-time performance dashboards and insights so you always know what’s working. Make informed decisions with clarity.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Us Section (placed under How It Works) */}
        <section id="contact" className="px-6 md:px-12 py-16">
          <div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            style={{ backgroundColor: '#EFF7F7', borderRadius: '25px', padding: '32px' }}
          >
            {/* Left: Simple form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none"
              />
              <textarea
                placeholder="How can I help?*"
                className="w-full min-h-40 rounded-md border border-gray-300 bg-white p-4 text-gray-900 outline-none"
              />
              <button
                type="button"
                className="mt-2 w-full sm:w-fit rounded-md bg-black px-6 py-3 text-white hover:opacity-90"
              >
                Get In Touch
              </button>
            </form>

            {/* Right: Copy */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-black"
                style={{
                  fontFamily: 'var(--font-gordita), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '48px',
                  lineHeight: '120%'
                }}
              >
                Send a message to us and
                let’s grow your business
                together
              </h2>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '150%'
                }}
              >
                Our team is ready to build your digital system, from AI and automation to websites and marketing — everything you need to grow smarter and faster.
              </p>
            </div>
          </div>
        </section>
         {/* CTA Banner Section (under Contact) */}
        <section className="py-8" id="cta-banner">
          <div
            className="mx-auto relative flex items-center justify-center w-full"
            style={{
              width: '100%',
              height: '415px',
              backgroundColor: '#ffffff',
            }}
          >
            <div
              className="flex flex-col items-center justify-center text-center gap-2 md:absolute w-[90%] md:w-[1180px]"
              style={{
                top: '63px',
                left: '166px',
                height: '312px',
                borderRadius: '40px',
                paddingTop: '46px',
                paddingRight: '20px',
                paddingBottom: '46px',
                paddingLeft: '20px',
                backgroundImage:
                  "linear-gradient(0deg, #38B6FFC4, #38B6FFC4), url('/1c72f017a2c91c9a546007b85a375e8665f722e9.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                gap: '10px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-euclid-circular), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 500,
                  fontSize: '40px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#000',
                }}
              >
                Everything Your Business Needs to Run, Grow & Succeed. All in One System
              </h3>
              <button
                className="rounded-lg px-6 py-3 text-black bg-white/90 hover:bg-white"
                style={{ borderRadius: '40px' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
        <Footer />
        
        </div>
    </div>
  );
}
