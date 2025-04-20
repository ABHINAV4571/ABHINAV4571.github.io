
import React from 'react';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import FeaturedArticle from '@/components/FeaturedArticle';
import Footer from '@/components/Footer';

const articles = [
  {
    title: "The Shifting Landscape of Global Diplomacy in the 21st Century",
    excerpt: "An analysis of how diplomatic relations have evolved in the face of increasing global challenges and the rise of new power dynamics.",
    author: "Alexandra Chen",
    date: "Apr 15, 2025",
    category: "Diplomacy",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    readTime: "8 min read"
  },
  {
    title: "Historical Perspectives on Economic Inequality",
    excerpt: "Examining how wealth disparities have shaped societies throughout history and what lessons can be applied to modern policy decisions.",
    author: "Martin Reynolds",
    date: "Apr 12, 2025",
    category: "History",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    readTime: "6 min read"
  },
  {
    title: "Democracy Under Pressure: New Challenges to Governance",
    excerpt: "Exploring the current threats facing democratic systems worldwide and potential pathways to institutional resilience.",
    author: "Sophia Washington",
    date: "Apr 10, 2025",
    category: "Governance",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    readTime: "7 min read"
  },
  {
    title: "The Rise of Technocratic Governance Models",
    excerpt: "How expertise-driven decision making is reshaping political landscapes and challenging traditional democratic frameworks.",
    author: "Thomas Harrington",
    date: "Apr 8, 2025",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    readTime: "5 min read"
  },
  {
    title: "Cultural Identity in an Era of Globalization",
    excerpt: "Investigating the tension between local cultures and global homogenization in contemporary politics and society.",
    author: "Amara Khan",
    date: "Apr 5, 2025",
    category: "Culture",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    readTime: "9 min read"
  },
  {
    title: "Environmental Politics: Beyond Partisan Divides",
    excerpt: "Analyzing how environmental issues transcend traditional political fault lines and require new frameworks for cooperation.",
    author: "Daniel Morrison",
    date: "Apr 3, 2025",
    category: "Environment",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    readTime: "7 min read"
  }
];

const featuredArticle = {
  title: "The Intersection of Religion and Politics in Modern Governance",
  excerpt: "An in-depth analysis of how religious beliefs continue to shape political landscapes across different regions, influencing policy decisions and public discourse in increasingly complex ways. This comprehensive exploration challenges conventional wisdom about secularization and highlights emerging trends.",
  author: "Professor Jonathan Harker",
  date: "Apr 16, 2025",
  category: "Analysis",
  imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
  readTime: "12 min read"
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Welcome Banner */}
        <section className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            The Art of Politics & History
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Thoughtful analysis on politics, history, and the intersection of power and society.
          </p>
        </section>
        
        {/* Three Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl mb-4 pb-2 border-b border-taph-tan/30">Recent Articles</h2>
            <div className="space-y-8">
              <ArticleCard {...articles[0]} />
              <ArticleCard {...articles[1]} />
            </div>
          </div>
          
          {/* Middle Column (Featured) */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl mb-4 pb-2 border-b border-taph-tan/30">Featured</h2>
            <FeaturedArticle {...featuredArticle} />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl mb-4 pb-2 border-b border-taph-tan/30">Trending</h2>
            <div className="space-y-8">
              <ArticleCard {...articles[2]} />
              <ArticleCard {...articles[3]} />
            </div>
          </div>
        </section>
        
        {/* Additional Articles */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-taph-tan/30">More from TAPH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.slice(4).map((article, i) => (
              <ArticleCard key={i} {...article} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
