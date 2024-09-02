import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Truck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import userOnSignup from '@/atoms/authPageAtom';

const generateLineChartData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
      meals: Math.floor(Math.random() * 50000) + 10000,
    });
  }
  return data;
};

const generateBarChartData = () => {
  const data = [
    { name: 'Restaurants', value: Math.floor(Math.random() * 1000) + 500 },
    { name: 'Venues', value: Math.floor(Math.random() * 1000) + 500 },
    { name: 'Individuals', value: Math.floor(Math.random() * 1000) + 500 },
  ];
  return data;
};

const generatePieChartData = () => {
  const data = [
    { name: 'Meals Served', value: Math.floor(Math.random() * 100000) + 50000 },
    { name: 'Meals Saved', value: Math.floor(Math.random() * 100000) + 50000 },
  ];
  return data;
};

const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    setLineChartData(generateLineChartData());
    setBarChartData(generateBarChartData());
    setPieChartData(generatePieChartData());
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div onClick = {()=>{navigate('/')}}  className="text-2xl font-bold text-green-600 cursor-pointer">FoodShare</div>
          <div className="space-x-4">
            <Button onClick = {()=>{navigate('/list-food')}} variant="primary">List Excess Food</Button>
            <Button onClick = {()=>{navigate('/leaderboard')}} variant="secondary">View Donations</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>Monthly Meals Provided</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={lineChartData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="meals" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Partner Breakdown</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>Meals Served vs. Saved</CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120}>
                    {pieChartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#8884d8' : '#82ca9d'} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Quick Actions</CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <Utensils className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">List Excess Food</h3>
                <p>Contribute your excess food to those in need.</p>
                <Button onClick = {()=>{navigate('/list-food')}} variant="primary">List Food</Button>
              </div>
              <div className="text-center">
                <Truck className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">View Donations</h3>
                <p>See the impact of your food donations.</p>
                <Button onClick = {()=>{navigate('/leaderboard')}} variant="primary">View Donations</Button>
              </div>
              <div className="text-center">
                <Users className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Feeding the Needy</h3>
                <p>Learn more about how we distribute excess food.</p>
                <Button onClick = {()=>{navigate('/learn-more')}} variant="primary">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 FoodShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;