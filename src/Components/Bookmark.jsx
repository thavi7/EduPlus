import { createContext, useState } from "react";

export const Bookmark = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (item) => {
  const exists = bookmarks.find(p => p.title === item.title);

  if (exists) {
    setBookmarks(bookmarks.filter(p => p.title !== item.title));
  } else {

    if (item.type === "project") {
      const projectCount = bookmarks.filter(b => b.type === "project").length;

      if (projectCount >= 3) {
        alert("You can't save more than 3 projects ❌");
        return;
      }
    }

    if (item.type === "course") {
      const courseCount = bookmarks.filter(b => b.type === "course").length;

      if (courseCount >= 3) {
        alert("You can't save more than 3 courses ❌");
        return;
      }
    }

    setBookmarks([...bookmarks, item]);
  }
};

  return (
    <Bookmark.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </Bookmark.Provider>
  );
};