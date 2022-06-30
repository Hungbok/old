
// 요소
const list = document.querySelector('.gamelist-game');
// 사이즈
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;
// 필요한 변수
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const onScrollStart = (e) => {
  startX = getClientX(e);
  window.addEventListener('mousemove', onScrollMove);
  window.addEventListener('touchmove', onScrollMove);
  window.addEventListener('mouseup', onScrollEnd);
  window.addEventListener('touchend', onScrollEnd);
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener('mousedown', onScrollStart);
  window.removeEventListener('touchstart', onScrollStart);
  window.removeEventListener('mousemove', onScrollMove);
  window.removeEventListener('touchmove', onScrollMove);
  window.removeEventListener('mouseup', onScrollEnd);
  window.removeEventListener('touchend', onScrollEnd);
  window.removeEventListener('click', onClick);

  setTimeout(() => {
    bindEvents();
    list.style.transition = '';
  }, 300);
};

const onClick = (e) => {
  if (startX - endX !== 0) {
    e.preventDefault();
  }
};

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (x) => {
  list.style.transform = `translateX(${x}px)`;
};

const bindEvents = () => {
  list.addEventListener('mousedown', onScrollStart);
  list.addEventListener('touchstart', onScrollStart);
  list.addEventListener('click', onClick);
};

bindEvents();
/*
// 요소
const list11 = document.querySelector('.gamelist-game11');
// 사이즈
const listScrollWidth11 = list11.scrollWidth;
const listClientWidth11 = list11.clientWidth;
// 필요한 변수
let startX11 = 0;
let nowX11 = 0;
let endX11 = 0;
let listX11 = 0;

const onScrollStart11 = (e) => {
  startX11 = getClientX11(e);
  window.addEventListener('mousemove', onScrollMove11);
  window.addEventListener('touchmove', onScrollMove11);
  window.addEventListener('mouseup', onScrollEnd11);
  window.addEventListener('touchend', onScrollEnd11);
};

const onScrollMove11 = (e) => {
  nowX11 = getClientX11(e);
  setTranslateX11(listX11 + nowX11 - startX11);
};

const onScrollEnd11 = (e) => {
  endX11 = getClientX11(e);
  listX11 = getTranslateX11();
  if (listX11 > 0) {
    setTranslateX11(0);
    list11.style.transition = `all 0.3s ease`;
    listX11 = 0;
  } else if (listX11 < listClientWidth11 - listScrollWidth11) {
    setTranslateX11(listClientWidth11 - listScrollWidth11);
    list11.style.transition = `all 0.3s ease`;
    listX11 = listClientWidth11 - listScrollWidth11;
  }

  window.removeEventListener('mousedown', onScrollStart11);
  window.removeEventListener('touchstart', onScrollStart11);
  window.removeEventListener('mousemove', onScrollMove11);
  window.removeEventListener('touchmove', onScrollMove11);
  window.removeEventListener('mouseup', onScrollEnd11);
  window.removeEventListener('touchend', onScrollEnd11);
  window.removeEventListener('click', onClick11);

  setTimeout(() => {
    bindEvents11();
    list11.style.transition = '';
  }, 300);
};

const onClick11 = (e) => {
  if (startX11 - endX11 !== 0) {
    e.preventDefault();
  }
};

const getClientX11 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX11 = () => {
  return parseInt(getComputedStyle(list11).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX11 = (x) => {
  list11.style.transform = `translateX(${x}px)`;
};

const bindEvents11 = () => {
  list11.addEventListener('mousedown', onScrollStart11);
  list11.addEventListener('touchstart', onScrollStart11);
  list11.addEventListener('click', onClick11);
};

bindEvents11();

// 요소
const list13 = document.querySelector('.gamelist-game13');
// 사이즈
const listScrollWidth13 = list13.scrollWidth;
const listClientWidth13 = list13.clientWidth;
// 필요한 변수
let startX13 = 0;
let nowX13 = 0;
let endX13 = 0;
let listX13 = 0;

const onScrollStart13 = (e) => {
  startX13 = getClientX13(e);
  window.addEventListener('mousemove', onScrollMove13);
  window.addEventListener('touchmove', onScrollMove13);
  window.addEventListener('mouseup', onScrollEnd13);
  window.addEventListener('touchend', onScrollEnd13);
};

const onScrollMove13 = (e) => {
  nowX13 = getClientX13(e);
  setTranslateX13(listX13 + nowX13 - startX13);
};

const onScrollEnd13 = (e) => {
  endX13 = getClientX13(e);
  listX13 = getTranslateX13();
  if (listX13 > 0) {
    setTranslateX13(0);
    list13.style.transition = `all 0.3s ease`;
    listX13 = 0;
  } else if (listX13 < listClientWidth13 - listScrollWidth13) {
    setTranslateX13(listClientWidth13 - listScrollWidth13);
    list13.style.transition = `all 0.3s ease`;
    listX13 = listClientWidth13 - listScrollWidth13;
  }

  window.removeEventListener('mousedown', onScrollStart13);
  window.removeEventListener('touchstart', onScrollStart13);
  window.removeEventListener('mousemove', onScrollMove13);
  window.removeEventListener('touchmove', onScrollMove13);
  window.removeEventListener('mouseup', onScrollEnd13);
  window.removeEventListener('touchend', onScrollEnd13);
  window.removeEventListener('click', onClick13);

  setTimeout(() => {
    bindEvents13();
    list13.style.transition = '';
  }, 300);
};

const onClick13 = (e) => {
  if (startX13 - endX13 !== 0) {
    e.preventDefault();
  }
};

const getClientX13 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX13 = () => {
  return parseInt(getComputedStyle(list13).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX13 = (x) => {
  list13.style.transform = `translateX(${x}px)`;
};

const bindEvents13 = () => {
  list13.addEventListener('mousedown', onScrollStart13);
  list13.addEventListener('touchstart', onScrollStart13);
  list13.addEventListener('click', onClick13);
};

bindEvents13();

// 요소
const list14 = document.querySelector('.gamelist-game14');
// 사이즈
const listScrollWidth14 = list14.scrollWidth;
const listClientWidth14 = list14.clientWidth;
// 필요한 변수
let startX14 = 0;
let nowX14 = 0;
let endX14 = 0;
let listX14 = 0;

const onScrollStart14 = (e) => {
  startX14 = getClientX14(e);
  window.addEventListener('mousemove', onScrollMove14);
  window.addEventListener('touchmove', onScrollMove14);
  window.addEventListener('mouseup', onScrollEnd14);
  window.addEventListener('touchend', onScrollEnd14);
};

const onScrollMove14 = (e) => {
  nowX14 = getClientX14(e);
  setTranslateX14(listX14 + nowX14 - startX14);
};

const onScrollEnd14 = (e) => {
  endX14 = getClientX14(e);
  listX14 = getTranslateX14();
  if (listX14 > 0) {
    setTranslateX14(0);
    list14.style.transition = `all 0.3s ease`;
    listX14 = 0;
  } else if (listX14 < listClientWidth14 - listScrollWidth14) {
    setTranslateX14(listClientWidth14 - listScrollWidth14);
    list14.style.transition = `all 0.3s ease`;
    listX14 = listClientWidth14 - listScrollWidth14;
  }

  window.removeEventListener('mousedown', onScrollStart14);
  window.removeEventListener('touchstart', onScrollStart14);
  window.removeEventListener('mousemove', onScrollMove14);
  window.removeEventListener('touchmove', onScrollMove14);
  window.removeEventListener('mouseup', onScrollEnd14);
  window.removeEventListener('touchend', onScrollEnd14);
  window.removeEventListener('click', onClick14);

  setTimeout(() => {
    bindEvents14();
    list14.style.transition = '';
  }, 300);
};

const onClick14 = (e) => {
  if (startX14 - endX14 !== 0) {
    e.preventDefault();
  }
};

const getClientX14 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX14 = () => {
  return parseInt(getComputedStyle(list14).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX14 = (x) => {
  list14.style.transform = `translateX(${x}px)`;
};

const bindEvents14 = () => {
  list14.addEventListener('mousedown', onScrollStart14);
  list14.addEventListener('touchstart', onScrollStart14);
  list14.addEventListener('click', onClick14);
};

bindEvents14();

// 요소
const list15 = document.querySelector('.gamelist-game15');
// 사이즈
const listScrollWidth15 = list15.scrollWidth;
const listClientWidth15 = list15.clientWidth;
// 필요한 변수
let startX15 = 0;
let nowX15 = 0;
let endX15 = 0;
let listX15 = 0;

const onScrollStart15 = (e) => {
  startX15 = getClientX15(e);
  window.addEventListener('mousemove', onScrollMove15);
  window.addEventListener('touchmove', onScrollMove15);
  window.addEventListener('mouseup', onScrollEnd15);
  window.addEventListener('touchend', onScrollEnd15);
};

const onScrollMove15 = (e) => {
  nowX15 = getClientX15(e);
  setTranslateX15(listX15 + nowX15 - startX15);
};

const onScrollEnd15 = (e) => {
  endX15 = getClientX15(e);
  listX15 = getTranslateX15();
  if (listX15 > 0) {
    setTranslateX15(0);
    list15.style.transition = `all 0.3s ease`;
    listX15 = 0;
  } else if (listX15 < listClientWidth15 - listScrollWidth15) {
    setTranslateX15(listClientWidth15 - listScrollWidth15);
    list15.style.transition = `all 0.3s ease`;
    listX15 = listClientWidth15 - listScrollWidth15;
  }

  window.removeEventListener('mousedown', onScrollStart15);
  window.removeEventListener('touchstart', onScrollStart15);
  window.removeEventListener('mousemove', onScrollMove15);
  window.removeEventListener('touchmove', onScrollMove15);
  window.removeEventListener('mouseup', onScrollEnd15);
  window.removeEventListener('touchend', onScrollEnd15);
  window.removeEventListener('click', onClick15);

  setTimeout(() => {
    bindEvents15();
    list15.style.transition = '';
  }, 300);
};

const onClick15 = (e) => {
  if (startX15 - endX15 !== 0) {
    e.preventDefault();
  }
};

const getClientX15 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX15 = () => {
  return parseInt(getComputedStyle(list15).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX15 = (x) => {
  list15.style.transform = `translateX(${x}px)`;
};

const bindEvents15 = () => {
  list15.addEventListener('mousedown', onScrollStart15);
  list15.addEventListener('touchstart', onScrollStart15);
  list15.addEventListener('click', onClick15);
};

bindEvents15();

// 요소
const list16 = document.querySelector('.gamelist-game16');
// 사이즈
const listScrollWidth16 = list16.scrollWidth;
const listClientWidth16 = list16.clientWidth;
// 필요한 변수
let startX16 = 0;
let nowX16 = 0;
let endX16 = 0;
let listX16 = 0;

const onScrollStart16 = (e) => {
  startX16 = getClientX16(e);
  window.addEventListener('mousemove', onScrollMove16);
  window.addEventListener('touchmove', onScrollMove16);
  window.addEventListener('mouseup', onScrollEnd16);
  window.addEventListener('touchend', onScrollEnd16);
};

const onScrollMove16 = (e) => {
  nowX16 = getClientX16(e);
  setTranslateX16(listX16 + nowX16 - startX16);
};

const onScrollEnd16 = (e) => {
  endX16 = getClientX16(e);
  listX16 = getTranslateX16();
  if (listX16 > 0) {
    setTranslateX16(0);
    list16.style.transition = `all 0.3s ease`;
    listX16 = 0;
  } else if (listX16 < listClientWidth16 - listScrollWidth16) {
    setTranslateX16(listClientWidth16 - listScrollWidth16);
    list16.style.transition = `all 0.3s ease`;
    listX16 = listClientWidth16 - listScrollWidth16;
  }

  window.removeEventListener('mousedown', onScrollStart16);
  window.removeEventListener('touchstart', onScrollStart16);
  window.removeEventListener('mousemove', onScrollMove16);
  window.removeEventListener('touchmove', onScrollMove16);
  window.removeEventListener('mouseup', onScrollEnd16);
  window.removeEventListener('touchend', onScrollEnd16);
  window.removeEventListener('click', onClick16);

  setTimeout(() => {
    bindEvents16();
    list16.style.transition = '';
  }, 300);
};

const onClick16 = (e) => {
  if (startX16 - endX16 !== 0) {
    e.preventDefault();
  }
};

const getClientX16 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX16 = () => {
  return parseInt(getComputedStyle(list16).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX16 = (x) => {
  list16.style.transform = `translateX(${x}px)`;
};

const bindEvents16 = () => {
  list16.addEventListener('mousedown', onScrollStart16);
  list16.addEventListener('touchstart', onScrollStart16);
  list16.addEventListener('click', onClick16);
};

bindEvents16();

// 요소
const list17 = document.querySelector('.gamelist-game17');
// 사이즈
const listScrollWidth17 = list17.scrollWidth;
const listClientWidth17 = list17.clientWidth;
// 필요한 변수
let startX17 = 0;
let nowX17 = 0;
let endX17 = 0;
let listX17 = 0;

const onScrollStart17 = (e) => {
  startX17 = getClientX17(e);
  window.addEventListener('mousemove', onScrollMove17);
  window.addEventListener('touchmove', onScrollMove17);
  window.addEventListener('mouseup', onScrollEnd17);
  window.addEventListener('touchend', onScrollEnd17);
};

const onScrollMove17 = (e) => {
  nowX17 = getClientX17(e);
  setTranslateX17(listX17 + nowX17 - startX17);
};

const onScrollEnd17 = (e) => {
  endX17 = getClientX17(e);
  listX17 = getTranslateX17();
  if (listX17 > 0) {
    setTranslateX17(0);
    list17.style.transition = `all 0.3s ease`;
    listX17 = 0;
  } else if (listX17 < listClientWidth17 - listScrollWidth17) {
    setTranslateX17(listClientWidth17 - listScrollWidth17);
    list17.style.transition = `all 0.3s ease`;
    listX17 = listClientWidth17 - listScrollWidth17;
  }

  window.removeEventListener('mousedown', onScrollStart17);
  window.removeEventListener('touchstart', onScrollStart17);
  window.removeEventListener('mousemove', onScrollMove17);
  window.removeEventListener('touchmove', onScrollMove17);
  window.removeEventListener('mouseup', onScrollEnd17);
  window.removeEventListener('touchend', onScrollEnd17);
  window.removeEventListener('click', onClick17);

  setTimeout(() => {
    bindEvents17();
    list17.style.transition = '';
  }, 300);
};

const onClick17 = (e) => {
  if (startX17 - endX17 !== 0) {
    e.preventDefault();
  }
};

const getClientX17 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX17 = () => {
  return parseInt(getComputedStyle(list17).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX17 = (x) => {
  list17.style.transform = `translateX(${x}px)`;
};

const bindEvents17 = () => {
  list17.addEventListener('mousedown', onScrollStart17);
  list17.addEventListener('touchstart', onScrollStart17);
  list17.addEventListener('click', onClick17);
};

bindEvents17();

// 요소
const list18 = document.querySelector('.gamelist-game18');
// 사이즈
const listScrollWidth18 = list18.scrollWidth;
const listClientWidth18 = list18.clientWidth;
// 필요한 변수
let startX18 = 0;
let nowX18 = 0;
let endX18 = 0;
let listX18 = 0;

const onScrollStart18 = (e) => {
  startX18 = getClientX18(e);
  window.addEventListener('mousemove', onScrollMove18);
  window.addEventListener('touchmove', onScrollMove18);
  window.addEventListener('mouseup', onScrollEnd18);
  window.addEventListener('touchend', onScrollEnd18);
};

const onScrollMove18 = (e) => {
  nowX18 = getClientX18(e);
  setTranslateX18(listX18 + nowX18 - startX18);
};

const onScrollEnd18 = (e) => {
  endX18 = getClientX18(e);
  listX18 = getTranslateX18();
  if (listX18 > 0) {
    setTranslateX18(0);
    list18.style.transition = `all 0.3s ease`;
    listX18 = 0;
  } else if (listX18 < listClientWidth18 - listScrollWidth18) {
    setTranslateX18(listClientWidth18 - listScrollWidth18);
    list18.style.transition = `all 0.3s ease`;
    listX18 = listClientWidth18 - listScrollWidth18;
  }

  window.removeEventListener('mousedown', onScrollStart18);
  window.removeEventListener('touchstart', onScrollStart18);
  window.removeEventListener('mousemove', onScrollMove18);
  window.removeEventListener('touchmove', onScrollMove18);
  window.removeEventListener('mouseup', onScrollEnd18);
  window.removeEventListener('touchend', onScrollEnd18);
  window.removeEventListener('click', onClick18);

  setTimeout(() => {
    bindEvents18();
    list18.style.transition = '';
  }, 300);
};

const onClick18 = (e) => {
  if (startX18 - endX18 !== 0) {
    e.preventDefault();
  }
};

const getClientX18 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX18 = () => {
  return parseInt(getComputedStyle(list18).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX18 = (x) => {
  list18.style.transform = `translateX(${x}px)`;
};

const bindEvents18 = () => {
  list18.addEventListener('mousedown', onScrollStart18);
  list18.addEventListener('touchstart', onScrollStart18);
  list18.addEventListener('click', onClick18);
};

bindEvents18();

// 요소
const list19 = document.querySelector('.gamelist-game19');
// 사이즈
const listScrollWidth19 = list19.scrollWidth;
const listClientWidth19 = list19.clientWidth;
// 필요한 변수
let startX19 = 0;
let nowX19 = 0;
let endX19 = 0;
let listX19 = 0;

const onScrollStart19 = (e) => {
  startX19 = getClientX19(e);
  window.addEventListener('mousemove', onScrollMove19);
  window.addEventListener('touchmove', onScrollMove19);
  window.addEventListener('mouseup', onScrollEnd19);
  window.addEventListener('touchend', onScrollEnd19);
};

const onScrollMove19 = (e) => {
  nowX19 = getClientX19(e);
  setTranslateX19(listX19 + nowX19 - startX19);
};

const onScrollEnd19 = (e) => {
  endX19 = getClientX19(e);
  listX19 = getTranslateX19();
  if (listX19 > 0) {
    setTranslateX19(0);
    list19.style.transition = `all 0.3s ease`;
    listX19 = 0;
  } else if (listX19 < listClientWidth19 - listScrollWidth19) {
    setTranslateX19(listClientWidth19 - listScrollWidth19);
    list19.style.transition = `all 0.3s ease`;
    listX19 = listClientWidth19 - listScrollWidth19;
  }

  window.removeEventListener('mousedown', onScrollStart19);
  window.removeEventListener('touchstart', onScrollStart19);
  window.removeEventListener('mousemove', onScrollMove19);
  window.removeEventListener('touchmove', onScrollMove19);
  window.removeEventListener('mouseup', onScrollEnd19);
  window.removeEventListener('touchend', onScrollEnd19);
  window.removeEventListener('click', onClick19);

  setTimeout(() => {
    bindEvents19();
    list19.style.transition = '';
  }, 300);
};

const onClick19 = (e) => {
  if (startX19 - endX19 !== 0) {
    e.preventDefault();
  }
};

const getClientX19 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX19 = () => {
  return parseInt(getComputedStyle(list19).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX19 = (x) => {
  list19.style.transform = `translateX(${x}px)`;
};

const bindEvents19 = () => {
  list19.addEventListener('mousedown', onScrollStart19);
  list19.addEventListener('touchstart', onScrollStart19);
  list19.addEventListener('click', onClick19);
};

bindEvents19();

// 요소
const list20 = document.querySelector('.gamelist-game20');
// 사이즈
const listScrollWidth20 = list20.scrollWidth;
const listClientWidth20 = list20.clientWidth;
// 필요한 변수
let startX20 = 0;
let nowX20 = 0;
let endX20 = 0;
let listX20 = 0;

const onScrollStart20 = (e) => {
  startX20 = getClientX20(e);
  window.addEventListener('mousemove', onScrollMove20);
  window.addEventListener('touchmove', onScrollMove20);
  window.addEventListener('mouseup', onScrollEnd20);
  window.addEventListener('touchend', onScrollEnd20);
};

const onScrollMove20 = (e) => {
  nowX20 = getClientX20(e);
  setTranslateX20(listX20 + nowX20 - startX20);
};

const onScrollEnd20 = (e) => {
  endX20 = getClientX20(e);
  listX20 = getTranslateX20();
  if (listX20 > 0) {
    setTranslateX20(0);
    list20.style.transition = `all 0.3s ease`;
    listX20 = 0;
  } else if (listX20 < listClientWidth20 - listScrollWidth20) {
    setTranslateX20(listClientWidth20 - listScrollWidth20);
    list20.style.transition = `all 0.3s ease`;
    listX20 = listClientWidth20 - listScrollWidth20;
  }

  window.removeEventListener('mousedown', onScrollStart20);
  window.removeEventListener('touchstart', onScrollStart20);
  window.removeEventListener('mousemove', onScrollMove20);
  window.removeEventListener('touchmove', onScrollMove20);
  window.removeEventListener('mouseup', onScrollEnd20);
  window.removeEventListener('touchend', onScrollEnd20);
  window.removeEventListener('click', onClick20);

  setTimeout(() => {
    bindEvents20();
    list20.style.transition = '';
  }, 200);
};

const onClick20 = (e) => {
  if (startX20 - endX20 !== 0) {
    e.preventDefault();
  }
};

const getClientX20 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX20 = () => {
  return parseInt(getComputedStyle(list20).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX20 = (x) => {
  list20.style.transform = `translateX(${x}px)`;
};

const bindEvents20 = () => {
  list20.addEventListener('mousedown', onScrollStart20);
  list20.addEventListener('touchstart', onScrollStart20);
  list20.addEventListener('click', onClick20);
};

bindEvents20();

// 요소
const list2 = document.querySelector('.gamelist-game2');
// 사이즈
const listScrollWidth2 = list2.scrollWidth;
const listClientWidth2 = list2.clientWidth;
// 필요한 변수
let startX2 = 0;
let nowX2 = 0;
let endX2 = 0;
let listX2 = 0;

const onScrollStart2 = (e) => {
  startX2 = getClientX2(e);
  window.addEventListener('mousemove', onScrollMove2);
  window.addEventListener('touchmove', onScrollMove2);
  window.addEventListener('mouseup', onScrollEnd2);
  window.addEventListener('touchend', onScrollEnd2);
};

const onScrollMove2 = (e) => {
  nowX2 = getClientX2(e);
  setTranslateX2(listX2 + nowX2 - startX2);
};

const onScrollEnd2 = (e) => {
  endX2 = getClientX2(e);
  listX2 = getTranslateX2();
  if (listX2 > 0) {
    setTranslateX2(0);
    list2.style.transition = `all 0.3s ease`;
    listX2 = 0;
  } else if (listX2 < listClientWidth2 - listScrollWidth2) {
    setTranslateX2(listClientWidth2 - listScrollWidth2);
    list2.style.transition = `all 0.3s ease`;
    listX2 = listClientWidth2 - listScrollWidth2;
  }

  window.removeEventListener('mousedown', onScrollStart2);
  window.removeEventListener('touchstart', onScrollStart2);
  window.removeEventListener('mousemove', onScrollMove2);
  window.removeEventListener('touchmove', onScrollMove2);
  window.removeEventListener('mouseup', onScrollEnd2);
  window.removeEventListener('touchend', onScrollEnd2);
  window.removeEventListener('click', onClick2);

  setTimeout(() => {
    bindEvents2();
    list2.style.transition = '';
  }, 20);
};

const onClick2 = (e) => {
  if (startX2 - endX2 !== 0) {
    e.preventDefault();
  }
};

const getClientX2 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX2 = () => {
  return parseInt(getComputedStyle(list2).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX2 = (x) => {
  list2.style.transform = `translateX(${x}px)`;
};

const bindEvents2 = () => {
  list2.addEventListener('mousedown', onScrollStart2);
  list2.addEventListener('touchstart', onScrollStart2);
  list2.addEventListener('click', onClick2);
};

bindEvents2();

// 요소
const list21 = document.querySelector('.gamelist-game21');
// 사이즈
const listScrollWidth21 = list21.scrollWidth;
const listClientWidth21 = list21.clientWidth;
// 필요한 변수
let startX21 = 0;
let nowX21 = 0;
let endX21 = 0;
let listX21 = 0;

const onScrollStart21 = (e) => {
  startX21 = getClientX21(e);
  window.addEventListener('mousemove', onScrollMove21);
  window.addEventListener('touchmove', onScrollMove21);
  window.addEventListener('mouseup', onScrollEnd21);
  window.addEventListener('touchend', onScrollEnd21);
};

const onScrollMove21 = (e) => {
  nowX21 = getClientX21(e);
  setTranslateX21(listX21 + nowX21 - startX21);
};

const onScrollEnd21 = (e) => {
  endX21 = getClientX21(e);
  listX21 = getTranslateX21();
  if (listX21 > 0) {
    setTranslateX21(0);
    list21.style.transition = `all 0.3s ease`;
    listX21 = 0;
  } else if (listX21 < listClientWidth21 - listScrollWidth21) {
    setTranslateX21(listClientWidth21 - listScrollWidth21);
    list21.style.transition = `all 0.3s ease`;
    listX21 = listClientWidth21 - listScrollWidth21;
  }

  window.removeEventListener('mousedown', onScrollStart21);
  window.removeEventListener('touchstart', onScrollStart21);
  window.removeEventListener('mousemove', onScrollMove21);
  window.removeEventListener('touchmove', onScrollMove21);
  window.removeEventListener('mouseup', onScrollEnd21);
  window.removeEventListener('touchend', onScrollEnd21);
  window.removeEventListener('click', onClick21);

  setTimeout(() => {
    bindEvents21();
    list21.style.transition = '';
  }, 210);
};

const onClick21 = (e) => {
  if (startX21 - endX21 !== 0) {
    e.preventDefault();
  }
};

const getClientX21 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX21 = () => {
  return parseInt(getComputedStyle(list21).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX21 = (x) => {
  list21.style.transform = `translateX(${x}px)`;
};

const bindEvents21 = () => {
  list21.addEventListener('mousedown', onScrollStart21);
  list21.addEventListener('touchstart', onScrollStart21);
  list21.addEventListener('click', onClick21);
};

bindEvents21();

// 요소
const list22 = document.querySelector('.gamelist-game22');
// 사이즈
const listScrollWidth22 = list22.scrollWidth;
const listClientWidth22 = list22.clientWidth;
// 필요한 변수
let startX22 = 0;
let nowX22 = 0;
let endX22 = 0;
let listX22 = 0;

const onScrollStart22 = (e) => {
  startX22 = getClientX22(e);
  window.addEventListener('mousemove', onScrollMove22);
  window.addEventListener('touchmove', onScrollMove22);
  window.addEventListener('mouseup', onScrollEnd22);
  window.addEventListener('touchend', onScrollEnd22);
};

const onScrollMove22 = (e) => {
  nowX22 = getClientX22(e);
  setTranslateX22(listX22 + nowX22 - startX22);
};

const onScrollEnd22 = (e) => {
  endX22 = getClientX22(e);
  listX22 = getTranslateX22();
  if (listX22 > 0) {
    setTranslateX22(0);
    list22.style.transition = `all 0.3s ease`;
    listX22 = 0;
  } else if (listX22 < listClientWidth22 - listScrollWidth22) {
    setTranslateX22(listClientWidth22 - listScrollWidth22);
    list22.style.transition = `all 0.3s ease`;
    listX22 = listClientWidth22 - listScrollWidth22;
  }

  window.removeEventListener('mousedown', onScrollStart22);
  window.removeEventListener('touchstart', onScrollStart22);
  window.removeEventListener('mousemove', onScrollMove22);
  window.removeEventListener('touchmove', onScrollMove22);
  window.removeEventListener('mouseup', onScrollEnd22);
  window.removeEventListener('touchend', onScrollEnd22);
  window.removeEventListener('click', onClick22);

  setTimeout(() => {
    bindEvents22();
    list22.style.transition = '';
  }, 220);
};

const onClick22 = (e) => {
  if (startX22 - endX22 !== 0) {
    e.preventDefault();
  }
};

const getClientX22 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX22 = () => {
  return parseInt(getComputedStyle(list22).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX22 = (x) => {
  list22.style.transform = `translateX(${x}px)`;
};

const bindEvents22 = () => {
  list22.addEventListener('mousedown', onScrollStart22);
  list22.addEventListener('touchstart', onScrollStart22);
  list22.addEventListener('click', onClick22);
};

bindEvents22();

// 요소
const list23 = document.querySelector('.gamelist-game23');
// 사이즈
const listScrollWidth23 = list23.scrollWidth;
const listClientWidth23 = list23.clientWidth;
// 필요한 변수
let startX23 = 0;
let nowX23 = 0;
let endX23 = 0;
let listX23 = 0;

const onScrollStart23 = (e) => {
  startX23 = getClientX23(e);
  window.addEventListener('mousemove', onScrollMove23);
  window.addEventListener('touchmove', onScrollMove23);
  window.addEventListener('mouseup', onScrollEnd23);
  window.addEventListener('touchend', onScrollEnd23);
};

const onScrollMove23 = (e) => {
  nowX23 = getClientX23(e);
  setTranslateX23(listX23 + nowX23 - startX23);
};

const onScrollEnd23 = (e) => {
  endX23 = getClientX23(e);
  listX23 = getTranslateX23();
  if (listX23 > 0) {
    setTranslateX23(0);
    list23.style.transition = `all 0.3s ease`;
    listX23 = 0;
  } else if (listX23 < listClientWidth23 - listScrollWidth23) {
    setTranslateX23(listClientWidth23 - listScrollWidth23);
    list23.style.transition = `all 0.3s ease`;
    listX23 = listClientWidth23 - listScrollWidth23;
  }

  window.removeEventListener('mousedown', onScrollStart23);
  window.removeEventListener('touchstart', onScrollStart23);
  window.removeEventListener('mousemove', onScrollMove23);
  window.removeEventListener('touchmove', onScrollMove23);
  window.removeEventListener('mouseup', onScrollEnd23);
  window.removeEventListener('touchend', onScrollEnd23);
  window.removeEventListener('click', onClick23);

  setTimeout(() => {
    bindEvents23();
    list23.style.transition = '';
  }, 224);
};

const onClick23 = (e) => {
  if (startX23 - endX23 !== 0) {
    e.preventDefault();
  }
};

const getClientX23 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX23 = () => {
  return parseInt(getComputedStyle(list23).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX23 = (x) => {
  list23.style.transform = `translateX(${x}px)`;
};

const bindEvents23 = () => {
  list23.addEventListener('mousedown', onScrollStart23);
  list23.addEventListener('touchstart', onScrollStart23);
  list23.addEventListener('click', onClick23);
};

bindEvents23();

// 요소
const list24 = document.querySelector('.gamelist-game24');
// 사이즈
const listScrollWidth24 = list24.scrollWidth;
const listClientWidth24 = list24.clientWidth;
// 필요한 변수
let startX24 = 0;
let nowX24 = 0;
let endX24 = 0;
let listX24 = 0;

const onScrollStart24 = (e) => {
  startX24 = getClientX24(e);
  window.addEventListener('mousemove', onScrollMove24);
  window.addEventListener('touchmove', onScrollMove24);
  window.addEventListener('mouseup', onScrollEnd24);
  window.addEventListener('touchend', onScrollEnd24);
};

const onScrollMove24 = (e) => {
  nowX24 = getClientX24(e);
  setTranslateX24(listX24 + nowX24 - startX24);
};

const onScrollEnd24 = (e) => {
  endX24 = getClientX24(e);
  listX24 = getTranslateX24();
  if (listX24 > 0) {
    setTranslateX24(0);
    list24.style.transition = `all 0.3s ease`;
    listX24 = 0;
  } else if (listX24 < listClientWidth24 - listScrollWidth24) {
    setTranslateX24(listClientWidth24 - listScrollWidth24);
    list24.style.transition = `all 0.3s ease`;
    listX24 = listClientWidth24 - listScrollWidth24;
  }

  window.removeEventListener('mousedown', onScrollStart24);
  window.removeEventListener('touchstart', onScrollStart24);
  window.removeEventListener('mousemove', onScrollMove24);
  window.removeEventListener('touchmove', onScrollMove24);
  window.removeEventListener('mouseup', onScrollEnd24);
  window.removeEventListener('touchend', onScrollEnd24);
  window.removeEventListener('click', onClick24);

  setTimeout(() => {
    bindEvents24();
    list24.style.transition = '';
  }, 240);
};

const onClick24 = (e) => {
  if (startX24 - endX24 !== 0) {
    e.preventDefault();
  }
};

const getClientX24 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX24 = () => {
  return parseInt(getComputedStyle(list24).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX24 = (x) => {
  list24.style.transform = `translateX(${x}px)`;
};

const bindEvents24 = () => {
  list24.addEventListener('mousedown', onScrollStart24);
  list24.addEventListener('touchstart', onScrollStart24);
  list24.addEventListener('click', onClick24);
};

bindEvents24();

// 요소
const list25 = document.querySelector('.gamelist-game25');
// 사이즈
const listScrollWidth25 = list25.scrollWidth;
const listClientWidth25 = list25.clientWidth;
// 필요한 변수
let startX25 = 0;
let nowX25 = 0;
let endX25 = 0;
let listX25 = 0;

const onScrollStart25 = (e) => {
  startX25 = getClientX25(e);
  window.addEventListener('mousemove', onScrollMove25);
  window.addEventListener('touchmove', onScrollMove25);
  window.addEventListener('mouseup', onScrollEnd25);
  window.addEventListener('touchend', onScrollEnd25);
};

const onScrollMove25 = (e) => {
  nowX25 = getClientX25(e);
  setTranslateX25(listX25 + nowX25 - startX25);
};

const onScrollEnd25 = (e) => {
  endX25 = getClientX25(e);
  listX25 = getTranslateX25();
  if (listX25 > 0) {
    setTranslateX25(0);
    list25.style.transition = `all 0.3s ease`;
    listX25 = 0;
  } else if (listX25 < listClientWidth25 - listScrollWidth25) {
    setTranslateX25(listClientWidth25 - listScrollWidth25);
    list25.style.transition = `all 0.3s ease`;
    listX25 = listClientWidth25 - listScrollWidth25;
  }

  window.removeEventListener('mousedown', onScrollStart25);
  window.removeEventListener('touchstart', onScrollStart25);
  window.removeEventListener('mousemove', onScrollMove25);
  window.removeEventListener('touchmove', onScrollMove25);
  window.removeEventListener('mouseup', onScrollEnd25);
  window.removeEventListener('touchend', onScrollEnd25);
  window.removeEventListener('click', onClick25);

  setTimeout(() => {
    bindEvents25();
    list25.style.transition = '';
  }, 250);
};

const onClick25 = (e) => {
  if (startX25 - endX25 !== 0) {
    e.preventDefault();
  }
};

const getClientX25 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX25 = () => {
  return parseInt(getComputedStyle(list25).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX25 = (x) => {
  list25.style.transform = `translateX(${x}px)`;
};

const bindEvents25 = () => {
  list25.addEventListener('mousedown', onScrollStart25);
  list25.addEventListener('touchstart', onScrollStart25);
  list25.addEventListener('click', onClick25);
};

bindEvents25();

// 요소
const list26 = document.querySelector('.gamelist-game26');
// 사이즈
const listScrollWidth26 = list26.scrollWidth;
const listClientWidth26 = list26.clientWidth;
// 필요한 변수
let startX26 = 0;
let nowX26 = 0;
let endX26 = 0;
let listX26 = 0;

const onScrollStart26 = (e) => {
  startX26 = getClientX26(e);
  window.addEventListener('mousemove', onScrollMove26);
  window.addEventListener('touchmove', onScrollMove26);
  window.addEventListener('mouseup', onScrollEnd26);
  window.addEventListener('touchend', onScrollEnd26);
};

const onScrollMove26 = (e) => {
  nowX26 = getClientX26(e);
  setTranslateX26(listX26 + nowX26 - startX26);
};

const onScrollEnd26 = (e) => {
  endX26 = getClientX26(e);
  listX26 = getTranslateX26();
  if (listX26 > 0) {
    setTranslateX26(0);
    list26.style.transition = `all 0.3s ease`;
    listX26 = 0;
  } else if (listX26 < listClientWidth26 - listScrollWidth26) {
    setTranslateX26(listClientWidth26 - listScrollWidth26);
    list26.style.transition = `all 0.3s ease`;
    listX26 = listClientWidth26 - listScrollWidth26;
  }

  window.removeEventListener('mousedown', onScrollStart26);
  window.removeEventListener('touchstart', onScrollStart26);
  window.removeEventListener('mousemove', onScrollMove26);
  window.removeEventListener('touchmove', onScrollMove26);
  window.removeEventListener('mouseup', onScrollEnd26);
  window.removeEventListener('touchend', onScrollEnd26);
  window.removeEventListener('click', onClick26);

  setTimeout(() => {
    bindEvents26();
    list26.style.transition = '';
  }, 260);
};

const onClick26 = (e) => {
  if (startX26 - endX26 !== 0) {
    e.preventDefault();
  }
};

const getClientX26 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX26 = () => {
  return parseInt(getComputedStyle(list26).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX26 = (x) => {
  list26.style.transform = `translateX(${x}px)`;
};

const bindEvents26 = () => {
  list26.addEventListener('mousedown', onScrollStart26);
  list26.addEventListener('touchstart', onScrollStart26);
  list26.addEventListener('click', onClick26);
};

bindEvents26();

// 요소
const list27 = document.querySelector('.gamelist-game27');
// 사이즈
const listScrollWidth27 = list27.scrollWidth;
const listClientWidth27 = list27.clientWidth;
// 필요한 변수
let startX27 = 0;
let nowX27 = 0;
let endX27 = 0;
let listX27 = 0;

const onScrollStart27 = (e) => {
  startX27 = getClientX27(e);
  window.addEventListener('mousemove', onScrollMove27);
  window.addEventListener('touchmove', onScrollMove27);
  window.addEventListener('mouseup', onScrollEnd27);
  window.addEventListener('touchend', onScrollEnd27);
};

const onScrollMove27 = (e) => {
  nowX27 = getClientX27(e);
  setTranslateX27(listX27 + nowX27 - startX27);
};

const onScrollEnd27 = (e) => {
  endX27 = getClientX27(e);
  listX27 = getTranslateX27();
  if (listX27 > 0) {
    setTranslateX27(0);
    list27.style.transition = `all 0.3s ease`;
    listX27 = 0;
  } else if (listX27 < listClientWidth27 - listScrollWidth27) {
    setTranslateX27(listClientWidth27 - listScrollWidth27);
    list27.style.transition = `all 0.3s ease`;
    listX27 = listClientWidth27 - listScrollWidth27;
  }

  window.removeEventListener('mousedown', onScrollStart27);
  window.removeEventListener('touchstart', onScrollStart27);
  window.removeEventListener('mousemove', onScrollMove27);
  window.removeEventListener('touchmove', onScrollMove27);
  window.removeEventListener('mouseup', onScrollEnd27);
  window.removeEventListener('touchend', onScrollEnd27);
  window.removeEventListener('click', onClick27);

  setTimeout(() => {
    bindEvents27();
    list27.style.transition = '';
  }, 270);
};

const onClick27 = (e) => {
  if (startX27 - endX27 !== 0) {
    e.preventDefault();
  }
};

const getClientX27 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX27 = () => {
  return parseInt(getComputedStyle(list27).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX27 = (x) => {
  list27.style.transform = `translateX(${x}px)`;
};

const bindEvents27 = () => {
  list27.addEventListener('mousedown', onScrollStart27);
  list27.addEventListener('touchstart', onScrollStart27);
  list27.addEventListener('click', onClick27);
};

bindEvents27();

// 요소
const list28 = document.querySelector('.gamelist-game28');
// 사이즈
const listScrollWidth28 = list28.scrollWidth;
const listClientWidth28 = list28.clientWidth;
// 필요한 변수
let startX28 = 0;
let nowX28 = 0;
let endX28 = 0;
let listX28 = 0;

const onScrollStart28 = (e) => {
  startX28 = getClientX28(e);
  window.addEventListener('mousemove', onScrollMove28);
  window.addEventListener('touchmove', onScrollMove28);
  window.addEventListener('mouseup', onScrollEnd28);
  window.addEventListener('touchend', onScrollEnd28);
};

const onScrollMove28 = (e) => {
  nowX28 = getClientX28(e);
  setTranslateX28(listX28 + nowX28 - startX28);
};

const onScrollEnd28 = (e) => {
  endX28 = getClientX28(e);
  listX28 = getTranslateX28();
  if (listX28 > 0) {
    setTranslateX28(0);
    list28.style.transition = `all 0.3s ease`;
    listX28 = 0;
  } else if (listX28 < listClientWidth28 - listScrollWidth28) {
    setTranslateX28(listClientWidth28 - listScrollWidth28);
    list28.style.transition = `all 0.3s ease`;
    listX28 = listClientWidth28 - listScrollWidth28;
  }

  window.removeEventListener('mousedown', onScrollStart28);
  window.removeEventListener('touchstart', onScrollStart28);
  window.removeEventListener('mousemove', onScrollMove28);
  window.removeEventListener('touchmove', onScrollMove28);
  window.removeEventListener('mouseup', onScrollEnd28);
  window.removeEventListener('touchend', onScrollEnd28);
  window.removeEventListener('click', onClick28);

  setTimeout(() => {
    bindEvents28();
    list28.style.transition = '';
  }, 280);
};

const onClick28 = (e) => {
  if (startX28 - endX28 !== 0) {
    e.preventDefault();
  }
};

const getClientX28 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX28 = () => {
  return parseInt(getComputedStyle(list28).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX28 = (x) => {
  list28.style.transform = `translateX(${x}px)`;
};

const bindEvents28 = () => {
  list28.addEventListener('mousedown', onScrollStart28);
  list28.addEventListener('touchstart', onScrollStart28);
  list28.addEventListener('click', onClick28);
};

bindEvents28();

// 요소
const list29 = document.querySelector('.gamelist-game29');
// 사이즈
const listScrollWidth29 = list29.scrollWidth;
const listClientWidth29 = list29.clientWidth;
// 필요한 변수
let startX29 = 0;
let nowX29 = 0;
let endX29 = 0;
let listX29 = 0;

const onScrollStart29 = (e) => {
  startX29 = getClientX29(e);
  window.addEventListener('mousemove', onScrollMove29);
  window.addEventListener('touchmove', onScrollMove29);
  window.addEventListener('mouseup', onScrollEnd29);
  window.addEventListener('touchend', onScrollEnd29);
};

const onScrollMove29 = (e) => {
  nowX29 = getClientX29(e);
  setTranslateX29(listX29 + nowX29 - startX29);
};

const onScrollEnd29 = (e) => {
  endX29 = getClientX29(e);
  listX29 = getTranslateX29();
  if (listX29 > 0) {
    setTranslateX29(0);
    list29.style.transition = `all 0.3s ease`;
    listX29 = 0;
  } else if (listX29 < listClientWidth29 - listScrollWidth29) {
    setTranslateX29(listClientWidth29 - listScrollWidth29);
    list29.style.transition = `all 0.3s ease`;
    listX29 = listClientWidth29 - listScrollWidth29;
  }

  window.removeEventListener('mousedown', onScrollStart29);
  window.removeEventListener('touchstart', onScrollStart29);
  window.removeEventListener('mousemove', onScrollMove29);
  window.removeEventListener('touchmove', onScrollMove29);
  window.removeEventListener('mouseup', onScrollEnd29);
  window.removeEventListener('touchend', onScrollEnd29);
  window.removeEventListener('click', onClick29);

  setTimeout(() => {
    bindEvents29();
    list29.style.transition = '';
  }, 290);
};

const onClick29 = (e) => {
  if (startX29 - endX29 !== 0) {
    e.preventDefault();
  }
};

const getClientX29 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX29 = () => {
  return parseInt(getComputedStyle(list29).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX29 = (x) => {
  list29.style.transform = `translateX(${x}px)`;
};

const bindEvents29 = () => {
  list29.addEventListener('mousedown', onScrollStart29);
  list29.addEventListener('touchstart', onScrollStart29);
  list29.addEventListener('click', onClick29);
};

bindEvents29();

// 요소
const list31 = document.querySelector('.gamelist-game31');
// 사이즈
const listScrollWidth31 = list31.scrollWidth;
const listClientWidth31 = list31.clientWidth;
// 필요한 변수
let startX31 = 0;
let nowX31 = 0;
let endX31 = 0;
let listX31 = 0;

const onScrollStart31 = (e) => {
  startX31 = getClientX31(e);
  window.addEventListener('mousemove', onScrollMove31);
  window.addEventListener('touchmove', onScrollMove31);
  window.addEventListener('mouseup', onScrollEnd31);
  window.addEventListener('touchend', onScrollEnd31);
};

const onScrollMove31 = (e) => {
  nowX31 = getClientX31(e);
  setTranslateX31(listX31 + nowX31 - startX31);
};

const onScrollEnd31 = (e) => {
  endX31 = getClientX31(e);
  listX31 = getTranslateX31();
  if (listX31 > 0) {
    setTranslateX31(0);
    list31.style.transition = `all 0.3s ease`;
    listX31 = 0;
  } else if (listX31 < listClientWidth31 - listScrollWidth31) {
    setTranslateX31(listClientWidth31 - listScrollWidth31);
    list31.style.transition = `all 0.3s ease`;
    listX31 = listClientWidth31 - listScrollWidth31;
  }

  window.removeEventListener('mousedown', onScrollStart31);
  window.removeEventListener('touchstart', onScrollStart31);
  window.removeEventListener('mousemove', onScrollMove31);
  window.removeEventListener('touchmove', onScrollMove31);
  window.removeEventListener('mouseup', onScrollEnd31);
  window.removeEventListener('touchend', onScrollEnd31);
  window.removeEventListener('click', onClick31);

  setTimeout(() => {
    bindEvents31();
    list31.style.transition = '';
  }, 310);
};

const onClick31 = (e) => {
  if (startX31 - endX31 !== 0) {
    e.preventDefault();
  }
};

const getClientX31 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX31 = () => {
  return parseInt(getComputedStyle(list31).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX31 = (x) => {
  list31.style.transform = `translateX(${x}px)`;
};

const bindEvents31 = () => {
  list31.addEventListener('mousedown', onScrollStart31);
  list31.addEventListener('touchstart', onScrollStart31);
  list31.addEventListener('click', onClick31);
};

bindEvents31();

// 요소
const list32 = document.querySelector('.gamelist-game32');
// 사이즈
const listScrollWidth32 = list32.scrollWidth;
const listClientWidth32 = list32.clientWidth;
// 필요한 변수
let startX32 = 0;
let nowX32 = 0;
let endX32 = 0;
let listX32 = 0;

const onScrollStart32 = (e) => {
  startX32 = getClientX32(e);
  window.addEventListener('mousemove', onScrollMove32);
  window.addEventListener('touchmove', onScrollMove32);
  window.addEventListener('mouseup', onScrollEnd32);
  window.addEventListener('touchend', onScrollEnd32);
};

const onScrollMove32 = (e) => {
  nowX32 = getClientX32(e);
  setTranslateX32(listX32 + nowX32 - startX32);
};

const onScrollEnd32 = (e) => {
  endX32 = getClientX32(e);
  listX32 = getTranslateX32();
  if (listX32 > 0) {
    setTranslateX32(0);
    list32.style.transition = `all 0.3s ease`;
    listX32 = 0;
  } else if (listX32 < listClientWidth32 - listScrollWidth32) {
    setTranslateX32(listClientWidth32 - listScrollWidth32);
    list32.style.transition = `all 0.3s ease`;
    listX32 = listClientWidth32 - listScrollWidth32;
  }

  window.removeEventListener('mousedown', onScrollStart32);
  window.removeEventListener('touchstart', onScrollStart32);
  window.removeEventListener('mousemove', onScrollMove32);
  window.removeEventListener('touchmove', onScrollMove32);
  window.removeEventListener('mouseup', onScrollEnd32);
  window.removeEventListener('touchend', onScrollEnd32);
  window.removeEventListener('click', onClick32);

  setTimeout(() => {
    bindEvents32();
    list32.style.transition = '';
  }, 320);
};

const onClick32 = (e) => {
  if (startX32 - endX32 !== 0) {
    e.preventDefault();
  }
};

const getClientX32 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX32 = () => {
  return parseInt(getComputedStyle(list32).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX32 = (x) => {
  list32.style.transform = `translateX(${x}px)`;
};

const bindEvents32 = () => {
  list32.addEventListener('mousedown', onScrollStart32);
  list32.addEventListener('touchstart', onScrollStart32);
  list32.addEventListener('click', onClick32);
};

bindEvents32();

// 요소
const list30 = document.querySelector('.gamelist-game30');
// 사이즈
const listScrollWidth30 = list30.scrollWidth;
const listClientWidth30 = list30.clientWidth;
// 필요한 변수
let startX30 = 0;
let nowX30 = 0;
let endX30 = 0;
let listX30 = 0;

const onScrollStart30 = (e) => {
  startX30 = getClientX30(e);
  window.addEventListener('mousemove', onScrollMove30);
  window.addEventListener('touchmove', onScrollMove30);
  window.addEventListener('mouseup', onScrollEnd30);
  window.addEventListener('touchend', onScrollEnd30);
};

const onScrollMove30 = (e) => {
  nowX30 = getClientX30(e);
  setTranslateX30(listX30 + nowX30 - startX30);
};

const onScrollEnd30 = (e) => {
  endX30 = getClientX30(e);
  listX30 = getTranslateX30();
  if (listX30 > 0) {
    setTranslateX30(0);
    list30.style.transition = `all 0.3s ease`;
    listX30 = 0;
  } else if (listX30 < listClientWidth30 - listScrollWidth30) {
    setTranslateX30(listClientWidth30 - listScrollWidth30);
    list30.style.transition = `all 0.3s ease`;
    listX30 = listClientWidth30 - listScrollWidth30;
  }

  window.removeEventListener('mousedown', onScrollStart30);
  window.removeEventListener('touchstart', onScrollStart30);
  window.removeEventListener('mousemove', onScrollMove30);
  window.removeEventListener('touchmove', onScrollMove30);
  window.removeEventListener('mouseup', onScrollEnd30);
  window.removeEventListener('touchend', onScrollEnd30);
  window.removeEventListener('click', onClick30);

  setTimeout(() => {
    bindEvents30();
    list30.style.transition = '';
  }, 300);
};

const onClick30 = (e) => {
  if (startX30 - endX30 !== 0) {
    e.preventDefault();
  }
};

const getClientX30 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX30 = () => {
  return parseInt(getComputedStyle(list30).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX30 = (x) => {
  list30.style.transform = `translateX(${x}px)`;
};

const bindEvents30 = () => {
  list30.addEventListener('mousedown', onScrollStart30);
  list30.addEventListener('touchstart', onScrollStart30);
  list30.addEventListener('click', onClick30);
};

bindEvents30();

// 요소
const list12 = document.querySelector('.gamelist-game12');
// 사이즈
const listScrollWidth12 = list12.scrollWidth;
const listClientWidth12 = list12.clientWidth;
// 필요한 변수
let startX12 = 0;
let nowX12 = 0;
let endX12 = 0;
let listX12 = 0;

const onScrollStart12 = (e) => {
  startX12 = getClientX12(e);
  window.addEventListener('mousemove', onScrollMove12);
  window.addEventListener('touchmove', onScrollMove12);
  window.addEventListener('mouseup', onScrollEnd12);
  window.addEventListener('touchend', onScrollEnd12);
};

const onScrollMove12 = (e) => {
  nowX12 = getClientX12(e);
  setTranslateX12(listX12 + nowX12 - startX12);
};

const onScrollEnd12 = (e) => {
  endX12 = getClientX12(e);
  listX12 = getTranslateX12();
  if (listX12 > 0) {
    setTranslateX12(0);
    list12.style.transition = `all 0.3s ease`;
    listX12 = 0;
  } else if (listX12 < listClientWidth12 - listScrollWidth12) {
    setTranslateX12(listClientWidth12 - listScrollWidth12);
    list12.style.transition = `all 0.3s ease`;
    listX12 = listClientWidth12 - listScrollWidth12;
  }

  window.removeEventListener('mousedown', onScrollStart12);
  window.removeEventListener('touchstart', onScrollStart12);
  window.removeEventListener('mousemove', onScrollMove12);
  window.removeEventListener('touchmove', onScrollMove12);
  window.removeEventListener('mouseup', onScrollEnd12);
  window.removeEventListener('touchend', onScrollEnd12);
  window.removeEventListener('click', onClick12);

  setTimeout(() => {
    bindEvents12();
    list12.style.transition = '';
  }, 300);
};

const onClick12 = (e) => {
  if (startX12 - endX12 !== 0) {
    e.preventDefault();
  }
};

const getClientX12 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX12 = () => {
  return parseInt(getComputedStyle(list12).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX12 = (x) => {
  list12.style.transform = `translateX(${x}px)`;
};

const bindEvents12 = () => {
  list12.addEventListener('mousedown', onScrollStart12);
  list12.addEventListener('touchstart', onScrollStart12);
  list12.addEventListener('click', onClick12);
};

bindEvents12();

// 요소
const list10 = document.querySelector('.gamelist-game10');
// 사이즈
const listScrollWidth10 = list10.scrollWidth;
const listClientWidth10 = list10.clientWidth;
// 필요한 변수
let startX10 = 0;
let nowX10 = 0;
let endX10 = 0;
let listX10 = 0;

const onScrollStart10 = (e) => {
  startX10 = getClientX10(e);
  window.addEventListener('mousemove', onScrollMove10);
  window.addEventListener('touchmove', onScrollMove10);
  window.addEventListener('mouseup', onScrollEnd10);
  window.addEventListener('touchend', onScrollEnd10);
};

const onScrollMove10 = (e) => {
  nowX10 = getClientX10(e);
  setTranslateX10(listX10 + nowX10 - startX10);
};

const onScrollEnd10 = (e) => {
  endX10 = getClientX10(e);
  listX10 = getTranslateX10();
  if (listX10 > 0) {
    setTranslateX10(0);
    list10.style.transition = `all 0.3s ease`;
    listX10 = 0;
  } else if (listX10 < listClientWidth10 - listScrollWidth10) {
    setTranslateX10(listClientWidth10 - listScrollWidth10);
    list10.style.transition = `all 0.3s ease`;
    listX10 = listClientWidth10 - listScrollWidth10;
  }

  window.removeEventListener('mousedown', onScrollStart10);
  window.removeEventListener('touchstart', onScrollStart10);
  window.removeEventListener('mousemove', onScrollMove10);
  window.removeEventListener('touchmove', onScrollMove10);
  window.removeEventListener('mouseup', onScrollEnd10);
  window.removeEventListener('touchend', onScrollEnd10);
  window.removeEventListener('click', onClick10);

  setTimeout(() => {
    bindEvents10();
    list10.style.transition = '';
  }, 300);
};

const onClick10 = (e) => {
  if (startX10 - endX10 !== 0) {
    e.preventDefault();
  }
};

const getClientX10 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX10 = () => {
  return parseInt(getComputedStyle(list10).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX10 = (x) => {
  list10.style.transform = `translateX(${x}px)`;
};

const bindEvents10 = () => {
  list10.addEventListener('mousedown', onScrollStart10);
  list10.addEventListener('touchstart', onScrollStart10);
  list10.addEventListener('click', onClick10);
};

bindEvents10();

// 요소
const list9 = document.querySelector('.gamelist-game9');
// 사이즈
const listScrollWidth9 = list9.scrollWidth;
const listClientWidth9 = list9.clientWidth;
// 필요한 변수
let startX9 = 0;
let nowX9 = 0;
let endX9 = 0;
let listX9 = 0;

const onScrollStart9 = (e) => {
  startX9 = getClientX9(e);
  window.addEventListener('mousemove', onScrollMove9);
  window.addEventListener('touchmove', onScrollMove9);
  window.addEventListener('mouseup', onScrollEnd9);
  window.addEventListener('touchend', onScrollEnd9);
};

const onScrollMove9 = (e) => {
  nowX9 = getClientX9(e);
  setTranslateX9(listX9 + nowX9 - startX9);
};

const onScrollEnd9 = (e) => {
  endX9 = getClientX9(e);
  listX9 = getTranslateX9();
  if (listX9 > 0) {
    setTranslateX9(0);
    list9.style.transition = `all 0.3s ease`;
    listX9 = 0;
  } else if (listX9 < listClientWidth9 - listScrollWidth9) {
    setTranslateX9(listClientWidth9 - listScrollWidth9);
    list9.style.transition = `all 0.3s ease`;
    listX9 = listClientWidth9 - listScrollWidth9;
  }

  window.removeEventListener('mousedown', onScrollStart9);
  window.removeEventListener('touchstart', onScrollStart9);
  window.removeEventListener('mousemove', onScrollMove9);
  window.removeEventListener('touchmove', onScrollMove9);
  window.removeEventListener('mouseup', onScrollEnd9);
  window.removeEventListener('touchend', onScrollEnd9);
  window.removeEventListener('click', onClick9);

  setTimeout(() => {
    bindEvents9();
    list9.style.transition = '';
  }, 300);
};

const onClick9 = (e) => {
  if (startX9 - endX9 !== 0) {
    e.preventDefault();
  }
};

const getClientX9 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX9 = () => {
  return parseInt(getComputedStyle(list9).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX9 = (x) => {
  list9.style.transform = `translateX(${x}px)`;
};

const bindEvents9 = () => {
  list9.addEventListener('mousedown', onScrollStart9);
  list9.addEventListener('touchstart', onScrollStart9);
  list9.addEventListener('click', onClick9);
};

bindEvents9();

// 요소
const list8 = document.querySelector('.gamelist-game8');
// 사이즈
const listScrollWidth8 = list8.scrollWidth;
const listClientWidth8 = list8.clientWidth;
// 필요한 변수
let startX8 = 0;
let nowX8 = 0;
let endX8 = 0;
let listX8 = 0;

const onScrollStart8 = (e) => {
  startX8 = getClientX8(e);
  window.addEventListener('mousemove', onScrollMove8);
  window.addEventListener('touchmove', onScrollMove8);
  window.addEventListener('mouseup', onScrollEnd8);
  window.addEventListener('touchend', onScrollEnd8);
};

const onScrollMove8 = (e) => {
  nowX8 = getClientX8(e);
  setTranslateX8(listX8 + nowX8 - startX8);
};

const onScrollEnd8 = (e) => {
  endX8 = getClientX8(e);
  listX8 = getTranslateX8();
  if (listX8 > 0) {
    setTranslateX8(0);
    list8.style.transition = `all 0.3s ease`;
    listX8 = 0;
  } else if (listX8 < listClientWidth8 - listScrollWidth8) {
    setTranslateX8(listClientWidth8 - listScrollWidth8);
    list8.style.transition = `all 0.3s ease`;
    listX8 = listClientWidth8 - listScrollWidth8;
  }

  window.removeEventListener('mousedown', onScrollStart8);
  window.removeEventListener('touchstart', onScrollStart8);
  window.removeEventListener('mousemove', onScrollMove8);
  window.removeEventListener('touchmove', onScrollMove8);
  window.removeEventListener('mouseup', onScrollEnd8);
  window.removeEventListener('touchend', onScrollEnd8);
  window.removeEventListener('click', onClick8);

  setTimeout(() => {
    bindEvents8();
    list8.style.transition = '';
  }, 300);
};

const onClick8 = (e) => {
  if (startX8 - endX8 !== 0) {
    e.preventDefault();
  }
};

const getClientX8 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX8 = () => {
  return parseInt(getComputedStyle(list8).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX8 = (x) => {
  list8.style.transform = `translateX(${x}px)`;
};

const bindEvents8 = () => {
  list8.addEventListener('mousedown', onScrollStart8);
  list8.addEventListener('touchstart', onScrollStart8);
  list8.addEventListener('click', onClick8);
};

bindEvents8();

// 요소
const list7 = document.querySelector('.gamelist-game7');
// 사이즈
const listScrollWidth7 = list7.scrollWidth;
const listClientWidth7 = list7.clientWidth;
// 필요한 변수
let startX7 = 0;
let nowX7 = 0;
let endX7 = 0;
let listX7 = 0;

const onScrollStart7 = (e) => {
  startX7 = getClientX7(e);
  window.addEventListener('mousemove', onScrollMove7);
  window.addEventListener('touchmove', onScrollMove7);
  window.addEventListener('mouseup', onScrollEnd7);
  window.addEventListener('touchend', onScrollEnd7);
};

const onScrollMove7 = (e) => {
  nowX7 = getClientX7(e);
  setTranslateX7(listX7 + nowX7 - startX7);
};

const onScrollEnd7 = (e) => {
  endX7 = getClientX7(e);
  listX7 = getTranslateX7();
  if (listX7 > 0) {
    setTranslateX7(0);
    list7.style.transition = `all 0.3s ease`;
    listX7 = 0;
  } else if (listX7 < listClientWidth7 - listScrollWidth7) {
    setTranslateX7(listClientWidth7 - listScrollWidth7);
    list7.style.transition = `all 0.3s ease`;
    listX7 = listClientWidth7 - listScrollWidth7;
  }

  window.removeEventListener('mousedown', onScrollStart7);
  window.removeEventListener('touchstart', onScrollStart7);
  window.removeEventListener('mousemove', onScrollMove7);
  window.removeEventListener('touchmove', onScrollMove7);
  window.removeEventListener('mouseup', onScrollEnd7);
  window.removeEventListener('touchend', onScrollEnd7);
  window.removeEventListener('click', onClick7);

  setTimeout(() => {
    bindEvents7();
    list7.style.transition = '';
  }, 300);
};

const onClick7 = (e) => {
  if (startX7 - endX7 !== 0) {
    e.preventDefault();
  }
};

const getClientX7 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX7 = () => {
  return parseInt(getComputedStyle(list7).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX7 = (x) => {
  list7.style.transform = `translateX(${x}px)`;
};

const bindEvents7 = () => {
  list7.addEventListener('mousedown', onScrollStart7);
  list7.addEventListener('touchstart', onScrollStart7);
  list7.addEventListener('click', onClick7);
};

bindEvents7();

// 요소
const list6 = document.querySelector('.gamelist-game6');
// 사이즈
const listScrollWidth6 = list6.scrollWidth;
const listClientWidth6 = list6.clientWidth;
// 필요한 변수
let startX6 = 0;
let nowX6 = 0;
let endX6 = 0;
let listX6 = 0;

const onScrollStart6 = (e) => {
  startX6 = getClientX6(e);
  window.addEventListener('mousemove', onScrollMove6);
  window.addEventListener('touchmove', onScrollMove6);
  window.addEventListener('mouseup', onScrollEnd6);
  window.addEventListener('touchend', onScrollEnd6);
};

const onScrollMove6 = (e) => {
  nowX6 = getClientX6(e);
  setTranslateX6(listX6 + nowX6 - startX6);
};

const onScrollEnd6 = (e) => {
  endX6 = getClientX6(e);
  listX6 = getTranslateX6();
  if (listX6 > 0) {
    setTranslateX6(0);
    list6.style.transition = `all 0.3s ease`;
    listX6 = 0;
  } else if (listX6 < listClientWidth6 - listScrollWidth6) {
    setTranslateX6(listClientWidth6 - listScrollWidth6);
    list6.style.transition = `all 0.3s ease`;
    listX6 = listClientWidth6 - listScrollWidth6;
  }

  window.removeEventListener('mousedown', onScrollStart6);
  window.removeEventListener('touchstart', onScrollStart6);
  window.removeEventListener('mousemove', onScrollMove6);
  window.removeEventListener('touchmove', onScrollMove6);
  window.removeEventListener('mouseup', onScrollEnd6);
  window.removeEventListener('touchend', onScrollEnd6);
  window.removeEventListener('click', onClick6);

  setTimeout(() => {
    bindEvents6();
    list6.style.transition = '';
  }, 300);
};

const onClick6 = (e) => {
  if (startX6 - endX6 !== 0) {
    e.preventDefault();
  }
};

const getClientX6 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX6 = () => {
  return parseInt(getComputedStyle(list6).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX6 = (x) => {
  list6.style.transform = `translateX(${x}px)`;
};

const bindEvents6 = () => {
  list6.addEventListener('mousedown', onScrollStart6);
  list6.addEventListener('touchstart', onScrollStart6);
  list6.addEventListener('click', onClick6);
};

bindEvents6();

// 요소
const list5 = document.querySelector('.gamelist-game5');
// 사이즈
const listScrollWidth5 = list5.scrollWidth;
const listClientWidth5 = list5.clientWidth;
// 필요한 변수
let startX5 = 0;
let nowX5 = 0;
let endX5 = 0;
let listX5 = 0;

const onScrollStart5 = (e) => {
  startX5 = getClientX5(e);
  window.addEventListener('mousemove', onScrollMove5);
  window.addEventListener('touchmove', onScrollMove5);
  window.addEventListener('mouseup', onScrollEnd5);
  window.addEventListener('touchend', onScrollEnd5);
};

const onScrollMove5 = (e) => {
  nowX5 = getClientX5(e);
  setTranslateX5(listX5 + nowX5 - startX5);
};

const onScrollEnd5 = (e) => {
  endX5 = getClientX5(e);
  listX5 = getTranslateX5();
  if (listX5 > 0) {
    setTranslateX5(0);
    list5.style.transition = `all 0.3s ease`;
    listX5 = 0;
  } else if (listX5 < listClientWidth5 - listScrollWidth5) {
    setTranslateX5(listClientWidth5 - listScrollWidth5);
    list5.style.transition = `all 0.3s ease`;
    listX5 = listClientWidth5 - listScrollWidth5;
  }

  window.removeEventListener('mousedown', onScrollStart5);
  window.removeEventListener('touchstart', onScrollStart5);
  window.removeEventListener('mousemove', onScrollMove5);
  window.removeEventListener('touchmove', onScrollMove5);
  window.removeEventListener('mouseup', onScrollEnd5);
  window.removeEventListener('touchend', onScrollEnd5);
  window.removeEventListener('click', onClick5);

  setTimeout(() => {
    bindEvents5();
    list5.style.transition = '';
  }, 300);
};

const onClick5 = (e) => {
  if (startX5 - endX5 !== 0) {
    e.preventDefault();
  }
};

const getClientX5 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX5 = () => {
  return parseInt(getComputedStyle(list5).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX5 = (x) => {
  list5.style.transform = `translateX(${x}px)`;
};

const bindEvents5 = () => {
  list5.addEventListener('mousedown', onScrollStart5);
  list5.addEventListener('touchstart', onScrollStart5);
  list5.addEventListener('click', onClick5);
};

bindEvents5();

// 요소
const list4 = document.querySelector('.gamelist-game4');
// 사이즈
const listScrollWidth4 = list4.scrollWidth;
const listClientWidth4 = list4.clientWidth;
// 필요한 변수
let startX4 = 0;
let nowX4 = 0;
let endX4 = 0;
let listX4 = 0;

const onScrollStart4 = (e) => {
  startX4 = getClientX4(e);
  window.addEventListener('mousemove', onScrollMove4);
  window.addEventListener('touchmove', onScrollMove4);
  window.addEventListener('mouseup', onScrollEnd4);
  window.addEventListener('touchend', onScrollEnd4);
};

const onScrollMove4 = (e) => {
  nowX4 = getClientX4(e);
  setTranslateX4(listX4 + nowX4 - startX4);
};

const onScrollEnd4 = (e) => {
  endX4 = getClientX4(e);
  listX4 = getTranslateX4();
  if (listX4 > 0) {
    setTranslateX4(0);
    list4.style.transition = `all 0.3s ease`;
    listX4 = 0;
  } else if (listX4 < listClientWidth4 - listScrollWidth4) {
    setTranslateX4(listClientWidth4 - listScrollWidth4);
    list4.style.transition = `all 0.3s ease`;
    listX4 = listClientWidth4 - listScrollWidth4;
  }

  window.removeEventListener('mousedown', onScrollStart4);
  window.removeEventListener('touchstart', onScrollStart4);
  window.removeEventListener('mousemove', onScrollMove4);
  window.removeEventListener('touchmove', onScrollMove4);
  window.removeEventListener('mouseup', onScrollEnd4);
  window.removeEventListener('touchend', onScrollEnd4);
  window.removeEventListener('click', onClick4);

  setTimeout(() => {
    bindEvents4();
    list4.style.transition = '';
  }, 300);
};

const onClick4 = (e) => {
  if (startX4 - endX4 !== 0) {
    e.preventDefault();
  }
};

const getClientX4 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX4 = () => {
  return parseInt(getComputedStyle(list4).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX4 = (x) => {
  list4.style.transform = `translateX(${x}px)`;
};

const bindEvents4 = () => {
  list4.addEventListener('mousedown', onScrollStart4);
  list4.addEventListener('touchstart', onScrollStart4);
  list4.addEventListener('click', onClick4);
};

bindEvents4();

// 요소
const list3 = document.querySelector('.gamelist-game3');
// 사이즈
const listScrollWidth3 = list3.scrollWidth;
const listClientWidth3 = list3.clientWidth;
// 필요한 변수
let startX3 = 0;
let nowX3 = 0;
let endX3 = 0;
let listX3 = 0;

const onScrollStart3 = (e) => {
  startX3 = getClientX3(e);
  window.addEventListener('mousemove', onScrollMove3);
  window.addEventListener('touchmove', onScrollMove3);
  window.addEventListener('mouseup', onScrollEnd3);
  window.addEventListener('touchend', onScrollEnd3);
};

const onScrollMove3 = (e) => {
  nowX3 = getClientX3(e);
  setTranslateX3(listX3 + nowX3 - startX3);
};

const onScrollEnd3 = (e) => {
  endX3 = getClientX3(e);
  listX3 = getTranslateX3();
  if (listX3 > 0) {
    setTranslateX3(0);
    list3.style.transition = `all 0.3s ease`;
    listX3 = 0;
  } else if (listX3 < listClientWidth3 - listScrollWidth3) {
    setTranslateX3(listClientWidth3 - listScrollWidth3);
    list3.style.transition = `all 0.3s ease`;
    listX3 = listClientWidth3 - listScrollWidth3;
  }

  window.removeEventListener('mousedown', onScrollStart3);
  window.removeEventListener('touchstart', onScrollStart3);
  window.removeEventListener('mousemove', onScrollMove3);
  window.removeEventListener('touchmove', onScrollMove3);
  window.removeEventListener('mouseup', onScrollEnd3);
  window.removeEventListener('touchend', onScrollEnd3);
  window.removeEventListener('click', onClick3);

  setTimeout(() => {
    bindEvents3();
    list3.style.transition = '';
  }, 300);
};

const onClick3 = (e) => {
  if (startX3 - endX3 !== 0) {
    e.preventDefault();
  }
};

const getClientX3 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX3 = () => {
  return parseInt(getComputedStyle(list3).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX3 = (x) => {
  list3.style.transform = `translateX(${x}px)`;
};

const bindEvents3 = () => {
  list3.addEventListener('mousedown', onScrollStart3);
  list3.addEventListener('touchstart', onScrollStart3);
  list3.addEventListener('click', onClick3);
};

bindEvents3();

// 요소
const list33 = document.querySelector('.gamelist-game33');
// 사이즈
const listScrollWidth33 = list33.scrollWidth;
const listClientWidth33 = list33.clientWidth;
// 필요한 변수
let startX33 = 0;
let nowX33 = 0;
let endX33 = 0;
let listX33 = 0;

const onScrollStart33 = (e) => {
  startX33 = getClientX33(e);
  window.addEventListener('mousemove', onScrollMove33);
  window.addEventListener('touchmove', onScrollMove33);
  window.addEventListener('mouseup', onScrollEnd33);
  window.addEventListener('touchend', onScrollEnd33);
};

const onScrollMove33 = (e) => {
  nowX33 = getClientX33(e);
  setTranslateX33(listX33 + nowX33 - startX33);
};

const onScrollEnd33 = (e) => {
  endX33 = getClientX33(e);
  listX33 = getTranslateX33();
  if (listX33 > 0) {
    setTranslateX33(0);
    list33.style.transition = `all 0.3s ease`;
    listX33 = 0;
  } else if (listX33 < listClientWidth33 - listScrollWidth33) {
    setTranslateX33(listClientWidth33 - listScrollWidth33);
    list33.style.transition = `all 0.3s ease`;
    listX33 = listClientWidth33 - listScrollWidth33;
  }

  window.removeEventListener('mousedown', onScrollStart33);
  window.removeEventListener('touchstart', onScrollStart33);
  window.removeEventListener('mousemove', onScrollMove33);
  window.removeEventListener('touchmove', onScrollMove33);
  window.removeEventListener('mouseup', onScrollEnd33);
  window.removeEventListener('touchend', onScrollEnd33);
  window.removeEventListener('click', onClick33);

  setTimeout(() => {
    bindEvents33();
    list33.style.transition = '';
  }, 300);
};

const onClick33 = (e) => {
  if (startX33 - endX33 !== 0) {
    e.preventDefault();
  }
};

const getClientX33 = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX33 = () => {
  return parseInt(getComputedStyle(list33).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX33 = (x) => {
  list33.style.transform = `translateX(${x}px)`;
};

const bindEvents33 = () => {
  list33.addEventListener('mousedown', onScrollStart33);
  list33.addEventListener('touchstart', onScrollStart33);
  list33.addEventListener('click', onClick33);
};

bindEvents33();
*/