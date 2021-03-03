function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function generateCards(count) {
  const idsSet = new Set();
  while (idsSet.size < count / 2) {
    idsSet.add(Math.floor(Math.random() * 1001));
  }
  const ids = Array.from(idsSet).concat(Array.from(idsSet));
  shuffle(ids);
  const cards = ids.map((idImg) => ({
    idImg,
    // src: `https://picsum.photos/id/${idImg}/300/300`,
    src: `https://loremflickr.com/300/300/animal?lock=${idImg}`,
    isOpen: false,
  }));
  return cards;
}
