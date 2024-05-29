export type QuestionType = {
  question: string;
  options: string[];
};

export type CategoryDataType = {
  [key: string]: QuestionType[];
};

export const categoryData: CategoryDataType = {
  Politike: [
    {
      question: 'Who should be the next president?',
      options: ['Candidate A', 'Candidate B', 'Candidate C'],
    },
    {
      question: 'What is the most important political issue?',
      options: ['Economy', 'Healthcare', 'Education'],
    },
  ],
  Art: [
    {
      question: 'Which is your favorite art form?',
      options: ['Painting', 'Sculpture', 'Photography'],
    },
  ],
  Kulture: [
    {
      question: 'Which cultural activity do you enjoy the most?',
      options: ['Theater', 'Traditional Dance', 'Historical Tours'],
    },
    {
      question: 'What is your favorite cultural festival?',
      options: ['Festival A', 'Festival B', 'Festival C'],
    },
  ],
  Roze: [
    {
      question: 'Who is your favorite celebrity?',
      options: ['Celebrity A', 'Celebrity B', 'Celebrity C'],
    },
  ],
  Sport: [
    {
      question: 'Which sport do you enjoy watching the most?',
      options: ['Soccer', 'Basketball', 'Tennis'],
    },
    {
      question: 'Who is your favorite athlete?',
      options: ['Athlete A', 'Athlete B', 'Athlete C'],
    },
  ],
  Teknologji: [
    {
      question: 'Which technology trend excites you the most?',
      options: ['Artificial Intelligence', 'Blockchain', 'Virtual Reality'],
    },
  ],
  Shkence: [
    {
      question: 'Which scientific field interests you the most?',
      options: ['Physics', 'Biology', 'Astronomy'],
    },
  ],
  Muzike: [
    {
      question: 'Which music genre do you prefer?',
      options: ['Rock', 'Jazz', 'Classical'],
    },
    {
      question: 'Who is your favorite musician?',
      options: ['Musician A', 'Musician B', 'Musician C'],
    },
  ],
};


