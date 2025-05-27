const screenMapper = {
  houses: {
    yellow: {
      places: [
        { x: 462, y: 33, width: 40, height: 40 },
        { x: 526, y: 33, width: 40, height: 40 },
        { x: 462, y: 97, width: 40, height: 40 },
        { x: 526, y: 97, width: 40, height: 40 },
      ],
      exit: [
        { x: 297, y: 45, width: 46, height: 42 },
        { x: 297, y: 86, width: 46, height: 42 },
        { x: 297, y: 127, width: 46, height: 42 },
        { x: 297, y: 168, width: 46, height: 42 },
        { x: 297, y: 209, width: 46, height: 42 }
      ],
      jailStartPos: { x: 430, y: 173, width: 40, height: 35 }
    },
    green: {
      places: [
        { x: 462, y: 503, width: 40, height: 40 },
        { x: 526, y: 503, width: 40, height: 40 },
        { x: 462, y: 567, width: 40, height: 40 },
        { x: 526, y: 567, width: 40, height: 40 },
      ],
      exit: [
        { x: 555, y: 297, width: 46, height: 42 },
        { x: 514, y: 297, width: 46, height: 42 },
        { x: 473, y: 297, width: 46, height: 42 },
        { x: 431, y: 297, width: 46, height: 42 },
        { x: 389, y: 297, width: 46, height: 42 }
      ],
      jailStartPos: { x: 430, y: 396, width: 40, height: 35 }
    },
    blue: {
      places: [
        { x: 74, y: 501, width: 40, height: 40 },
        { x: 138, y: 501, width: 40, height: 40 },
        { x: 74, y: 565, width: 40, height: 40 },
        { x: 138, y: 565, width: 40, height: 40 },
      ],
      exit: [
        { x: 297, y: 554, width: 46, height: 42 },
        { x: 297, y: 513, width: 46, height: 42 },
        { x: 297, y: 472, width: 46, height: 42 },
        { x: 297, y: 431, width: 46, height: 42 },
        { x: 297, y: 389, width: 46, height: 42 }
      ],
      jailStartPos: { x: 42, y: 397, width: 40, height: 35 }
    },
    red: {
      places: [
        { x: 74, y: 33, width: 40, height: 40 },
        { x: 138, y: 33, width: 40, height: 40 },
        { x: 74, y: 97, width: 40, height: 40 },
        { x: 138, y: 97, width: 40, height: 40 },
      ],
      exit: [
        { x: 45, y: 298, width: 46, height: 42 },
        { x: 86, y: 298, width: 46, height: 42 },
        { x: 127, y: 298, width: 46, height: 42 },
        { x: 168, y: 298, width: 46, height: 42 },
        { x: 209, y: 298, width: 46, height: 42 }
      ],
      jailStartPos: { x: 42, y: 173, width: 40, height: 35 }
    }
  },
  track: [
    { x: 343, y: 45, width: 46, height: 42 },
    { x: 343, y: 86, width: 46, height: 42 },
    { x: 343, y: 127, width: 46, height: 42 },
    { x: 343, y: 168, width: 46, height: 42 },
    { x: 343, y: 209, width: 46, height: 42 },
    { x: 389, y: 251, width: 46, height: 42 },
    { x: 430, y: 251, width: 46, height: 42 },
    { x: 473, y: 251, width: 46, height: 42 },
    { x: 512, y: 251, width: 46, height: 42 },
    { x: 554, y: 251, width: 46, height: 42 },
    { x: 596, y: 251, width: 46, height: 42 },
    { x: 596, y: 297, width: 46, height: 42 },
    { x: 596, y: 343, width: 46, height: 42 },
    { x: 554, y: 343, width: 46, height: 42 },
    { x: 514, y: 343, width: 46, height: 42 },
    { x: 473, y: 343, width: 46, height: 42 },
    { x: 430, y: 343, width: 46, height: 42 },
    { x: 389, y: 343, width: 46, height: 42 },
    { x: 343, y: 389, width: 46, height: 42 },
    { x: 343, y: 430, width: 46, height: 42 },
    { x: 343, y: 471, width: 46, height: 42 },
    { x: 343, y: 512, width: 46, height: 42 },
    { x: 343, y: 553, width: 46, height: 42 },
    { x: 343, y: 594, width: 46, height: 42 },
    { x: 297, y: 594, width: 46, height: 42 },
    { x: 251, y: 594, width: 46, height: 42 },
    { x: 251, y: 553, width: 46, height: 42 },
    { x: 251, y: 513, width: 46, height: 42 },
    { x: 251, y: 472, width: 46, height: 42 },
    { x: 251, y: 430, width: 46, height: 42 },
    { x: 251, y: 389, width: 46, height: 42 },
    { x: 209, y: 343, width: 46, height: 42 },
    { x: 168, y: 343, width: 46, height: 42 },
    { x: 127, y: 343, width: 46, height: 42 },
    { x: 86, y: 343, width: 46, height: 42 },
    { x: 45, y: 343, width: 46, height: 42 },
    { x: 4, y: 343, width: 46, height: 42 },
    { x: 4, y: 297, width: 46, height: 42 },
    { x: 4, y: 251, width: 46, height: 42 },
    { x: 45, y: 251, width: 46, height: 42 },
    { x: 86, y: 251, width: 46, height: 42 },
    { x: 127, y: 251, width: 46, height: 42 },
    { x: 168, y: 251, width: 46, height: 42 },
    { x: 209, y: 251, width: 46, height: 42 },
    { x: 251, y: 209, width: 46, height: 42 },
    { x: 251, y: 168, width: 46, height: 42 },
    { x: 251, y: 127, width: 46, height: 42 },
    { x: 251, y: 86, width: 46, height: 42 },
    { x: 251, y: 45, width: 46, height: 42 },
    { x: 251, y: 4, width: 46, height: 42 },
    { x: 297, y: 4, width: 46, height: 42 },
    { x: 343, y: 4, width: 46, height: 42 }
  ]
}

console.log(screenMapper.track.length)