import React from 'react';
import { render, screen, act, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from './Details';
import ProductDescription from './ProductDescription';
import { ContextObj } from '../../ContextObj.jsx';
import axios from 'axios';


// Test for text appearing in a component:

describe('Details', () => {
  afterEach(cleanup);

  const productId = 40350;
  const productInfo = {
    "id": 40350,
    "campus": "hr-rfp",
    "name": "Blues Suede Shoes",
    "slogan": "2019 Stanley Cup Limited Edition",
    "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
    "category": "Dress Shoes",
    "default_price": "120.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      },
      {
        "feature": "Stitching",
        "value": "Double Stitch"
      }
    ]
  };
  const stylesInfo = {
    "product_id": "40350",
    "results": [
      {
        "style_id": 240531,
        "name": "White Sole",
        "original_price": "120.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "skus": {
          "1394961": {
            "quantity": 14,
            "size": "7"
          },
          "1394962": {
            "quantity": 25,
            "size": "7.5"
          },
          "1394963": {
            "quantity": 9,
            "size": "8"
          },
          "1394964": {
            "quantity": 2,
            "size": "8.5"
          },
          "1394965": {
            "quantity": 18,
            "size": "9"
          },
          "1394966": {
            "quantity": 12,
            "size": "9.5"
          },
          "1394967": {
            "quantity": 10,
            "size": "10"
          },
          "1394968": {
            "quantity": 18,
            "size": "10.5"
          },
          "1394969": {
            "quantity": 11,
            "size": "11"
          },
          "1394970": {
            "quantity": 35,
            "size": "11.5"
          },
          "1394971": {
            "quantity": 25,
            "size": "12"
          }
        }
      },
      {
        "style_id": 240532,
        "name": "Black Sole",
        "original_price": "120.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "skus": {
          "1394972": {
            "quantity": 14,
            "size": "7"
          },
          "1394973": {
            "quantity": 25,
            "size": "7.5"
          },
          "1394974": {
            "quantity": 9,
            "size": "8"
          },
          "1394975": {
            "quantity": 2,
            "size": "8.5"
          },
          "1394976": {
            "quantity": 18,
            "size": "9"
          },
          "1394977": {
            "quantity": 12,
            "size": "9.5"
          },
          "1394978": {
            "quantity": 10,
            "size": "10"
          },
          "1394979": {
            "quantity": 18,
            "size": "10.5"
          },
          "1394980": {
            "quantity": 11,
            "size": "11"
          },
          "1394981": {
            "quantity": 35,
            "size": "11.5"
          },
          "1394982": {
            "quantity": 25,
            "size": "12"
          }
        }
      },
      {
        "style_id": 240533,
        "name": "Tan Sole",
        "original_price": "120.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "skus": {
          "1394983": {
            "quantity": 14,
            "size": "7"
          },
          "1394984": {
            "quantity": 25,
            "size": "7.5"
          },
          "1394985": {
            "quantity": 9,
            "size": "8"
          },
          "1394986": {
            "quantity": 2,
            "size": "8.5"
          },
          "1394987": {
            "quantity": 18,
            "size": "9"
          },
          "1394988": {
            "quantity": 12,
            "size": "9.5"
          },
          "1394989": {
            "quantity": 10,
            "size": "10"
          },
          "1394990": {
            "quantity": 18,
            "size": "10.5"
          },
          "1394991": {
            "quantity": 11,
            "size": "11"
          },
          "1394992": {
            "quantity": 35,
            "size": "11.5"
          },
          "1394993": {
            "quantity": 25,
            "size": "12"
          }
        }
      },
      {
        "style_id": 240534,
        "name": "Red Sole",
        "original_price": "120.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "skus": {
          "1394994": {
            "quantity": 14,
            "size": "7"
          },
          "1394995": {
            "quantity": 25,
            "size": "7.5"
          },
          "1394996": {
            "quantity": 9,
            "size": "8"
          },
          "1394997": {
            "quantity": 2,
            "size": "8.5"
          },
          "1394998": {
            "quantity": 18,
            "size": "9"
          },
          "1394999": {
            "quantity": 12,
            "size": "9.5"
          },
          "1395000": {
            "quantity": 10,
            "size": "10"
          },
          "1395001": {
            "quantity": 18,
            "size": "10.5"
          },
          "1395002": {
            "quantity": 11,
            "size": "11"
          },
          "1395003": {
            "quantity": 35,
            "size": "11.5"
          },
          "1395004": {
            "quantity": 25,
            "size": "12"
          }
        }
      },
      {
        "style_id": 240535,
        "name": "Yellow Sole",
        "original_price": "120.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "skus": {
          "1395005": {
            "quantity": 14,
            "size": "7"
          },
          "1395006": {
            "quantity": 25,
            "size": "7.5"
          },
          "1395007": {
            "quantity": 9,
            "size": "8"
          },
          "1395008": {
            "quantity": 2,
            "size": "8.5"
          },
          "1395009": {
            "quantity": 18,
            "size": "9"
          },
          "1395010": {
            "quantity": 12,
            "size": "9.5"
          },
          "1395011": {
            "quantity": 10,
            "size": "10"
          },
          "1395012": {
            "quantity": 18,
            "size": "10.5"
          },
          "1395013": {
            "quantity": 11,
            "size": "11"
          },
          "1395014": {
            "quantity": 35,
            "size": "11.5"
          },
          "1395015": {
            "quantity": 25,
            "size": "12"
          }
        }
      }
    ]
  };

  const ratingAvg = 3.5;
  const reviewsTotal = 11;
  test('product description component loads', () => {
    const { getByText } = render(
      <ContextObj.Provider value={{ productId, productInfo, stylesInfo, ratingAvg, reviewsTotal }}>
        <ProductDescription currentProductStyle={stylesInfo}/>
      </ContextObj.Provider>
    );

    const text = screen.getByText(/Read all/i);
    expect(text).toBeInTheDocument();
  });

});
