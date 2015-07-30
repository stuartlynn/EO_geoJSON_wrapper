# EO GeoJSON Wrapper
A small node server that wraps responses from the EO api and converts them to geoJSON. 

# Setup 

    npm install 
    node index.js 

# API
Mirrors the EO API (http://eonet.sci.gsfc.nasa.gov/docs/v1) exactally. Only supported endpoint just now is events but will add more if needed. 

# Production server 

Lives live at eonetproxy.cartodb.io. Example query:

    http://eonetproxy.cartodb.io/api/v1/events
    
returns 

```javascript
{
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -119.50847625732422,
              37.276620217497666
            ],
            [
              -119.50847625732422,
              37.2920765764388
            ],
            [
              -119.49054718017578,
              37.2920765764388
            ],
            [
              -119.49054718017578,
              37.276620217497666
            ],
            [
              -119.50847625732422,
              37.276620217497666
            ]
          ]
        ]
      },
      "properties": {
        "id": "EONET_66",
        "title": "Willow Fire, California",
        "description": "The Willow Fire started on July 25 and is in steep and rugged terrain within the Sierra National Forest.",
        "url": "http://inciweb.nwcg.gov/incident/4413/",
        "link": "http://eonet.sci.gsfc.nasa.gov/api/v1/events/EONET_66",
        "catagories": [
          "Wildfires"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -120.89550018310547,
              39.17582530101178
            ],
            [
              -120.89550018310547,
              39.19474141557626
            ],
            [
              -120.85525512695312,
              39.19474141557626
            ],
            [
              -120.85525512695312,
              39.17582530101178
            ],
            [
              -120.89550018310547,
              39.17582530101178
            ]
          ]
        ]
      },
      "properties": {
        "id": "EONET_67",
        "title": "Lowell Fire, California",
        "description": "",
        "url": "http://inciweb.nwcg.gov/incident/4421/",
        "link": "http://eonet.sci.gsfc.nasa.gov/api/v1/events/EONET_67",
        "catagories": [
          "Wildfires"
        ]
      }
    }
  ],
  "type": "FeatureCollection"
}
```
