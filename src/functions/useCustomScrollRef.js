import { useState, useLayoutEffect } from "react";

//bufferValue is an integer defining the number of pixels past the target element that can be scrolled to before sending show=false
export function useCustomScrollRef(scrollRef, bufferValue){
  const [show, doShow] = useState(false);
  const [buffer, setBuffer] = useState(bufferValue);

  useLayoutEffect(() => {

    //get the top position of an element
    const topPos = element => element.getBoundingClientRect().top;
    const bottomPos = element => element.getBoundingClientRect().bottom;

    

    // add window.scrollY to mitigate issues when refreshing the page.
    //element.getBoundingClientRect() is relative to the window when the page loads
    //if the user refreshes the page while scrolled halfway down, and the page loads scrolled past the target element, then the target element returns a negative value and "show" will never flag true
    const scrollTargetTop = topPos(scrollRef.current) + window.scrollY;
    const scrollTargetBottom = bottomPos(scrollRef.current) + window.scrollY;

    // console.log("scrolltargettop");
    // console.log(scrollTargetTop)

    const onScroll = () => {

      //get the scroll position
      const scrollPosTop = window.scrollY;
      // console.log(`target is between ${scrollTargetTop} and  ${scrollTargetBottom}`);

      //see if the scroll position is past the div
      if (scrollTargetTop < scrollPosTop && scrollTargetBottom + buffer > scrollPosTop) {
        doShow(true);
      } 
      else if(scrollTargetTop > scrollPosTop){
        doShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return show;
}