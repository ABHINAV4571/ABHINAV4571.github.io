
import React from 'react';
import { Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
  imageUrl: string;
  alt?: string;
  readTime?: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  author,
  date,
  category = 'Politics',
  imageUrl,
  alt = 'Article image',
  readTime = '5 min read',
  featured = false
}) => {
  return (
    <article className={`group bg-card border border-taph-tan/30 rounded-md overflow-hidden transition-all duration-300 hover:shadow-md ${featured ? 'h-full' : ''} animate-fade-up`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-taph-softBlack text-taph-ivory px-2 py-1 text-xs font-medium rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className={`font-serif ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-medium mb-2 line-clamp-2 hover-lift`}>
          <a href="#" className="article-link">{title}</a>
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 mb-4 text-sm md:text-base">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-taph-accent space-x-3 mb-2">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          {readTime}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
