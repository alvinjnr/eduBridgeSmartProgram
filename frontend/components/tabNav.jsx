const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="flex gap-2 mb-8 border-b overflow-x-auto">
    {[
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'courses', label: 'All Courses' },
      { id: 'signlanguage', label: 'Sign Language' },
      { id: 'science', label: 'Science' },
      { id: 'mathematics', label: 'Mathematics' },
      { id: 'community', label: 'Community' }
    ].map(tab => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-6 py-3 font-medium transition whitespace-nowrap ${
          activeTab === tab.id
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
