const ContinueLearning = ({ courses }) => {
  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100);
  
  if (inProgressCourses.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" />
        Continue Learning
      </h2>
      <div className="space-y-4">
        {inProgressCourses.map(course => (
          <div key={course.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <img src={course.thumbnail} alt={course.title} className="w-24 h-16 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.instructor}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Resume
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
