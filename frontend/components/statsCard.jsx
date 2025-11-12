const StatsCards = ({ courses, studyGroups }) => {
  const enrolledCourses = courses.filter(c => c.progress > 0);
  const avgProgress = enrolledCourses.length > 0
    ? Math.round(enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCourses.length)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <BookOpen className="w-8 h-8 mb-2 opacity-80" />
        <div className="text-3xl font-bold">{enrolledCourses.length}</div>
        <div className="text-blue-100">Active Courses</div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
        <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
        <div className="text-3xl font-bold">{avgProgress}%</div>
        <div className="text-green-100">Avg Progress</div>
      </div>
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <Users className="w-8 h-8 mb-2 opacity-80" />
        <div className="text-3xl font-bold">{studyGroups.length}</div>
        <div className="text-purple-100">Study Groups</div>
      </div>
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
        <Award className="w-8 h-8 mb-2 opacity-80" />
        <div className="text-3xl font-bold">12</div>
        <div className="text-orange-100">Certificates</div>
      </div>
    </div>
  );
};
