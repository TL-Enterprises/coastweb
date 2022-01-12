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

export default function favPage() {
   return (


    <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}
<SRLWrapper options={options} className="">
  
{/* <p style={{textAlign:'center', margin:'4rem 0 10px 0'}}>Custom SVG Animations</p> */}



<p className="todd-headline" style={{textAlign:'center', margin:'4rem 0 10px 0'}}>Conceptual Photography</p>

  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'375px', overflow:'hidden', position:'relative', padding:' 0', margin:'0 0 0 0'}}>


<div className="RArrow">
  <span>&#10095;</span>
</div>


<div className="horizontal-scroll-wrapper squares" style={{margin:'30px auto 0 auto', width:'', padding:'30px 0'}}>


<StaticImage
        src="../../static/assets/transparent.png"
        alt="-->Done, you've viewed all of the images.<--"
        srl_gallery_image="true"
        className="item"
        style={{width:''}}
      />


<StaticImage
        src="../../src/img/favorites/night165.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../../src/img/favorites/night22.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../src/img/favorites/night146.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../src/img/favorites/night153.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../src/img/favorites/night156.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />

      <StaticImage
        src="../../src/img/favorites/night182.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night211.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night212.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night213.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night215.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night217.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night219.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
      src="../../src/img/favorites/night221.jpg"
      alt="Night Photography"
      srl_gallery_image="true"
      className="item"
    />
    <StaticImage
        src="../../src/img/favorites/night225.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night229.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night244.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night245.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night263.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night283.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night294.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night295.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night297.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night300.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night303.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night307.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night311.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night316.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night324.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />
      <StaticImage
        src="../../src/img/favorites/night344.jpg"
        alt="Night Photography"
        srl_gallery_image="true"
        className="item"
      />

 
     </div>


     <a aria-label="Link to VidSocks.com" className="post-card noexit" rel="noreferrer" target="_blank" href="https://twilightscapes.com" title="Link to VidSocks.com" style={{position:'absolute', left:'0', top:'10px', zIndex:'1', width:'60px',  background:'rgba(0, 0, 0, .9)', height:'340px', display:'flex', borderRadius:'0 12px 12px 0'}}>
  <div style={{position:'absolute', right:'160%', top:'', transform: 'rotate(90deg)', width:'', height:'100%', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap',}}>Visit Twilightscapes.com</div>
</a>


</div>





















</SRLWrapper>








     
    
    {/* </Layout> */}
</CustomBox>
  )
}