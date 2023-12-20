/// <reference types="astro/client" />
declare namespace astroHTML.JSX {
    interface HTMLAttributes {
      'className'?: string;
      'onClick'?: () => void;
    }
    interface SVGAttributes {
        'className'?: string;
        'strokeWidth'?: number;
        'strokeLinecap'?: string;
    }
}