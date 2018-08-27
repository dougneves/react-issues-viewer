//fetch the issues for react project from github
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

//Get the apropriate text color for the background color received
export const textColorForBackground = backgroundColor => {
  //get red, green and blue integer values of the color
  const r = parseInt(backgroundColor.slice(0, 2), 16);
  const g = parseInt(backgroundColor.slice(2, 4), 16);
  const b = parseInt(backgroundColor.slice(4, 6), 16);

  //calculate the lume
  const lume = (r * 299 + g * 587 + b * 114) / 1000;

  //return the apropriate color for text
  return lume <= 125 ? 'white' : 'black';
};
