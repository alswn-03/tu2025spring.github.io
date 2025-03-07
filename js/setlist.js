document.addEventListener("DOMContentLoaded", function () {
  // 모든 setlist-item을 가져옴
  let items = document.querySelectorAll(".setlist-item");

  // 각 setlist-item 뒤에 link.png 추가 (단, 마지막 곡 '날아올라!' 제외)
  for (let i = 0; i < items.length - 1; i++) {
    // "날아올라!"를 제외하고 추가
    if (items[i].getAttribute("data-title") !== "날아올라!") {
      let linkImage = document.createElement("img");
      linkImage.src = "../images/link.png"; // ✅ link.png 경로 설정
      linkImage.classList.add("setlist-link"); // ✅ CSS 적용을 위해 클래스 추가

      // 현재 setlist-item의 다음 요소로 추가
      items[i].parentNode.insertBefore(linkImage, items[i].nextSibling);
    }
  }

  // 🟢 팝업 기능 추가
  let popup = document.getElementById("popup");
  let popupOverlay = document.getElementById("popup-overlay");
  let popupTitle = document.getElementById("popup-title");
  let popupMeta = document.getElementById("popup-meta");
  let popupDivider = document.getElementById("popup-divider");
  let popupLyrics = document.getElementById("popup-lyrics");
  let closeButton = document.getElementById("popup-close");

  // 모든 setlist-item에 클릭 이벤트 추가
  items.forEach((item) => {
    item.addEventListener("click", function () {
      let title = item.getAttribute("data-title");
      let meta = item.getAttribute("data-meta");
      let lyrics = item.getAttribute("data-lyrics");
      let extraClass = item.getAttribute("data-class");

      // 제목 설정
      popupTitle.innerHTML = title;
      popupTitle.className = extraClass ? extraClass : "";

      // 작사/작곡 정보 설정
      popupMeta.innerHTML = meta;

      // 가사 설정
      popupLyrics.innerHTML = lyrics;

      // 팝업 띄우기
      popup.style.display = "flex";
      popupOverlay.style.display = "block";
    });
  });

  // 닫기 버튼 이벤트 추가
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });

  // 팝업 바깥 클릭 시 닫기
  popupOverlay.addEventListener("click", function () {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
  });
});
