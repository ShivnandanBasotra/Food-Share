import React from 'react';
import { ArrowRight, Utensils, Users, Truck } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">FoodShare</div>
          <div className="space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300">
              Sign Up
            </button>
            <button className="bg-white hover:bg-green-100 text-green-500 px-4 py-2 rounded-full border border-green-500 transition duration-300">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-[600px] bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
                <span className="inline-block animate-float">Turning</span>{' '}
                <span className="inline-block animate-float animation-delay-300">Leftovers</span>{' '}
                <span className="inline-block animate-float animation-delay-600">into</span>{' '}
                <span className="inline-block animate-float animation-delay-900">Lifelines</span>
              </h1>
              <p className="text-xl mb-8 animate-fade-in-up animation-delay-1200">Connect excess food with those in need</p>
              <button className="bg-white text-green-500 hover:bg-green-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center mx-auto animate-fade-in-up animation-delay-1500">
                Get Started
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2236%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22 stroke-opacity=%220.1%22/%3E%3C/svg%3E')] bg-repeat opacity-20"></div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Utensils className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Restaurants & Venues</h3>
                <p>List your excess food for donation</p>
              </div>
              <div className="text-center">
                <Truck className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">We Deliver</h3>
                <p>We handle the logistics of food collection and delivery</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Feeding the Needy</h3>
                <p>Your excess food reaches those who need it most</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Partner with us to reduce food waste and make a difference in your community.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Become a Partner
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 FoodShare. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </div>
  );
};

export default LandingPage;