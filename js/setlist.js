document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("popup-close");

  const popupTitle = document.getElementById("popup-title");
  const popupMeta = document.getElementById("popup-meta");
  const popupLyrics = document.getElementById("popup-lyrics");

  document.querySelectorAll(".setlist-item").forEach((item) => {
    item.addEventListener("click", function () {
      // ✅ 클릭한 곡의 데이터 가져오기
      const title = this.getAttribute("data-title");
      const meta = this.getAttribute("data-meta");
      const lyrics = this.getAttribute("data-lyrics");
      const customClass = this.getAttribute("data-class"); // ✅ 추가

      // ✅ 팝업 내용 변경
      popupTitle.innerHTML = `<h2>${title}</h2>`;
      popupMeta.innerHTML = meta;
      popupLyrics.innerHTML = lyrics;

      // ✅ 기존 클래스 제거 후 새로운 클래스 적용
      popup.classList.remove("small-title"); // 기존 클래스 제거
      if (customClass) {
        popup.classList.add(customClass); // 새로운 클래스 추가
      }

      // ✅ 팝업 띄우기
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  // X 버튼 클릭 시 팝업 닫기
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  // 배경 클릭 시 팝업 닫기
  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
