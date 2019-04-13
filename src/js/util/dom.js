/*
 * @Description: 本模块用于zhogn
 * @Author: xujiahe
 * @Date: 2018-12-13 11:31:46
 * @LastEditors: zhongshuaiai
 * @LastEditTime: 2019-03-14 21:09:23
 */
/**
 * 给dom绑定事件
 */
export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function(element, event, handler) {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
})();
/**
 * 给dom解绑事件
 */
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function(element, event, handler) {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
})();
/**
 * 绑定一次
 * @param {*} el
 * @param {*} event
 * @param {*} fn
 */
export const once = function(el, event, fn) {
  const listener = function(...args) {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

export const fullScreen = function(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
  el.style.width = "100%";
  el.style.height = "100%";
};

export const exitFullscreen = function() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExiFullscreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
};
