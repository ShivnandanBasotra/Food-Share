import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Users, Award, Trophy, Star } from 'lucide-react';

// Placeholder data
const generateDonationData = () => {
  return [
    { name: 'Company A', meals: 50000, rank: 1 },
    { name: 'Company B', meals: 35000, rank: 2 },
    { name: 'Company C', meals: 25000, rank: 3 },
    { name: 'Company D', meals: 20000, rank: 4 },
    { name: 'Company E', meals: 18000, rank: 5 },
    { name: 'Company F', meals: 15000, rank: 6 },
    { name: 'Company G', meals: 12000, rank: 7 },
    { name: 'Company H', meals: 10000, rank: 8 },
    { name: 'Company I', meals: 8000, rank: 9 },
    { name: 'Company J', meals: 5000, rank: 10 },
  ];
};

const ViewDonationsPage = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    setDonationData(generateDonationData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-600">View Donations</h2>
                <Button variant="secondary">
                  <Truck className="mr-2" size={18} />
                  Upcoming Pickups
                </Button>
                <Button variant="primary">
                  <Users className="mr-2" size={18} />
                  List Excess Food
                </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {donationData.map((donation, index) => (
                <div
                  key={donation.name}
                  className={`bg-white shadow-md rounded-lg p-6 ${
                    index === 0
                      ? 'bg-green-100 text-green-800'
                      : index < 3
                      ? 'bg-gray-100 text-gray-800'
                      : 'text-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold mr-2">{donation.rank}</span>
                      {index === 0 && <Trophy className="text-yellow-500" size={24} />}
                      {index === 1 && <Award className="text-silver" size={24} />}
                      {index === 2 && <Award className="text-bronze" size={24} />}
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`inline-block ${
                            i < Math.floor(donation.rank / 2)
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                          size={18}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold my-4">{donation.name}</h3>
                  <p className="text-4xl font-bold">
                    {donation.meals.toLocaleString()}
                    <span className="text-lg font-normal"> meals</span>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewDonationsPage;