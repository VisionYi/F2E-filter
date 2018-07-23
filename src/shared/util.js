export function debounce(fn, ms = 0) {
  let timeoutId;
  return function fn2(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - (c / 6));
  }
}

/**
 * - 可擴展或可折疊，前提是指定元素的 transition 需要事先設定好，
 * - 元素本身 height 的值不能是 inherit 與 100%，必須是明確的數值或是 auto
 * - 可以結合其他 transition 的效果
 * - 能夠回傳 Promise，當動畫效果結束時回傳訊息
 *
 * @param {ElementObject} el 指定 '擴展' 的元素物件
 * @param {String} expandClassName 指定的擴展時的樣式名稱
 * @param {String} displayType 顯示擴展後 CSS display 的屬性值
 * @param {Number} initialHeight 初始的 CSS height 的屬性值
 * @return {Promise} 當動畫效果結束時，回傳目前高度或初始的高度的 Promise 訊息
 */
export function slideToggle(el, expandClassName, displayType = 'block', initialHeight = 0) {
  const borderTopWidth = parseInt(window.getComputedStyle(el).getPropertyValue('border-top-width'), 10);
  const borderBottomWidth = parseInt(window.getComputedStyle(el).getPropertyValue('border-bottom-width'), 10);

  // 初始化基本參數
  el.style.display = displayType;
  el.style.overflow = 'hidden';

  // 初始化目前高度
  if (el.classList.contains(expandClassName)) {
    el.style.height = `${el.scrollHeight + borderTopWidth + borderBottomWidth}px`;
  } else {
    el.style.height = `${initialHeight}px`;
  }

  // 經過 10ms 後，開始動畫的擴展或摺疊效果
  setTimeout(() => {
    if (el.classList.contains(expandClassName)) {
      el.style.height = `${initialHeight}px`;
    } else {
      el.style.height = `${el.scrollHeight + borderTopWidth + borderBottomWidth}px`;
    }

    // 加上或移除 className 標籤
    el.classList.toggle(expandClassName);
  }, 10);

  // 回傳 Promise 物件，當動畫效果結束時，回傳目前高度或初始的高度
  return new Promise((resolve) => {
    el.addEventListener('transitionend', (ev) => {
      // 當執行動畫過程結束後，讓元素的 style 基本參數消失
      if (ev.propertyName === 'height') {
        el.style.display = '';
        el.style.overflow = '';
        el.style.height = '';
      }

      // 回傳 Promise 成功訊息
      if (el.classList.contains(expandClassName)) {
        resolve(el.offsetHeight);
      } else {
        resolve(initialHeight);
      }
    });
  });
}
