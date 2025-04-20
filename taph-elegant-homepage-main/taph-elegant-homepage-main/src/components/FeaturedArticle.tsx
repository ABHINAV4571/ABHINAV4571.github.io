
import React from 'react';
import ArticleCard from './ArticleCard';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
  imageUrl: string;
  readTime?: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  excerpt,
  author,
  date,
  category,
  imageUrl,
  readTime
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-4">
        <span className="inline-block bg-taph-tan/20 text-taph-accent px-3 py-1 text-sm font-medium rounded">
          Featured
        </span>
      </div>
      <div className="flex-1">
        <ArticleCard
          title={title}
          excerpt={excerpt}
          author={author}
          date={date}
          category={category}
          imageUrl={imageUrl}
          readTime={readTime}
          featured
        />
      </div>
    </div>
  );
};

export default FeaturedArticle;
