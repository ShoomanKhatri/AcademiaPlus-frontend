import { FaUserGraduate, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const features = [
  {
    title: 'Attendance',
    icon: <FaClipboardList className="text-blue-500" />,
    description: 'Easily manage attendance records with CR and teacher entries.',
  },
  {
    title: 'Routine Management',
    icon: <FaCalendarAlt className="text-green-500" />,
    description: 'Create and manage time tables according to teacher availability.',
  },
  {
    title: 'Marks Management',
    icon: <FaUserGraduate className="text-yellow-500" />,
    description: 'Manage internal exam marks and provide detailed student performance reports.',
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Key Features</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 shadow-xl rounded-xl p-8 transform transition-all hover:scale-105 hover:shadow-lg    hover:shadow-blue-300"
            >
              <div className="flex items-center justify-center mb-6 text-6xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
