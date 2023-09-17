import { StarIcon } from "./Icons.js";

export function renderRatingIcons(rating, size) {
  const icons = [];
  for (let i = 0; i < rating; i++) {
    icons.push(<StarIcon key={i} size={size} />);
  }
  return icons;
}
