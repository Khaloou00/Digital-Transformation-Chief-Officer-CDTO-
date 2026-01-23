import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { courseModules, Module, Section } from '@/data/courseData';

interface SearchResult {
  moduleId: number;
  moduleTitle: string;
  sectionId: string;
  sectionTitle: string;
  matchedText: string;
  type: 'title' | 'content' | 'keypoint';
}

interface SearchBarProps {
  onSelectModule: (moduleId: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectModule }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (query.length < 2) return [];

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    courseModules.forEach((module) => {
      // Search in module title
      if (module.title.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          moduleId: module.id,
          moduleTitle: module.shortTitle,
          sectionId: module.sections[0]?.id || '',
          sectionTitle: module.title,
          matchedText: module.title,
          type: 'title'
        });
      }

      // Search in sections
      module.sections.forEach((section) => {
        // Section title
        if (section.title.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            moduleId: module.id,
            moduleTitle: module.shortTitle,
            sectionId: section.id,
            sectionTitle: section.title,
            matchedText: section.title,
            type: 'title'
          });
        }

        // Section content
        section.content.forEach((content) => {
          if (content.toLowerCase().includes(lowerQuery)) {
            const startIndex = content.toLowerCase().indexOf(lowerQuery);
            const start = Math.max(0, startIndex - 30);
            const end = Math.min(content.length, startIndex + query.length + 30);
            const matchedText = (start > 0 ? '...' : '') + 
              content.slice(start, end) + 
              (end < content.length ? '...' : '');

            searchResults.push({
              moduleId: module.id,
              moduleTitle: module.shortTitle,
              sectionId: section.id,
              sectionTitle: section.title,
              matchedText,
              type: 'content'
            });
          }
        });

        // Key points
        section.keyPoints?.forEach((point) => {
          if (point.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              moduleId: module.id,
              moduleTitle: module.shortTitle,
              sectionId: section.id,
              sectionTitle: section.title,
              matchedText: point,
              type: 'keypoint'
            });
          }
        });
      });
    });

    // Remove duplicates and limit results
    const uniqueResults = searchResults.reduce((acc, result) => {
      const key = `${result.moduleId}-${result.sectionId}-${result.type}`;
      if (!acc.some(r => `${r.moduleId}-${r.sectionId}-${r.type}` === key)) {
        acc.push(result);
      }
      return acc;
    }, [] as SearchResult[]);

    return uniqueResults.slice(0, 10);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (result: SearchResult) => {
    onSelectModule(result.moduleId);
    setQuery('');
    setIsOpen(false);
  };

  const highlightMatch = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-primary/30 text-primary font-medium rounded px-0.5">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Rechercher dans les modules..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-9 bg-background/50 backdrop-blur-sm border-border/50"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden animate-fade-in">
          <div className="max-h-[400px] overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={`${result.moduleId}-${result.sectionId}-${index}`}
                onClick={() => handleSelect(result)}
                className={`w-full text-left p-3 transition-colors flex items-start gap-3 ${
                  index === selectedIndex 
                    ? 'bg-primary/10' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Module {result.moduleId}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {result.sectionTitle}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 line-clamp-2">
                    {highlightMatch(result.matchedText)}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-xl p-4 text-center">
          <p className="text-muted-foreground text-sm">
            Aucun résultat pour "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
