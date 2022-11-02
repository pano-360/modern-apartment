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
          "target": "2-bad-room"
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
      "id": "2-bad-room",
      "name": "Bad Room",
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
        "yaw": -0.05617043956049983,
        "pitch": -0.0012360005180980238,
        "fov": 1.2747015035600908
      },
      "linkHotspots": [
        {
          "yaw": 0.867645922565714,
          "pitch": 0.023185270872854602,
          "rotation": 0,
          "target": "3-bath-room"
        },
        {
          "yaw": 2.0224464041440324,
          "pitch": 0.11746483905952232,
          "rotation": 0,
          "target": "0-living-room"
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
        "yaw": -3.0964789951981224,
        "pitch": -0.022372711817769897,
        "fov": 1.2746873483933965
      },
      "linkHotspots": [
        {
          "yaw": 0.26456440256087177,
          "pitch": 0.1406125593186598,
          "rotation": 0,
          "target": "2-bad-room"
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
