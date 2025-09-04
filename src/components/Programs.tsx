<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {programs.map((program, index) => (
    <div
      key={index}
      className="group bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 shadow-lg shadow-black/50"
    >
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${program.color} mb-6 group-hover:shadow-lg transition-all duration-300`}>
        <program.icon className="w-8 h-8 text-black" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
        {program.title}
      </h3>
      
      <ul className="space-y-2">
        {program.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-200 font-medium">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
