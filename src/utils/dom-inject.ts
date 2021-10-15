const injectBtns = (matchFn: () => HTMLElement | null, cb: (dom: HTMLElement) => void) => {
  const dom = matchFn();
  if (!dom) return false;

  cb(dom);
  return true;
};

export const inject = (matchFn: () => HTMLElement | null, cb: (dom: HTMLElement) => void) => {
  let cnt = 0;

  const timer = setInterval(() => {
    console.log('tick');
    cnt++;
    if (cnt > 10 || injectBtns(matchFn, cb)) {
      clearInterval(timer);
      if (cnt > 10) console.error('inject failed');
    }
  }, 500);
};
