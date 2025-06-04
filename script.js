const recommendations = {
  black: ["회색", "청색", "베이지"],
  white: ["검정", "네이비", "카키"],
  blue: ["흰색", "회색", "베이지"],
  gray: ["검정", "흰색", "남색"],
  beige: ["흰색", "하늘색", "카키"]
};

const extras = {
  black: ["신발: 흰색", "자켓: 그레이", "모자: 블랙"],
  white: ["신발: 검정", "자켓: 네이비", "모자: 회색"],
  blue: ["신발: 흰색", "자켓: 베이지", "모자: 남색"],
  gray: ["신발: 블랙", "자켓: 흰색", "모자: 회색"],
  beige: ["신발: 갈색", "자켓: 청색", "모자: 아이보리"]
};

document.getElementById('topColor').addEventListener('change', function () {
  const selectedColor = this.value;
  const bottomList = document.getElementById('bottomRecommendations');
  const extraList = document.getElementById('extraRecommendations');

  bottomList.innerHTML = "";
  recommendations[selectedColor].forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    bottomList.appendChild(li);
  });

  extraList.innerHTML = "";
  extras[selectedColor].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    extraList.appendChild(li);
  });
});