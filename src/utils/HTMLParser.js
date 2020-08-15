
const placeholderImageUrl = 'https://via.placeholder.com/200';

class HTMLParser {
  parse(htmlText, queryUrl){
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    const metaImage = doc.querySelector("meta[property='og:image']")
    const metaDesc = doc.querySelector("meta[property='og:description']")
    const metaUrl = doc.querySelector("meta[property='og:url']")

    const data = {
      title: doc.title,
      description: metaDesc.content,
      image: metaImage ? metaImage.content : placeholderImageUrl,
      url: metaUrl ? metaUrl.content : queryUrl,
    };

    return data;
  }

}

const htmlParser = new HTMLParser();

export default htmlParser;
