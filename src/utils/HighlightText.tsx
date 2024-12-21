// utils/highlightText.tsx

export const highlightText = (text: string, searchTerm: string): JSX.Element[] => {
  if (!searchTerm) return [<span key={0}>{text}</span>];  // Return a single element wrapped in an array if no search term

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi')); // Split the text by the search term (case insensitive)

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="bg-yellow-200">{part}</span>  // Highlight the matched part
    ) : (
      <span key={index}>{part}</span>  // Return non-matched parts as regular text
    )
  );
};
