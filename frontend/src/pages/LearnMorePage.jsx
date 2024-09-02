import React, { useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Utensils, Truck, Users, Award } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const LearnMorePage = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
    };
    sequence();
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-5xl mx-auto">
          <CardHeader>
            <h2 className="text-2xl font-bold text-green-600">Learn More About FoodShare</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white shadow-md rounded-lg p-8"
                initial={{ y: 50, opacity: 0 }}
                animate={controls}
              >
                <div className="flex items-center justify-between mb-6">
                  <Utensils className="text-green-600" size={48} />
                  <h3 className="text-xl font-bold">List Excess Food</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  FoodShare makes it easy for businesses to list their excess food for donation. Simply provide the details of the food item, quantity, and pickup location, and we'll handle the rest.
                </p>
              </motion.div>
              <motion.div
                className="bg-white shadow-md rounded-lg p-8"
                initial={{ y: 50, opacity: 0 }}
                animate={controls}
              >
                <div className="flex items-center justify-between mb-6">
                  <Truck className="text-green-600" size={48} />
                  <h3 className="text-xl font-bold">Scheduled Pickups</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We'll arrange for prompt and reliable pickups of your donated food, ensuring it reaches those in need without delay. Track your pickups and stay informed on the impact of your contributions.
                </p>
              </motion.div>
              <motion.div
                className="bg-white shadow-md rounded-lg p-8"
                initial={{ y: 50, opacity: 0 }}
                animate={controls}
              >
                <div className="flex items-center justify-between mb-6">
                  <Users className="text-green-600" size={48} />
                  <h3 className="text-xl font-bold">Partner with Us</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our network of businesses committed to reducing food waste and making a real difference in your community. Become a FoodShare partner and unlock exclusive benefits.
                </p>
              </motion.div>
              <motion.div
                className="bg-white shadow-md rounded-lg p-8"
                initial={{ y: 50, opacity: 0 }}
                animate={controls}
              >
                <div className="flex items-center justify-between mb-6">
                  <Award className="text-green-600" size={48} />
                  <h3 className="text-xl font-bold">Donation Leaderboard</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  See how your business stacks up against others in the FoodShare network. Check the leaderboard to track your progress and get inspired to make an even bigger impact.
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnMorePage;