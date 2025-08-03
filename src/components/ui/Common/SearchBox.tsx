"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showSuggestions?: boolean;
  suggestions?: string[];
  autoFocus?: boolean;
  isLoading?: boolean;
  onSuggestionsLoad?: (query: string) => Promise<string[]>;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search products...",
  onSearch,
  className = "",
  showSuggestions = false,
  suggestions = [],
  autoFocus = false,
  isLoading = false,
  onSuggestionsLoad,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);
  const router = useRouter();

  // Filter suggestions based on search query
  useEffect(() => {
    const loadSuggestions = async () => {
      if (showSuggestions && searchQuery.length > 0) {
        setIsSuggestionsLoading(true);
        
        try {
          let filtered: string[] = [];
          
          if (onSuggestionsLoad) {
            // Load suggestions dynamically
            filtered = await onSuggestionsLoad(searchQuery);
          } else {
            // Use static suggestions
            filtered = suggestions.filter(suggestion =>
              suggestion.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }
          
          setFilteredSuggestions(filtered);
          setShowSuggestionsList(filtered.length > 0);
        } catch (error) {
          console.error('Error loading suggestions:', error);
          setFilteredSuggestions([]);
          setShowSuggestionsList(false);
        } finally {
          setIsSuggestionsLoading(false);
        }
      } else {
        setShowSuggestionsList(false);
        setFilteredSuggestions([]);
      }
    };

    const debounceTimer = setTimeout(loadSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, suggestions, showSuggestions, onSuggestionsLoad]);

  const handleSearch = useCallback(async () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        if (onSearch) {
          onSearch(searchQuery.trim());
        } else {
          // Default behavior: navigate to search results page
          router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        }
        setShowSuggestionsList(false);
      } finally {
        setIsSearching(false);
      }
    }
  }, [searchQuery, onSearch, router]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSuggestionClick = async (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestionsList(false);
    setIsSearching(true);
    
    try {
      if (onSearch) {
        onSearch(suggestion);
      } else {
        router.push(`/shop?search=${encodeURIComponent(suggestion)}`);
      }
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="relative flex-1">
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={isLoading || isSearching}
            className={`custom-search w-full rounded-l-[5px] bg-gray-1 border border-gray-3 py-2.5 pl-4 pr-10 outline-none ease-in duration-200 focus:border-blue focus:ring-2 focus:ring-blue/20 ${
              (isLoading || isSearching) ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          />
          
          {/* Loading indicator inside input */}
          {(isSuggestionsLoading || isSearching) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="animate-spin h-4 w-4 border-2 border-blue border-t-transparent rounded-full"></div>
            </div>
          )}
          
          {/* Suggestions dropdown */}
          {showSuggestionsList && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-3 border-t-0 rounded-b-[5px] shadow-lg z-50 max-h-48 overflow-y-auto">
              {isSuggestionsLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin h-5 w-5 border-2 border-blue border-t-transparent rounded-full mr-2"></div>
                  <span className="text-gray-5 text-sm">Loading suggestions...</span>
                </div>
              ) : (
                filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isSearching}
                    className={`w-full text-left px-4 py-2 transition-colors duration-150 border-b border-gray-2 last:border-b-0 ${
                      isSearching 
                        ? 'opacity-60 cursor-not-allowed' 
                        : 'hover:bg-gray-1 cursor-pointer'
                    }`}
                  >
                    {suggestion}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
        
        <button
          onClick={handleSearch}
          type="button"
          id="search-btn"
          aria-label="Search"
          disabled={isLoading || isSearching || !searchQuery.trim()}
          className={`flex items-center justify-center w-12 h-11 rounded-r-[5px] border border-blue border-l-0 ease-out duration-200 transition-all ${
            (isLoading || isSearching || !searchQuery.trim())
              ? 'bg-gray-2 text-gray-5 cursor-not-allowed opacity-60'
              : 'bg-blue text-white hover:bg-blue-dark hover:shadow-md active:scale-95'
          }`}
        >
          {(isLoading || isSearching) ? (
            <div className="animate-spin h-4 w-4 border-2 border-gray-5 border-t-transparent rounded-full"></div>
          ) : (
            <svg
              className="fill-current w-4 h-4"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
