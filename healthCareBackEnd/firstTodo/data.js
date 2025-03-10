let todo = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, and Vegetables",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-10",
    },
  
    // 20% of the tasks (10 tasks) have the same date "2025-02-15"
    {
      id: 2,
      title: "Meeting with Client",
      description: "Discuss project scope",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-15",
    },
    {
      id: 3,
      title: "Doctor's Appointment",
      description: "Annual health checkup",
      status: "pending",
      priority: "medium",
      dueDate: "2025-02-15",
    },
    {
      id: 4,
      title: "Car Service",
      description: "Oil change and tire rotation",
      status: "completed",
      priority: "high",
      dueDate: "2025-02-15",
    },
    {
      id: 5,
      title: "Submit Tax Forms",
      description: "Prepare and submit taxes",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-15",
    },
    {
      id: 6,
      title: "Workout",
      description: "Gym session - legs and cardio",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-02-15",
    },
    {
      id: 7,
      title: "Plan Vacation",
      description: "Research flights and hotels",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-15",
    },
    {
      id: 8,
      title: "Read a Book",
      description: "Complete 2 chapters",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-15",
    },
    {
      id: 9,
      title: "Write Blog Post",
      description: "Tech trends for 2025",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-15",
    },
    {
      id: 10,
      title: "Cook Dinner",
      description: "Try a new recipe",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-15",
    },
    {
      id: 11,
      title: "Organize Closet",
      description: "Declutter and donate clothes",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-15",
    },
  
    // 5% of the tasks (5 tasks) have another same date "2025-02-20"
    {
      id: 12,
      title: "Attend Webinar",
      description: "AI in Healthcare",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-20",
    },
    {
      id: 13,
      title: "Finish Project Report",
      description: "Compile data and conclusions",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-20",
    },
    {
      id: 14,
      title: "Call Parents",
      description: "Catch up with family",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-20",
    },
    {
      id: 15,
      title: "Volunteer Work",
      description: "Community clean-up",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-20",
    },
    {
      id: 16,
      title: "Fix Bike",
      description: "Check brakes and tires",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-02-20",
    },
  
    // Random dates for other tasks
    {
      id: 17,
      title: "Grocery Shopping",
      description: "Fruits, Dairy, Snacks",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-12",
    },
    {
      id: 18,
      title: "Pay Bills",
      description: "Electricity and Internet",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-14",
    },
    {
      id: 19,
      title: "Coding Practice",
      description: "Solve 3 algorithm problems",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-16",
    },
    {
      id: 20,
      title: "Watch Documentary",
      description: "History of Space Exploration",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-18",
    },
    {
      id: 21,
      title: "Team Meeting",
      description: "Discuss sprint backlog",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-22",
    },
    {
      id: 22,
      title: "Practice Meditation",
      description: "15-minute session",
      status: "completed",
      priority: "low",
      dueDate: "2025-02-25",
    },
    {
      id: 23,
      title: "Laundry",
      description: "Wash and fold clothes",
      status: "pending",
      priority: "medium",
      dueDate: "2025-02-26",
    },
    {
      id: 24,
      title: "Buy Birthday Gift",
      description: "Gift for best friend",
      status: "completed",
      priority: "high",
      dueDate: "2025-02-27",
    },
    {
      id: 25,
      title: "Write Journal",
      description: "Reflect on the day",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-28",
    },
    {
      id: 26,
      title: "Water Plants",
      description: "Indoor and outdoor plants",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-02-11",
    },
    {
      id: 27,
      title: "Self-Learning",
      description: "Watch Vue.js tutorials",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-13",
    },
    {
      id: 28,
      title: "Networking Event",
      description: "Tech community meetup",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-17",
    },
    {
      id: 29,
      title: "Meal Prep",
      description: "Plan meals for the week",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-19",
    },
    {
      id: 30,
      title: "Write Cover Letter",
      description: "For new job application",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-21",
    },
    {
      id: 31,
      title: "Practice Guitar",
      description: "Learn a new song",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-02-23",
    },
    {
      id: 32,
      title: "Go Hiking",
      description: "Explore a new trail",
      status: "pending",
      priority: "medium",
      dueDate: "2025-02-24",
    },
    {
      id: 33,
      title: "Plan Budget",
      description: "Track monthly expenses",
      status: "completed",
      priority: "high",
      dueDate: "2025-02-29",
    },
    {
      id: 34,
      title: "Clean House",
      description: "Deep cleaning session",
      status: "pending",
      priority: "medium",
      dueDate: "2025-02-05",
    },
    {
      id: 35,
      title: "Attend Workshop",
      description: "Public speaking skills",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-07",
    },
    {
      id: 36,
      title: "Go for a Run",
      description: "5km evening jog",
      status: "pending",
      priority: "medium",
      dueDate: "2025-02-09",
    },
    {
      id: 37,
      title: "Fix Laptop",
      description: "Upgrade RAM and SSD",
      status: "completed",
      priority: "high",
      dueDate: "2025-02-08",
    },
    {
      id: 38,
      title: "Do Taxes",
      description: "Gather documents",
      status: "pending",
      priority: "high",
      dueDate: "2025-02-06",
    },
    {
      id: 39,
      title: "Meditation",
      description: "Morning mindfulness",
      status: "completed",
      priority: "low",
      dueDate: "2025-02-04",
    },
    {
      id: 40,
      title: "Attend Coding Bootcamp",
      description: "ReactJS and NodeJS",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-02-03",
    },
    {
      id: 41,
      title: "Watch TED Talk",
      description: "Innovation and AI",
      status: "pending",
      priority: "low",
      dueDate: "2025-02-02",
    },
    {
      id: 42,
      title: "Sign Up for Gym",
      description: "New fitness membership",
      status: "completed",
      priority: "medium",
      dueDate: "2025-02-01",
    },
  ];
  
  module.exports = todo;
