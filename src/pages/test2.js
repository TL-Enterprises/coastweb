import * as React from "react"
// import { Layout } from "../components/layout"
// import GoBack from "../components/goBack"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"

import { SRLWrapper } from "simple-react-lightbox"

import styled from "styled-components"
const CustomBox = styled.div`


// .parent { 
//   display: grid; 
//   grid-template-columns: 2fr 3fr; 
//   grid-template-rows: repeat(2, 1fr); 
//   grid-column-gap: 20vw;
//   grid-row-gap: 20vh; 
//   }

//   .parent div{border:1px solid red;}
//   .div1 { grid-area: 1 / 1 / 2 / 2; } 
//   .div2 { grid-area: 1 / 2 / 2 / 3; } 
//   .div3 { grid-area: 2 / 1 / 3 / 3; } 
//   .div4 { grid-area: 2 / 1 / 3 / 2; } 
//   .div5 { grid-area: 2 / 2 / 3 / 3; } 



@media (max-width: 48rem) {
.parent {flex-direction:column !important;}
.parent div{width:100% !important;}
}



.horizontal-scroll-wrapper  img{cursor:zoom-in !important;  border-radius:12px !important;}

.horizontal-scroll-wrapper img:hover{border:4px solid #dd4000 !important;}

// .gatsby-image-wrapper{cursor:zoom-in !important;}

  border-radius:12px;


.horizontal-scroll-wrapper {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(350px + 1px);
  max-height: 100vw;
  margin: 0;
  padding-top: 1px;
  // background: #abc;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-350px);
  transform-origin: right top;
  z-index:0;
}
.horizontal-scroll-wrapper > * {
  display: block;
  padding: 5px;
  // background: #cab;
  transform: rotate(90deg);
  transform-origin: right top;
}

// .squares {
//   padding: 350px 0 0 0;
// }
// .squares > div {
//   width: 350px;
//   height: 350px;
//   margin: 10px 0;
// }

@media (pointer: coarse) {
  .horizontal-scroll-wrapper {
    transform: none;
    width: 100vw;
    height: 350px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .horizontal-scroll-wrapper > * {
    transform: none;
    display: inline-block;
  }

  .squares {
    padding-top: 0;
  }
  .squares > * {
    margin: 0 10px;
  }
}



`


const options = {
  settings: {
    autoplaySpeed: 4000,
    // boxShadow: '0px 0px 20px #fff',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    // overlayColor: 'rgba(185, 7, 230, 0.5)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: true
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#f2f2f2',
    fillColor: '#000000',
    height: '3px',
    showProgressBar: true
  },
};

export default function test2Page() {
   return (


    <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}


    {/* <div className="parent"> 
<div className="div1"> div 1</div> 
<div className="div2"> div 2</div> 
<div className="div3"> div 3</div> 
<div className="div4"> div 4</div> 
<div className="div5"> div 5</div> 
</div> */}




<SRLWrapper options={options} className="">
  <div style={{display:'block', width:'100%', height:'350px', overflow:'hidden', position:'relative'}}>
<div class="horizontal-scroll-wrapper squares">
  {/* <div>item 1</div>
  <div>item 2</div>
  <div>item 3</div>
  <div>item 4</div>
  <div>item 5</div>
  <div>item 6</div>
  <div>item 7</div>
  <div>item 8</div> */}







<StaticImage
       src="../../src/img/DendroidDreams/dances-with-the-moon.jpg"
       alt="Image 2"
       srl_gallery_image="true"
       className="item"
       
     />

<StaticImage
       src="../../src/img/DendroidDreams/big-dreams.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />

{/* <Link state={{modal: true}} to="/transcendence/" alt="Image 2"
  
       className="item" style={{margin:'', textDecoration:'none', fontSize:'120%', textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-6.jpg" alt="Todd builds Web Apps"  />
  <br />
Animated SVG VIDEO
</Link> */}

<StaticImage
       src="../../src/img/DendroidDreams/amber-oak.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />


<StaticImage
       src="../../src/img/DendroidDreams/deciduous-doiley.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../src/img/DendroidDreams/evening-crown.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../src/img/DendroidDreams/gnarled-barkley.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../src/img/DendroidDreams/lonely-tree.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../src/img/DendroidDreams/moaning-tree.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../src/img/DendroidDreams/silver-serenity.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />
     <StaticImage
       src="../../src/img/DendroidDreams/tree-tops.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />
     <StaticImage
       src="../../src/img/DendroidDreams/tree-with-a-view.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />
     <StaticImage
       src="../../src/img/DendroidDreams/waimeia-milkyway.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />
     <StaticImage
       src="../../src/img/DendroidDreams/wishing-tree.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />



</div>
</div>
</SRLWrapper>
    {/* <div className="zoombox">
      <SRLWrapper options={options} className="">

   <StaticImage
          src="../../src/img/DendroidDreams/sea-of-sorrow.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12', margin:'1rem 4%'}}
        />

<div className="masonry4" style={{}}>

<StaticImage
          src="../../src/img/DendroidDreams/dances-with-the-moon.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
          
        />

<StaticImage
          src="../../src/img/DendroidDreams/big-dreams.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/amber-oak.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/deciduous-doiley.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/evening-crown.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/gnarled-barkley.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/lonely-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/moaning-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/silver-serenity.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-tops.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-with-a-view.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/waimeia-milkyway.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/wishing-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

</div>
</SRLWrapper>
  </div> */}
    
    {/* </Layout> */}
</CustomBox>
  )
}
