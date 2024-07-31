import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const StudentDashboard = () => {
  // Mock data for demonstration purposes
  const student = {
    name: "John Doe",
    faculty: "CSIT",
    marks: [
      { subject: "Mathematics", score: 85 },
      { subject: "Computer Science", score: 90 },
      { subject: "English", score: 78 },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Student Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <FaUserGraduate className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-blue-600">Welcome, {student.name}</h2>
          <p className="text-lg text-gray-700 mt-2">Faculty: {student.faculty}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Your Marks:</h3>
          <ul className="space-y-4">
            {student.marks.map((mark, index) => (
              <li key={index} className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <span className="text-lg text-gray-800">{mark.subject}</span>
                <span className="text-lg font-bold text-blue-600">{mark.score}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4 mx-auto" />
          <p className="text-lg text-gray-700">Your faculty advisor can be contacted for more details.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
