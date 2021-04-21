require('dotenv').config();

//const apiKey ="h4Wlcne7eV9gHRIMaUBpOO8EhD9yOfJJxJ4t7bFrK2qtA-sxqiB9DwayY0GIj-_Kv-EkpAAZrFTDZ5jyvh46ta4hTFpbRKngPkopE6a0K7CmgNi9Vs5xObf7opeAYHYx";
const apiKey = process.env.APIKEY;
console.log(apiKey)
const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    try {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            url: business.url,
          };
        });
      } else {
        console.log("hello world");
      }
    } catch (e) {
      console.error(`Hello World ${e}`);
    }
  },
};

export default Yelp;
