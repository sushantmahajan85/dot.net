'use strict';

const express = require('express');
const router = express.Router();

const categories = [
  {
    "id": 1,
    "name": "Celebrities",
    "url": "/",
  },
  {
    "id": 2,
    "name": "Gaming",
    "url": "/",
  },
  {
    "id": 3,
    "name": "Movies",
    "url": "/",
  },
  {
    "id": 4,
    "name": "Art",
    "url": "/",
  },
  {
    "id": 5,
    "name": "Politics",
    "url": "/",
  },
  {
    "id": 6,
    "name": "Comics",
    "url": "/",
  },
  {
    "id": 7,
    "name": "Science",
    "url": "/",
  },
  {
    "id": 8,
    "name": "Religious",
    "url": "/",
  },
  {
    "id": 9,
    "name": "Internet",
    "url": "/",
  },
  {
    "id": 10,
    "name": "Anime",
    "url": "/",
  },
  {
    "id": 11,
    "name": "Technology",
    "url": "/",
  },
];
const subcategories = [
  {
    "id": 1,
    "name": "Business",
    "category": 1,
    "url": "/",
  },
  {
    "id": 2,
    "name": "Technology",
    "category": 2,
    "url": "/",
  }
];
const profiles = [
  {
    "id": 1,
    "name": "Elon Musk",
    "description": "Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$270 billion as of March 2022,[3] Musk is the wealthiest person in the world according to both the Bloomberg Billionaires Index and the Forbes real-time billionaires list.",
    "mbti": "INTP",
    "enneagram": "5w6",
    "variant": "so/sp",
    "tritype": 513,
    "socionics": "ILE",
    "sloan": "RCOEI",
    "psyche": "VLFE",
    "temperaments": "Phlegmatic [Dominant]",
    "subcategories": [
      1
    ],
    "url": "/",
    "categories": categories,
    "subcategories": subcategories,
    "image": "https://png.pngitem.com/pimgs/s/482-4821503_vernon-unsworth-png-download-elon-musk-smile-transparent.png",
  }
];

module.exports = function() {

  router.get('/*', function(req, res, next) {
    //console.log("req.cookies" , req.cookies)
    res.render('profile_template', {
      categories: categories,
      profile: profiles[0],
      relatedProfiles: profiles,
      sameTypeProfiles: profiles,
      cookies: req.cookies
    });
  });

  return router;
}

