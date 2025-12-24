export default function StoryDetails({ story }) {
  return (
    <div className="max-w-3xl mx-auto shadow-md rounded-lg p-6 border border-gray-200">
      {/* Top Section */}
      <div className="flex items-center gap-5">
        <img
          src={story.image}
          alt={story.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{story.name}</h1>
          <p className="text-gray-700">{story.designation}</p>
          <p className="text-blue-600">{story.company}</p>
          <p className="text-gray-600 mt-1">Experience: {story.experience}</p>
        </div>
      </div>

      {/* Story */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Learning Story</h2>
        <p className="text-gray-700 leading-relaxed">{story.story}</p>
      </div>

      {/* About */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About Developer</h2>
        <p className="text-gray-700 leading-relaxed">{story.about}</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {story.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
