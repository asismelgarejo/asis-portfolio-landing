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
export const getTotalOffset = (el: HTMLElement) => {
  return getParentOffset(el, el?.offsetTop);
};
export const getElementBoundaries = (el: HTMLElement) => {
  const top = getTotalOffset(el);
  const bottom = top + el.offsetHeight; 
  return {top, bottom };
};
