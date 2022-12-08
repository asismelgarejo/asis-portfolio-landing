const getParentOffset = (
  el: HTMLElement | null,
  off: number | undefined
): number => {
  if (!el || !off) return 0;
  const parent = el.parentElement;
  if (parent && parent.hasAttribute("data-no-count-offset"))
    return getParentOffset(parent, off);
  if (parent) return getParentOffset(parent, parent.offsetTop + off);
  return off;
};
export const getTotalOffset = (idEl: string) => {
  const el = document.getElementById(idEl);
  return getParentOffset(el, el?.offsetTop);
};

export const screenScrollTo = (top: number) => {
  window.scrollTo({ top });
};
