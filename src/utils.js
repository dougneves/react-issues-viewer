export async function fetchIssues(page, perPage) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/react/issues?state=all&page=${page}&per_page=${perPage}`
    );

    if (!response || !response.ok) {
      throw 'Error fetching github data';
    }
    const issues = await response.json();
    return issues;
  } catch (err) {
    return err.message;
  }
}

export const textColorForBackground = backgroundColor => {
  const r = parseInt(backgroundColor.slice(0, 2), 16);
  const g = parseInt(backgroundColor.slice(2, 4), 16);
  const b = parseInt(backgroundColor.slice(4, 6), 16);
  const lume = (r * 299 + g * 587 + b * 114) / 1000;
  return lume <= 125 ? 'white' : 'black';
};
