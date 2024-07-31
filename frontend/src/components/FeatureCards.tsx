import { FaUserGraduate, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const features = [
  { title: 'Attendance', icon: <FaClipboardList className="text-blue-500" />, description: 'Easily manage attendance records with CR and teacher entries.' },
  { title: 'Routine Management', icon: <FaCalendarAlt className="text-green-500" />, description: 'Create and manage time tables according to teacher availability.' },
  { title: 'Marks Management', icon: <FaUserGraduate className="text-yellow-500" />, description: 'Manage internal exam marks and provide detailed student performance reports.' },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
