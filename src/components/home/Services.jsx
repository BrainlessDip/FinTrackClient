import React from "react";
import { FaWallet, FaChartPie, FaShieldAlt, FaMobileAlt, FaBell, FaCloud } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaWallet />,
      title: "Expense Tracking",
      description: "Easily log your daily expenses and categorize them to see where your money goes.",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/10"
    },
    {
      icon: <FaChartPie />,
      title: "Budget Planning",
      description: "Set monthly budgets for different categories and stay on track with your goals.",
      color: "text-green-500 bg-green-50 dark:bg-green-900/10"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Data",
      description: "We use bank-grade encryption to ensure your financial information is always safe.",
      color: "text-red-500 bg-red-50 dark:bg-red-900/10"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description: "Manage your finances on the go with our fully responsive and intuitive mobile UI.",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/10"
    },
    {
      icon: <FaBell />,
      title: "Smart Notifications",
      description: "Get alerts for unusual spending or when you're approaching your budget limits.",
      color: "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Backup",
      description: "Your data is automatically synced and backed up across all your devices.",
      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-900/10"
    }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg text-center dark:text-white">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
          <p className="mt-4 text-base-content/60 max-w-2xl mx-auto">
            Explore the powerful tools and features designed to help you master your personal finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="card-body items-center text-center p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="card-title text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
