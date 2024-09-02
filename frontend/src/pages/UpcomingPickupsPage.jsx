import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Users, MapPin, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';

// Placeholder data
const generatePickupData = () => {
  return [
    {
      company: 'Company A',
      foodItem: 'Surplus Bread',
      quantity: 500,
      pickupDate: '2023-09-15',
      pickupLocation: '123 Main St, Anytown USA',
    },
    {
      company: 'Company B',
      foodItem: 'Excess Vegetables',
      quantity: 800,
      pickupDate: '2023-09-17',
      pickupLocation: '456 Oak Rd, Anytown USA',
    },
    {
      company: 'Company C',
      foodItem: 'Leftover Fruit',
      quantity: 300,
      pickupDate: '2023-09-20',
      pickupLocation: '789 Elm St, Anytown USA',
    },
    {
      company: 'Company D',
      foodItem: 'Unused Packaged Goods',
      quantity: 400,
      pickupDate: '2023-09-22',
      pickupLocation: '321 Pine Ave, Anytown USA',
    },
    {
      company: 'Company E',
      foodItem: 'Excess Dairy Products',
      quantity: 600,
      pickupDate: '2023-09-25',
      pickupLocation: '654 Oak St, Anytown USA',
    },
  ];
};

const UpcomingPickupsPage = () => {
  const [pickupData, setPickupData] = useState([]);

  useEffect(() => {
    setPickupData(generatePickupData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-600">Upcoming Pickups</h2>
                <Button variant="secondary">
                  <Users className="mr-2" size={18} />
                  List Excess Food
                </Button>
                <Button variant="primary">
                  <Trophy className="mr-2" size={18} />
                  View Donations
                </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pickupData.map((pickup, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{pickup.company}</h3>
                      <div className="flex items-center">
                        <Calendar className="mr-2 text-green-600" size={18} />
                        <span className="text-green-600 font-medium">
                          {format(parseISO(pickup.pickupDate), 'MMM d')}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-600 font-medium">Food Item</p>
                        <p className="text-gray-800 font-bold">{pickup.foodItem}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Quantity</p>
                        <p className="text-gray-800 font-bold">{pickup.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 text-green-600" size={18} />
                      <p className="text-gray-800">{pickup.pickupLocation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingPickupsPage;