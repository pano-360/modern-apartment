var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.009599692364801626,
        "pitch": 0,
        "fov": 1.2123738669274038
      },
      "linkHotspots": [
        {
          "yaw": -1.7477765025099785,
          "pitch": 0.04977183336447766,
          "rotation": 0,
          "target": "1-balcony"
        },
        {
          "yaw": -1.2189807859494604,
          "pitch": 0.03736903524398372,
          "rotation": 0,
          "target": "2-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9349316861504349,
        "pitch": 0,
        "fov": 1.2123703688178242
      },
      "linkHotspots": [
        {
          "yaw": 1.409379464036986,
          "pitch": 0.038121358778170134,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed-room",
      "name": "Bed Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11084760492051693,
        "pitch": 0.0005745608840719285,
        "fov": 1.2741280157201467
      },
      "linkHotspots": [
        {
          "yaw": 2.0089771976334063,
          "pitch": 0.10471068692356056,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 0.8627815256626121,
          "pitch": 0.04546587912328981,
          "rotation": 0,
          "target": "3-bath-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bath-room",
      "name": "Bath Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1050760380072067,
        "pitch": 0,
        "fov": 1.2746909381383318
      },
      "linkHotspots": [
        {
          "yaw": 0.17427067624061365,
          "pitch": 0.11590138464193878,
          "rotation": 0,
          "target": "2-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Modern Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
