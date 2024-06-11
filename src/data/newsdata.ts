interface NewsItem {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  description?: string;
}

interface CategoryContent {
  [key: string]: NewsItem[];
}

const newsData: CategoryContent = {
  "All news": [
    {
      type: 'text',
      content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications"
    },
    {
      type: 'text',
      content: "Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications."
    }
  ],
  "Politike": [
    {
      type: 'text',
      content: " If you have a cell phone, you've probably received texts from political candidates who are looking for money. So how do you stop them? If you have a cell phone, you've probably received texts from political candidates who are looking for money. So how do you stop them? If you have a cell phone, you've probably received texts from political candidates who are looking for money. So how do you stop them?"
    },
    {
      type: 'image',
      src: require('../assets/images/boy.webp'),
      description: "More content about Politike."
      
    }
  ],
  "Art": [
    {
      type: 'text',
      content: "This is content for Art."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "More content about Art."
    }
  ],
  "Sport": [
    {
      type: 'text',
      content: "This is content for Sport."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "More content about Sport."
    }
  ],
  "Roze": [
    {
      type: 'text',
      content: "This is content for Roze."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "More content about Roze."
    }
  ],
  "Kulture": [
    {
      type: 'text',
      content: "This is content for Kulture."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "More content about Kulture."
    }
  ],
  "Teknologji": [
    {
      type: 'text',
      content: "This is content for Teknologji."
    },
    {
      type: 'image',
      src: require('../assets/images/results.jpg'),
      description: "More content about Teknologji."
    }
  ]
};

export default newsData;
