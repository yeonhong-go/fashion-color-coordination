const colorMap = {
  black: { label: "검정", hex: "#000000" },
  white: { label: "흰색", hex: "#ffffff" },
  navy: { label: "네이비", hex: "#1e2f65" },
  blue: { label: "파란색", hex: "#0074D9" },
  green: { label: "녹색", hex: "#2ECC40" },
  yellow: { label: "노란색", hex: "#FFDC00" },
  pink: { label: "핑크", hex: "#FF69B4" },
  red: { label: "레드(버건디)", hex: "#800020" },
  gray: { label: "회색", hex: "#888888" },
  beige: { label: "베이지", hex: "#f5f5dc" },
  khaki: { label: "카키", hex: "#a5a58d" },
  ivory: { label: "아이보리", hex: "#fffff0" },
  brown: { label: "갈색", hex: "#8B4513" },
  skyblue: { label: "하늘색", hex: "#87CEEB" }
};

// 추천 데이터: 상의 색상에 따른 하의 및 옵션 추천과 적합도
const recommendations = {
  "black": {
    "bottom": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "beige",
        "score": 85
      },
      {
        "color": "blue",
        "score": 80
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 90
      },
      {
        "color": "gray",
        "score": 85
      },
      {
        "color": "black",
        "score": 80
      }
    ],
    "hat": [
      {
        "color": "white",
        "score": 85
      },
      {
        "color": "gray",
        "score": 80
      },
      {
        "color": "black",
        "score": 75
      }
    ],
    "jacket": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "navy",
        "score": 85
      },
      {
        "color": "beige",
        "score": 80
      }
    ]
  },
  "white": {
    "bottom": [
      {
        "color": "black",
        "score": 90
      },
      {
        "color": "navy",
        "score": 85
      },
      {
        "color": "khaki",
        "score": 80
      }
    ],
    "shoes": [
      {
        "color": "black",
        "score": 90
      },
      {
        "color": "navy",
        "score": 85
      },
      {
        "color": "gray",
        "score": 80
      }
    ],
    "hat": [
      {
        "color": "black",
        "score": 85
      },
      {
        "color": "navy",
        "score": 80
      },
      {
        "color": "gray",
        "score": 75
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 90
      },
      {
        "color": "gray",
        "score": 85
      },
      {
        "color": "khaki",
        "score": 80
      }
    ]
  },
  "navy": {
    "bottom": [
      {
        "color": "beige",
        "score": 95
      },
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "white",
        "score": 85
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 92
      },
      {
        "color": "white",
        "score": 88
      },
      {
        "color": "navy",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "beige",
        "score": 87
      },
      {
        "color": "navy",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "brown",
        "score": 93
      },
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "blue": {
    "bottom": [
      {
        "color": "white",
        "score": 94
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "navy",
        "score": 87
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 93
      },
      {
        "color": "gray",
        "score": 88
      },
      {
        "color": "brown",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "white",
        "score": 90
      },
      {
        "color": "gray",
        "score": 88
      },
      {
        "color": "navy",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "beige",
        "score": 88
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "green": {
    "bottom": [
      {
        "color": "beige",
        "score": 92
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "brown",
        "score": 85
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "white",
        "score": 89
      },
      {
        "color": "gray",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "beige",
        "score": 90
      },
      {
        "color": "gray",
        "score": 88
      },
      {
        "color": "navy",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "brown",
        "score": 92
      },
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "yellow": {
    "bottom": [
      {
        "color": "navy",
        "score": 93
      },
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "beige",
        "score": 86
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 92
      },
      {
        "color": "brown",
        "score": 88
      },
      {
        "color": "gray",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "navy",
        "score": 91
      },
      {
        "color": "gray",
        "score": 88
      },
      {
        "color": "beige",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "pink": {
    "bottom": [
      {
        "color": "gray",
        "score": 94
      },
      {
        "color": "navy",
        "score": 90
      },
      {
        "color": "beige",
        "score": 87
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 93
      },
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "brown",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "beige",
        "score": 88
      },
      {
        "color": "navy",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "gray",
        "score": 91
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "red": {
    "bottom": [
      {
        "color": "gray",
        "score": 92
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "beige",
        "score": 85
      }
    ],
    "shoes": [
      {
        "color": "black",
        "score": 90
      },
      {
        "color": "brown",
        "score": 88
      },
      {
        "color": "gray",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "gray",
        "score": 89
      },
      {
        "color": "navy",
        "score": 87
      },
      {
        "color": "black",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "gray",
        "score": 90
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "black",
        "score": 85
      }
    ]
  },
  "gray": {
    "bottom": [
      {
        "color": "navy",
        "score": 93
      },
      {
        "color": "black",
        "score": 90
      },
      {
        "color": "beige",
        "score": 88
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 92
      },
      {
        "color": "black",
        "score": 89
      },
      {
        "color": "brown",
        "score": 87
      }
    ],
    "hat": [
      {
        "color": "black",
        "score": 91
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "gray",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "black",
        "score": 89
      },
      {
        "color": "brown",
        "score": 87
      }
    ]
  },
  "beige": {
    "bottom": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "brown",
        "score": 88
      },
      {
        "color": "green",
        "score": 85
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "white",
        "score": 88
      },
      {
        "color": "beige",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "brown",
        "score": 90
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "beige",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 91
      },
      {
        "color": "brown",
        "score": 88
      },
      {
        "color": "khaki",
        "score": 86
      }
    ]
  },
  "khaki": {
    "bottom": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "black",
        "score": 87
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "white",
        "score": 88
      },
      {
        "color": "khaki",
        "score": 85
      }
    ],
    "hat": [
      {
        "color": "brown",
        "score": 90
      },
      {
        "color": "beige",
        "score": 88
      },
      {
        "color": "khaki",
        "score": 85
      }
    ],
    "jacket": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "navy",
        "score": 89
      },
      {
        "color": "beige",
        "score": 86
      }
    ]
  },
  "ivory": {
    "bottom": [
      {
        "color": "navy",
        "score": 93
      },
      {
        "color": "brown",
        "score": 89
      },
      {
        "color": "black",
        "score": 87
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "white",
        "score": 88
      },
      {
        "color": "ivory",
        "score": 86
      }
    ],
    "hat": [
      {
        "color": "brown",
        "score": 90
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "ivory",
        "score": 86
      }
    ],
    "jacket": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "navy",
        "score": 89
      },
      {
        "color": "beige",
        "score": 86
      }
    ]
  },
  "brown": {
    "bottom": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "black",
        "score": 87
      }
    ],
    "shoes": [
      {
        "color": "brown",
        "score": 91
      },
      {
        "color": "black",
        "score": 89
      },
      {
        "color": "white",
        "score": 86
      }
    ],
    "hat": [
      {
        "color": "brown",
        "score": 90
      },
      {
        "color": "navy",
        "score": 88
      },
      {
        "color": "beige",
        "score": 86
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 91
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "black",
        "score": 87
      }
    ]
  },
  "skyblue": {
    "bottom": [
      {
        "color": "navy",
        "score": 94
      },
      {
        "color": "beige",
        "score": 90
      },
      {
        "color": "white",
        "score": 88
      }
    ],
    "shoes": [
      {
        "color": "white",
        "score": 93
      },
      {
        "color": "brown",
        "score": 89
      },
      {
        "color": "navy",
        "score": 87
      }
    ],
    "hat": [
      {
        "color": "navy",
        "score": 91
      },
      {
        "color": "beige",
        "score": 89
      },
      {
        "color": "white",
        "score": 87
      }
    ],
    "jacket": [
      {
        "color": "navy",
        "score": 92
      },
      {
        "color": "beige",
        "score": 90
      },
      {
        "color": "gray",
        "score": 88
      }
    ]
  }
};

const topColorPalette = document.getElementById('topColorPalette');
const bottomRecommendations = document.getElementById('bottomRecommendations');
const shoesRecommendations = document.getElementById('shoesRecommendations');
const hatRecommendations = document.getElementById('hatRecommendations');
const jacketRecommendations = document.getElementById('jacketRecommendations');

function createColorSwatches() {
  Object.keys(colorMap).forEach(colorKey => {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = colorMap[colorKey].hex;
    swatch.title = colorMap[colorKey].label;
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      updateRecommendations(colorKey);
    });
    topColorPalette.appendChild(swatch);
  });
}

function updateRecommendations(topColor) {
  const rec = recommendations[topColor];
  if (!rec) {
    bottomRecommendations.innerHTML = '<li>추천 데이터가 없습니다.</li>';
    shoesRecommendations.innerHTML = '<li>추천 데이터가 없습니다.</li>';
    hatRecommendations.innerHTML = '<li>추천 데이터가 없습니다.</li>';
    jacketRecommendations.innerHTML = '<li>추천 데이터가 없습니다.</li>';
    return;
  }

  function renderList(container, items) {
    container.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="color-circle" style="background-color:${colorMap[item.color].hex}"></span>${colorMap[item.color].label} - ${item.score}%`;
      container.appendChild(li);
    });
  }

  renderList(bottomRecommendations, rec.bottom);
  renderList(shoesRecommendations, rec.shoes);
  renderList(hatRecommendations, rec.hat);
  renderList(jacketRecommendations, rec.jacket);
}

createColorSwatches();