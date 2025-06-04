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
  black: {
    bottom: [
      { color: "gray", score: 90 },
      { color: "beige", score: 85 },
      { color: "blue", score: 80 }
    ],
    shoes: [
      { color: "white", score: 90 },
      { color: "gray", score: 85 },
      { color: "black", score: 80 }
    ],
    hat: [
      { color: "white", score: 85 },
      { color: "gray", score: 80 },
      { color: "black", score: 75 }
    ],
    jacket: [
      { color: "gray", score: 90 },
      { color: "navy", score: 85 },
      { color: "beige", score: 80 }
    ]
  },
  white: {
    bottom: [
      { color: "black", score: 90 },
      { color: "navy", score: 85 },
      { color: "khaki", score: 80 }
    ],
    shoes: [
      { color: "black", score: 90 },
      { color: "navy", score: 85 },
      { color: "gray", score: 80 }
    ],
    hat: [
      { color: "black", score: 85 },
      { color: "navy", score: 80 },
      { color: "gray", score: 75 }
    ],
    jacket: [
      { color: "navy", score: 90 },
      { color: "gray", score: 85 },
      { color: "khaki", score: 80 }
    ]
  },
  // 추가 상의 색상에 대한 추천 데이터를 여기에 추가하세요
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