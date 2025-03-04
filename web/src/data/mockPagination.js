import newsHero1 from "../assets/AI.jpg";
const mockPaginationData = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const itemsPerPage = 8;
  const totalItems = 24;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const generateItems = () => {
    const items = [];
    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (i <= totalItems) {
        items.push({
          id: i,
          heading: `News Heading ${i}`,
          subtitle: `This is a sample subtitle for news item ${i}. It provides a brief overview of the content.`,
          imageUrl: `${newsHero1}?text=News${i}`,
        });
      }
    }
    return items;
  };

  return {
    items: generateItems(),
    currentPage: page,
    totalPages,
    itemsPerPage,
    totalItems,
  };
};

export default mockPaginationData;
