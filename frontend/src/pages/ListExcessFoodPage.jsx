import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import  {Input} from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Utensils, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListExcessFoodPage = () => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      foodItem,
      quantity,
      description,
      pickupDate,
      pickupLocation,
    });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-600">List Excess Food</h2>
              {/* <ButtonGroup> */}
                <Button onClick = {()=>{navigate('/my-listings')}} variant="secondary">
                  <Utensils className="mr-2" size={18} />
                  My Listed Items
                </Button>
                <Button onClick = {()=>{navigate('/upcoming-pickups')}} variant="primary">
                  <Clock className="mr-2" size={18} />
                  Upcoming Pickups
                </Button>
              {/* </ButtonGroup> */}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="foodItem" className="block text-gray-700 font-medium mb-2">
                  Food Item
                </label>
                <Input
                  type="text"
                  id="foodItem"
                  placeholder="Enter food item"
                  value={foodItem}
                  onChange={(e) => setFoodItem(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                  Quantity
                </label>
                <Input
                  type="text"
                  id="quantity"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  required
                />
              </div>
              <div>
                <label htmlFor="pickupDate" className="block text-gray-700 font-medium mb-2">
                  Pickup Date
                </label>
                <Input
                  type="date"
                  id="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="pickupLocation" className="block text-gray-700 font-medium mb-2">
                  Pickup Location
                </label>
                <Input
                  type="text"
                  id="pickupLocation"
                  placeholder="Enter pickup location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <Button type="submit" variant="primary">
                  <MapPin className="mr-2" size={18} />
                  List Excess Food
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListExcessFoodPage;