type NotchPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

export function getNotchedClipPath(position: NotchPosition, size: number): string {
  switch (position) {
    case 'bottom-right':
      return `polygon(0 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%)`;
    case 'bottom-left':
      return `polygon(0 0, 100% 0, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`;
    case 'top-right':
      return `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, 0 100%)`;
    case 'top-left':
      return `polygon(${size}px 0, 100% 0, 100% 100%, 0 100%, 0 ${size}px)`;
  }
}
