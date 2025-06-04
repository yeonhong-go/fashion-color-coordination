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

const recommendations = {
  black: ["gray", "beige", "blue"],
  white: ["black", "navy", "khaki"],
  navy: ["white", "gray", "beige"],
  blue: ["white", "gray", "khaki"],
  green: ["white", "beige", "gray"],
  yellow: ["navy", "white", "gray"],
  pink: ["gray", "ivory", "white"],
  red: ["black", "gray", "beige"]
};

const extras = {
  black: ["white", "gray", "black"],
  white: ["black", "navy", "gray"],
  navy: ["white", "khaki", "beige"],
  blue: ["white", "gray", "ivory"],
  green: ["brown", "beige", "white"],
  yellow: ["white", "gray", "navy"],
  pink: ["ivory", "gray", "white"],
  red: ["gray", "white", "black"]
};

document.getElementById('topColor').addEventListener('change', function () {
  const selected = this.value;
  const bottomList = document.getElementById('bottomRecommendations');
  const extraList = document.getElementById('extraRecommendations');

  bottomList.innerHTML = "";
  extraList.innerHTML = "";

  if (!selected) return;

  // 하의 추천
  recommendations[selected].forEach(color => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="color-circle" style="background-color: ${colorMap[color].hex}"></span>${colorMap[color].label}`;
    bottomList.appendChild(li);
  });

  // 추가 아이템 추천
  extras[selected].forEach((color, idx) => {
    const itemNames = ["신발", "자켓", "모자"];
    const li = document.createElement('li');
    li.innerHTML = `<span class="color-circle" style="background-color: ${colorMap[color].hex}"></span>${itemNames[idx]}: ${colorMap[color].label}`;
    extraList.appendChild(li);
  });
});