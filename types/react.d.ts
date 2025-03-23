// This file declares React module types to resolve the "Cannot find module 'react'" issue
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
}

declare module 'react-dom' {
  import * as ReactDOM from 'react-dom';
  export = ReactDOM;
  export as namespace ReactDOM;
}

declare module 'next/link' {
  import * as Link from 'next/link';
  export = Link;
  export default Link;
}

declare module 'next/image' {
  import * as Image from 'next/image';
  export = Image;
  export default Image;
}

declare module 'next/navigation' {
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
  };
  
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
  
  export function useParams(): {
    [key: string]: string | string[];
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 