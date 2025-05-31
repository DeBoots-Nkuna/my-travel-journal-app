import tableMountain from './src/assets/table-mountain.jpg'
import robbenIsland from './src/assets/robben-island.jpg'
import garden from './src/assets/garden.jpg'

const travelData = [
  {
    id: 1,
    img: {
      src: tableMountain,
      alt: 'Table Mountain in Cape Town, South Africa',
    },
    attribution: {
      author: 'Thomas Bennie',
      url: 'https://unsplash.com/photos/brown-rocky-mountain-under-blue-sky-during-daytime-B21WLsX6a5c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
    title: 'Table Mountain',
    country: 'South Africa',
    googleMapsLink: 'https://maps.app.goo.gl/rEqZFUsXMs6ApLZA8',
    date: '20 Jan, 2019',
    text: "Table Mountain stands as Cape Town's most renowned natural landmark, soaring 1,086 meters above sea level. Visitors have the option to hike up using diverse trails or enjoy a ride on the rotating cable car for sweeping views of the cityscape, Table Bay, and the Atlantic Ocean. The summit belongs to Table Mountain National Park and hosts distinctive plant life such as the well-known fynbos vegetation.",
  },
  {
    id: 2,
    img: {
      src: robbenIsland,
      alt: 'Robben Island in Cape Town, South Africa',
    },
    attribution: {
      author: 'Moheen Reeyad',
      url: 'https://unsplash.com/photos/a-sign-that-says-bobbenel-island-we-serve-with-pride-on-the-side-of-JApcjMcsF-M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
    title: ' Robben Island',
    country: 'South Africa',
    googleMapsLink: 'https://maps.app.goo.gl/atsWMithoc1vjawM8',
    dates: '27 May, 2020',
    text: "Robben Island, a UNESCO World Heritage Site near Cape Town's coast, was used as a prison during South Africa’s apartheid period. Nelson Mandela spent 18 years detained there. Nowadays, visitors can catch a ferry from the V&A Waterfront to explore the historic site and gain insight into the nation's path towards democracy.",
  },
  {
    id: 3,
    img: {
      src: garden,
      alt: 'Kirstenbosch National Botanical Garden in Cape Town, South Africa',
    },
    attribution: {
      author: 'Margit Umbach',
      url: 'https://unsplash.com/photos/a-lush-green-field-with-mountains-in-the-background-6jyMHaPtHIs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    },
    title: 'Kirstenbosch National Botanical Garden',
    country: 'South Africa',
    googleMapsLink: 'https://maps.app.goo.gl/t1JwnYBBkCjY9T5T9',
    dates: '01 Oct, 2021',
    text: "Situated at the eastern base of Table Mountain, Kirstenbosch ranks among the world's premier botanical gardens. Since its establishment in 1913, it has concentrated on nurturing indigenous South African flora. A highlight of the garden is the Centenary Tree Canopy Walkway, often referred to as the 'Boomslang,' which provides visitors with a distinctive treetop adventure.",
  },
]

export default travelData
