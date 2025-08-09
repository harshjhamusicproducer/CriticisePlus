import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Users, Shield, Activity } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      label: 'Total Users',
      value: '2,543',
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      label: 'Active Sessions',
      value: '1,234',
      icon: Activity,
      color: 'bg-green-500',
      change: '+8%',
    },
    {
      label: 'Security Score',
      value: '94%',
      icon: Shield,
      color: 'bg-purple-500',
      change: '+3%',
    },
    {
      label: 'Performance',
      value: '98.5%',
      icon: BarChart3,
      color: 'bg-orange-500',
      change: '+1%',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your microservices platform today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              {
                action: 'User authentication service',
                status: 'Online',
                time: '2 minutes ago',
                color: 'bg-green-100 text-green-800',
              },
              {
                action: 'Database backup completed',
                status: 'Success',
                time: '15 minutes ago',
                color: 'bg-blue-100 text-blue-800',
              },
              {
                action: 'API rate limit adjusted',
                status: 'Updated',
                time: '1 hour ago',
                color: 'bg-orange-100 text-orange-800',
              },
              {
                action: 'Security scan completed',
                status: 'Passed',
                time: '3 hours ago',
                color: 'bg-purple-100 text-purple-800',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.action}</p>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            System Health
          </h2>
          <div className="space-y-6">
            {[
              { service: 'Authentication Service', status: 100, color: 'bg-green-500' },
              { service: 'User Management', status: 98, color: 'bg-green-500' },
              { service: 'Database', status: 95, color: 'bg-yellow-500' },
              { service: 'File Storage', status: 100, color: 'bg-green-500' },
            ].map((service, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {service.service}
                  </span>
                  <span className="text-sm text-gray-600">
                    {service.status}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${service.color}`}
                    style={{ width: `${service.status}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}