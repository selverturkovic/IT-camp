const Search = () => {
  const blogPages = [
    {
      title: "10 Tips for Productive Remote Work",
      subtitle: "Stay focused and efficient while working from home",
      date: "June 15, 2022",
    },
    {
      title: "The Art of Time Management",
      subtitle: "Mastering the skill of managing your time effectively",
      date: "August 5, 2022",
    },
    {
      title: "Exploring the Wonders of Space Travel",
      subtitle:
        "A journey through the cosmos and the possibilities of interstellar exploration",
      date: "October 20, 2022",
    },
    {
      title: "Healthy Eating Habits for a Better Lifestyle",
      subtitle: "Nutrition tips for a balanced and vibrant life",
      date: "January 8, 2023",
    },
    {
      title: "The Impact of Artificial Intelligence on Society",
      subtitle: "Examining the ethical and societal implications of AI",
      date: "March 22, 2023",
    },
  ];

  const searchInput = "the";
  return (
    <div>
      <input type="text" />
      {/* domaci da filtrira event i state da filtrira sve sto ima a npr */}
      {/* item.title.toLowerCase().includes(searchInput.toLowerCase()) */}
      {blogPages
        .filter((item) => {
          const title = item.title.toLowerCase();
          const check = title.includes(searchInput.toLowerCase());
          return check;
        })
        .map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Search;
