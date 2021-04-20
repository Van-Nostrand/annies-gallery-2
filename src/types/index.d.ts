declare module "\*.svg" {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "cloudinary-react" {
  export const Image;
  export const Transformation;
  export const CloudinaryContext;
  // import React = require('react');
  // export interface Image {
  //   publicId?: string
  // }
  // export interface Transformation {

  // }
  // export interface CloudinaryContext {
  //   cloudName?: string
  // }
  // const src: string;
  // export default src;
}


declare module "cloudinary-config";
declare module "ImageWithObserver" {
};

//node require
declare const require: any;