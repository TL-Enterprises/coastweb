/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { VscFilePdf } from "react-icons/vsc"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
import ScrollAnimation from 'react-animate-on-scroll'
import Contact from '../components/Contact-inc'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
// import CasePanels from "../components/casepanels"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"
// import LineTest from "../../static/assets/textualhealing.svg"
// import Portfolio from "../pages/portfolio"
// import Photos from "../pages/favorites"
// import Animation from "../pages/animation"
import LHScores from "../../static/assets/LH-Scores.svg"
import NFTDetails from "../components/nft-details"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import styled from "styled-components"
import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {


    allFile(
      filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/img/portfolio/"}}
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }





    


    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 9
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

const options = {
  settings: {
    autoplaySpeed: 3000,
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
    showDownloadButton: true,
    showFullscreenButton: true,
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
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
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


const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()
    // const now = new Date();
    // now.setDate(now.getDate()+14);
    // const AvaNow = now;

    // const nextWeek = new Date()

    // add 7 days to the current date
    // nextWeek.setDate(new Date().getDate() + 7)
    

    
    const current = new Date();
  const date = `${current.getMonth()+2}/${current.getDate()+2}/${current.getFullYear()}`;



    // const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="VidSocks Rock" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="VidSocks Rock" ></object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      
      // url={[
      //   iframeUrl,
      //   YoutuberSuggestion1,
      //   YoutuberSuggestion2,
      //   YoutuberSuggestion3
      // ]}
      width="100%"
      height="100%"
 
      config={{
        youtube: {
          playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
      playing
      playsinline
//       playIcon={
//         <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

//     <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
      

//       <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
// <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
// </div>
  
//       <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
// <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
//       </div>
//       </button>}
//         light="../assets/transparent.png"
      />
    )
  }

  

  

  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage vidsock triple" />
</Helmet>
<Seo
          title={`Gulf Coast Web Sites | Web Developer and Product Designer`}
          description={`Coast Web builds websites, web apps and creates digital products. We also do conceptual photography and multimedia`}
          image={'https://coastweb.site/assets/todd-camping.jpg'}
        />
       {/* <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      /> */}
      
      




        <div name="container21" className="container21" style={{height:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}






{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'0 2rem', maxHeight:'90vh',}}>


          <h1 className="title1">{frontmatter.title}</h1>
          <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2>

          <div
          style={{}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
  <br />
          <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link>

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}



<br />
<br />
{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'70vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'70vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   




{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )}
{/* </div> */}



<ScrollAnimation className="" animateIn="bounceInUp" delay={550} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'', margin:'', padding:'',  width:'', zIndex:'', textAlign:'',}}>
<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div>
</ScrollAnimation>

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}


{/* end show Posts */}
{ShowPosts ? (

<div>
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>

  

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}



 <section id="intro" className="child intro" style={{position:'relative', height:'100vh', paddingTop:'', overflow:'', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center',
// fontSize: 'clamp(18px, calc(1rem + 2vw), 36px)',
fontSize:'clamp(2.5rem, 3.5vw, 3.8rem)', 
background: 'rgba(196, 189, 179, .4)'
}}>


<div style={{width:'100vw', height:'100vh', position:'fixed', top:'0', zIndex:'-1', opacity:'', overflow:''}}>


{/* <LineTest /> */}



<h3 style={{fontSize:'25vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(7deg)', bottom:'35vh'}}>coast</h3>

<h3 style={{fontSize:'35vw', opacity:'.1', transform: 'skewY(20deg)', transform:'rotate(-8deg)', bottom:'0', border:'0px solid red'}}>design</h3>

<h3 style={{fontSize:'20vw', opacity:'.1', transform: 'skewY(-20deg)', transform:'rotate(2deg)', position:'absolute', top:'39vh', left:'20vw', fontWeight:'bold'}}>bay st. louis</h3>

<h3 style={{fontSize:'10vw', opacity:'.2', transform: 'skewY(140deg)', transform:'rotate(-15deg)', position:'absolute', top:'0', fontWeight:'bold'}}>gulfport</h3>

<h3 style={{fontSize:'18vw', opacity:'.2', transform: 'skewY(-0deg)', transform:'rotate(32deg)', position:'absolute', top:'0vh', right:'0', fontWeight:'normal', color:'#000'}}><i>biloxi</i></h3>

<h3 style={{fontSize:'18vw', opacity:'.2', transform: 'skewY(-20deg)', transform:'rotate(27deg)', position:'absolute', top:'60vh', left:'3vw', fontWeight:'bold'}}>D'Iberville</h3>

<h3 style={{fontSize:'12vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(-21deg)', position:'absolute', bottom:'18vh', right:'0vw', fontWeight:'normal'}}>pascagoula</h3>

<h3 style={{fontSize:'42vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(7deg)', position:'absolute', top:'70vh', right:'10vw', fontWeight:'normal', color:'transparent', border:'0px solid white', textShadow:'0 0 0px #fff', filter:'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5))'}}>gulf</h3>


</div>





{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}> */}

{/* <div style={{ width:'80%', background: 'rgba(196, 189, 179, .5)',
  backdropFilter: 'blur(44px)', margin:'0 auto', borderRadius:'12px', zIndex:'2'}}> */}

<div className="logolink" style={{textAlign:'center', position:'relative',fontSize:'clamp(2rem, 12.5vw, 10rem)', background:'tranparent', filter: 'drop-shadow(0px 0px 0px #444)'}}><span className="logofirst mainlogo" style={{color:'#0064bb', filter: 'drop-shadow(0px 0px 0px #444)'}}><span style={{color:'', fontSize:'clamp(2.2rem, 16.5vw, 15rem)'}}>c</span>oast</span><span className="mainlogo" style={{color:'#0064bb'}}><span style={{color:'', fontSize:'clamp(2.2rem, 16.5vw, 15rem)', marginRight:'-8px', marginLeft:'-8px'}}>w</span><span className="mainlogo" style={{color:''}}>eb</span></span><span style={{fontSize:'clamp(1.6rem, 10.5vw, 8rem)',}}>.site</span></div>
{/* </ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1000}> */}
<h1 className="logofirst" style={{textAlign:'center', marginTop:'50px', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
multimedia <span style={{color:'#0064bb'}}>websites</span>
</h1>
{/* </ScrollAnimation> */}




{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1100}> */}
<h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
Digital Product <span style={{color:'#0064bb'}}>Design</span>
</h2>
{/* </ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1200}> */}
<h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
Guerrilla <span style={{color:'#0064bb'}}>Marketing</span>
</h2>
{/* </ScrollAnimation> */}
{/* 
</div> */}

  </section>







  <div id="" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'', alignItems:'baseline', color:'#fff', textShadow:'1px 1px 0 #000', padding:'0 4%'}}>



        
<div id="" className="flexcheek" style={{ position:'', top:'', order:''}} >
 
 
{/* 
 <div className="" style={{ background: 'rgba(0,0,0,0.60)', padding:'2rem ',
          backdropFilter: 'blur(4px)', border:'1px solid #000', borderRadius:'12px', textAlign:'', alignSelf:'', }}> */}


<div className="" style={{ background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ',
          backdropFilter: 'blur(4px)', border:'10px double #fff', borderRadius:'12px', textAlign:'', alignSelf:'', }}>

<div  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', margin:'-40px auto 0 auto', width:'80%', position:'absolute', display:'grid', placeContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #0064bb)', border:'1px solid #000', fontSize:'1.7rem' }}>What We Offer</div>

{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
      {/* {SecondaryImage ? (
       <GatsbyImage
         image={SecondaryImage}
         alt={frontmatter.title + " - Featured image"}
         className="post-card"
         style={{border:'1px solid blue', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
       />
     ) : (
       ""
     )} */}
{/* </div> */}


<div
     
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
       
{/* <Link
       to={frontmatter.cta.ctaLink}
       className="button fire actionJackson"
       style={{
         cursor:'pointer',
         width:'80%',
         maxWidth:'600px',
         margin:'0 auto',
         display:'flex',
         alignSelf:'center',
         color:'#ccc'
       }}
     >
       {frontmatter.cta.ctaText}
       <span className="icon -right">
         <RiArrowRightSLine />
       </span>

       
     </Link> */}
     
     <div style={{display: '', flexDirection:'', justifyContent:'', padding:'0 0 0 0', fontSize:'.8rem', textAlign:'center'}}>
     


{/* <StaticImage src="../../static/assets/LIGHTHOUSE-100s-SCORE.png" alt="Lighthouse Scores for VidSocks" width="750" height="176" className="rounded" /> */}
     
<LHScores />


     <a target="_blank" rel="noreferrer" className="" style={{textDecoration:''}} href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https://vidsock.com%2F&amp;strategy=mobile&amp;category=performance&amp;category=accessibility&amp;category=best-practices&amp;category=seo&amp;category=pwa&amp;utm_source=lh-chrome-ext">View Our Google Speed Report
     <br />(slow to load)</a>
     
     </div>


</div>
 

 </div> 






      <div id="" className="flexcheek" style={{order:''}}>
 
 

      <div className="" style={{ background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ',
          backdropFilter: 'blur(4px)', border:'10px double #fff', borderRadius:'12px', textAlign:'', alignSelf:'', }}>


   

{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
           {/* {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'1px solid blue', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )} */}
{/* </div> */}



  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 0 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #0064bb)', border:'1px solid #000' }}>Launch Your Web App</span>

<br />

Ready To Use = Easy to Learn<br />
Serverless = NO WordPress<br />
{/* Cloud Hosting = Free Forever<br /> */}
Web Apps = NO Apple or Google
<br />
<span  className="neonText2">Single Price = NO Fees<br />
</span>
<br />
<span style={{color:'', fontSize:'90%'}}>Fast | Flexible | Secure | Featured</span>
<br /><br />

{/* <div id="container">
  <div id="flip">
    <div><div>Fastest Websites</div></div>
    <div><div>Server-Less - Save More!</div></div>
    <div><div>Built for SEO</div></div>
  </div>
</div> */}

<span style={{color:'', fontSize:'70%'}}>Get all the details sent to your email:</span>

{/* <span style={{color:'', fontSize:'70%'}}>Complete website solutions</span> */}

{/* <br /><span style={{color:'#37f011', fontSize:'70%'}}>($50 value)</span> */}

{/* <span style={{color:'', fontSize:'70%'}}>Act Now - get 30 minutes of Customization </span><br /><span style={{color:'#37f011', fontSize:'70%'}}>($50 value)</span> */}
{/* <br />
<span style={{fontSize:'56%'}}>E-commerce and Custom Packages available</span>
<br /><br /> */}
</h2>
{/* <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            state={{modal: true}}
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ff0000'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link> */}
          <Newsignup />
          
          <br /><br /> 
          {/* <div style={{fontSize:'70%', textAlign:'center'}}>* Virtually all sites operate month-to-month with no fees. 
          <br />
          Some sites, under heavy usage can incur fees, as outlined by our hosting partner Netlify.<br /> <a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >You can view more information here.</a></div> */}





</div>
      







      </div> 
</div>




 <div className="spacer66 mobile"></div> 
<section  style={{display:'none'}}>

 <div className="parent" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height:'100%', gap:'20px', marginTop:'20px'}}> 

<div className="div1" style={{width:'65%', display:'flex', flexDirection:'column', justifyContent:'center', background:'', borderRight:'0px solid #dfcfc9' }}>

<div className="div3" style={{background:'',}}>
  
  <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
fontSize:'clamp(1.6rem, 12vw, 3.8rem)',
// opacity:'.9',
// paddingLeft:'',
}}>
  
{/* <span style={{color:'#dd4000'}}>Roles are like hats</span> */}
</h2>



<h3 className="logotype"  style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', }}>About</h3>
</div>



<div className="div4" style={{ background: 'rgba(196, 189, 179, .6)', maxHeight:'', justifyContent:'center', display:'flex', flexDirection:'column',}}>
<div style={{padding:'0 8% 0 6.5%', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}>
<p>
Todd Lambert is an award-winning web designer and photographer that trained in Southern California and has traveled and lived in over 16 Western states.
</p>


<p>Todd's skills include all facets of online and multimedia creation including HTML emails, online ads, user interface design, information architecture, web navigation, branding, web graphics, cross-platform and cross-browser web applications, web template creation &amp; CMS implementations.</p>

<p>
When Todd is not online, he is often found pushing the boundaries of night photography. You can usually find him in the middle of the night shooting astrophotography which is his favorite subject.
</p>

<p>
Todd is single and has a dog-child and playful Boxer named “Zoe”, that takes up most of his free time.
</p>

</div>

</div>



</div>

<div className="div2" style={{width:'35%', display:'flex', flexDirection:'column', justifyContent:'space-between', background:'', }}>

<div className="div5" style={{background:'',}}>
  <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
// fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 12vw, 3.8rem)',
// opacity:'.9',
// paddingLeft:'',
}}>

{/* <span style={{color:'#dd4000'}}>Roles are like hats</span> */}
</h2>
</div>

<div className="imgbox grad circle" style={{border:'2px solid #dd4000', position:'relative', padding:'2rem', overflow:'hidden', filter: 'drop-shadow(0px 0px 3px #444)'}}><StaticImage alt="Todd Lambert" src="../../static/assets/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>

<Link state={{modal: true}}
            to="/about-todd/"
            className="post-card button noexit print"
            style={{
              cursor:'pointer',
              width:'',
              maxWidth:'300px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            View More About Todd
          </Link>

<div className="div6" style={{margin:'1rem 0 0 0',}}>  

{/* <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.3rem, 7vw, 2.8rem)',
opacity:'.9',
paddingLeft:'',
}}>
    
<span style={{color:''}}>My experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.</span>
</h2> */}

</div>
</div>

</div>





 
 {/* <div style={{position:'relative', zIndex:'-1', bottom:'0', maxHeight:'33vh', overflow:'hidden', border:'0px solid red'}}><LineTest /></div> */}
{/* <div className="spacer33"></div> */}




<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={300}>
<blockquote style={{fontFamily:'Lobster Two', textAlign:'left', padding:'', borderRadius:'12px', background: 'rgba(196, 189, 179, .7)', fontSize:'clamp(1.5rem, 2.6vw, 2.8rem)', filter:'drop-shadow(-12px 12px 12px rgba(44, 44, 44, 0.5))'}}>
  <div style={{padding:'2rem 10% 0 10%', filter:'none', textShadow:'1px 1px 0 #aaa'}}>
  Experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.

    {/* I imagine things and then make them come to life. Creating digital experiences using intriguing photography, animation and typography, all packaged in the most performant coding that loads fast everywhere. */}
  </div>
 <div className="logofirst" style={{fontSize:'', textAlign:'right', margin:'2rem 30% 0 0', filter:'none'}}>- Todd Lambert</div>
</blockquote>
</ScrollAnimation>


</section>






<StaticImage src="../../static/assets/biloxi-oceansprings.jpg" alt="Todd Lambert Night photos" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  />


<section className="outer section section--gradient fluff txtshadow" style={{padding:'0 8%'}} >
      <div className="container" style={{padding: '0 10%', color:'#fff'}}>

{/* <h2>Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!</h2>

<br />
<p>VidSocks use the industry best cloud-based tools for things like user commenting, analytics, and e-commerce.</p> */}









<div id="costs" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0', width:'100%', color:'#fff'}}>
              
              

              <p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}><u>LOW</u> Monthly Costs</p>
              
              <div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)',filter:'drop-shadow(0px 0px 10px #0064bb)', textShadow:'2px 2px 10px #222',  border:'1px solid #000'}}>
              
                <span style={{fontSize:'3rem', color:'white', transform:'rotate()', lineHeight:'100%'}}>Web Apps </span>
              
                <span style={{width:'70%', fontSize:'40px', color:'var(--primary-color)', lineHeight:'100%'}}>
                WITH NO<br /> HIDDEN COSTS
                </span>
              </div>

              <p style={{fontSize:'150%', textAlign:'center', margin:'0 0 0 0'}}>uses metered Cloud Based Services</p>

              </div>


{/* <h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>VidSocks Run Free Of Cost</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>VidSocks users have <u>NO</u> monthly costs.

</p>  */}



<div className="flexbutt hover" style={{display:'flex', padding:'0', gap:'20px', color:'#fff'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Cloud Hosting</h3>

<div style={{}}>Virtually all sites operate month-to-month for <strong className="highlight">FREE or low cost</strong>. 
  <br />
Pay only when your site uses a LOT of data.<br /> 
 <br />
 <div style={{textDecoration:'underline', textAlign:'center'}}><a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >View  <strong className="highlight"></strong> Hosting Plan</a></div>
 </div>

</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Analytics</h3>
<p>Complete integration with Google Analytics. Simply paste your account tracking code into the CMS settings. 
  <br />
  <br />Track your website performance for <strong className="highlight">FREE</strong>!</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>E-Commerce</h3>
<p>Complete Shopify API integration with Shopify shopping cart built-in.
Get FULL Shopify functionality directly inside your site.
<br />
   <br />Shopify API costs <strong className="highlight">$8.99mo</strong>.</p>
</div>
</div>











<div className="flexbutt hover" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px', color:'#fff'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? Social sharing is built-in, along with other great features. <br /><br />All INCLUDED for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads.
  
  <br /><br />AdFree YouTube <strong className="highlight">FREE!</strong></p>
</div>

{/* <div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">NFT Features</h3>
<p>Setup countdown timers for your own NFT Drops!  <br /> Embed your Foundation or OpenSea into your posts. Just copy and paste the share code.</p>
</div> */}
<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #333', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Comments</h3>
<p>We use CommentBox.io and with their generous 100 comments a month.
  
  <br /><br /><strong className="highlight" style={{color:''}}>FREE!</strong> Comments without ads</p>
</div>


</div>



      </div>
</section>




<StaticImage src="../../static/assets/biloxibay.jpg" alt="Todd Lambert Night photos" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  />






<section id="features" className="" style={{padding:'8% 2%'}}>
<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'30px', color:'#fff'}}>



  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        
      <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', border:'1px solid #000' }}>Coast Web includes:</span></h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosted on Global Edge Network (the cloud)</li>
        <li>Automated backups with intant rollbacks to any version.</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - 100 Site Form Submits per Mo</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name</li>
<li>Responsive Design, built with React and Gatsby</li>
<li>Dark / Light Mode (also full support for all web accessibility guidelines)</li>


</ul>
      </div>
    </div>
  </div>





  <div className="flexcheek hover">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>
        {/* <h2 className="vartext txtshadow">VidSocks Features:</h2> */}
        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', border:'1px solid #000' }}>Coast Web sites:</span></h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>






<li>Customize all content of included Homepage, About and Contact page. Add / Modify / Delete blog posts.</li>

<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>


<li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li>

<li>Control YouTube videos with starting/stopping times, loop, mute, etc..</li>

<li>PWA Exclusive Content (make some of your content only available to your site's user base - great to boost engagement!)</li>

<li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li>

<li>Your Stuff is SAFE - All stored in native image formats and markdown files that are downloadable at any time</li>
{/* <li>Auction Timers - Make posts disappear when your auction expires</li> */}

</ul>
      </div>
    </div>
  </div>

  



  <div className="flexcheek">
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px'}}>
        

        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', border:'1px solid #000' }}>More Features:</span></h2>


        <ul className="featurelist" style={{listStyleType:'none'}}>
        

<li>100% SEO Optimized - Google LOVES Coast Web sites. </li>

<li>Full Privacy Compliance Support (GDPR and CCPA). </li>

<li>Contact Form - an integrated contact form on all pages of the your site, that sends everything right to your email inbox.</li>

<li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li>

<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - all of site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>






</ul>
      </div>
    </div>
  </div>
  
</div>
</section>








<StaticImage src="../../static/assets/I110-loop.jpg" alt="Todd Lambert Night photos" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  />




<section id="faqs" name="faqs" style={{padding:'0 10%'}}>
<NFTDetails />
</section>











<section id="posts1" name="posts" style={{display:'none'}}>



<div style={{padding:'0 0 0 0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
//  outline:'18px dashed rgba(121, 115, 115, 0.3)', 
 borderRadius:'', 
 border:'0px solid rgba(121, 115, 115, 0.3)', 
//  background:'rgba(0, 0, 0, 0.3)',
//  background:'rgba(121, 115, 115, 0.2)',
//  background: 'rgba(196, 189, 179, .9)',
//  background:'rgba(121, 115, 115, 0.5)',
zIndex:'0'
//  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)',
 }}>


 <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Network</h3>
<br />


{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Portfolio />
</ScrollAnimation> */}


<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'60vh', overflow:'hidden', position:'relative',}}>

<div className="RArrow"><span></span></div>



<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'calc(60vw + 1px)', transform: 'rotate(-90deg) translateY(-60vw)', padding:'30px'}}>


{/* <div style={{width:'1000px', height:'1000px'}}></div> */}
<div className="introspacer" style={{}}></div>



<div className="" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    
    </div>




    <div className="" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/tronin60.jpg" alt="TRON movie in only 60 seconds"  /></a>
    <br />
Explore the world of TRON - all in only 60 seconds. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Tron.Allin60.com</a></div>
    
    </div>





    <div className="" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  /></a>
    <br />
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that costs nothing to run and get top ranks in Google!
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    
    </div>





    <div className="" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    
    </div>


{/* {data.projectFiles.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })} */}


    </div>


    {/* <Link className="post-card11" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'50px', background:'rgba(0, 0, 0, .9)', height:'95%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'8px 0'}}>
  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-120px auto 0 auto'}}>View Legacy Work Here</div>
</Link> */}


</div>
{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Photos />
</ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Animation />
</ScrollAnimation> */}
  </div>


</section>




{/* <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Portfolio</h3>
<br />

<CasePanels />
<div className="spacer33"></div> */}








<section id="posts1" name="posts" style={{display:'none'}}>



<div style={{padding:'0 0 0 0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
//  outline:'18px dashed rgba(121, 115, 115, 0.3)', 
 borderRadius:'', 
 border:'0px solid rgba(121, 115, 115, 0.3)', 
//  background:'rgba(0, 0, 0, 0.3)',
//  background:'rgba(121, 115, 115, 0.2)',
//  background: 'rgba(196, 189, 179, .9)',
//  background:'rgba(121, 115, 115, 0.5)',
zIndex:'0'
//  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)',
 }}>


 <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Portfolio</h3>
<br />


{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Portfolio />
</ScrollAnimation> */}


<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'60vh', overflow:'hidden', position:'relative',}}>

<div className="RArrow"><span></span></div>

{/* <SimpleReactLightbox>
<SRLWrapper options={options}> */}

<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'calc(60vw + 1px)', transform: 'rotate(-90deg) translateY(-60vw)', padding:'30px'}}>


{/* <div style={{width:'1000px', height:'1000px'}}></div> */}
<div className="introspacer" style={{}}></div>


{data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })}


    </div>
    {/* </SRLWrapper>
    </SimpleReactLightbox> */}

    <Link className="post-card11" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'50px', background:'rgba(0, 0, 0, .9)', height:'95%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'8px 0'}}>
  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-120px auto 0 auto'}}>View Legacy Work Here</div>
</Link>


</div>
{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Photos />
</ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Animation />
</ScrollAnimation> */}
  </div>


</section>


























{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0} duration={2}> */}




<section id="resume" style={{display:'none', margin:'0', background: 'rgba(196, 189, 179, .9)', filter:'drop-shadow(12px 12px 12px rgba(44, 44, 44, 0.6))'}}>

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}> */}

<div style={{padding:'0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
 outline:'18px dashed rgba(121, 115, 115, 0.3)',
 borderRadius:'', border:'0px solid rgba(121, 115, 115, 0.3)', 
// background:'rgba(121, 115, 115, 0.2)'
}}>


<div className="outer1 section1" style={{padding:'0 2%', height:'', background:'transparent'}}>

<div className="container3" style={{ position:'relative'}}>

<h3 className="logotype print" style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', paddingTop:'1rem'}}>
Resume
</h3>
<h3 className="logotype printonly" style={{textAlign:'center', margin:' 0', fontSize:'350%',}}>
Lambert
</h3>

<div className="printonly" style={{textAlign:'center', position:'absolute', bottom:'-30px', width:'100%'}}>
(228) 239-6088<br /> toddlambert@gmail.com
</div>
</div>


<div className="resume flexbutt" style={{width:'100%', padding:'0 4%', background:'transparent', gap:'30px'}}>



<div className="primary1 flexcheek" style={{color:'', }}>

{/* <h3 className="logotype printonly" style={{textAlign:'left', fontSize:'250%', height:'50px',}}>
Lambert
</h3> */}



	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with 21 years of professional experience.</strong></p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Industry experience including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and direct marketing.</p>


<h2 className="todd-headline" style={{marginBottom:''}}>Proficiency</h2>


<p>Veteran WordPress Theme/Plugin Developer <br />React JS Frontend Designer/Developer</p>

<p>Responsive, Reactive, Adaptive Design, progressive enhancement, PWA development, object oriented CSS animation.</p> 

<p>Analytics, SEO, UI design, Information Architecture &amp; Content Management System integrations. Photo and Video production. </p>

<p><strong>I prefer: JAM stack, React, Gatsby, Canon, Subaru and my Mac.</strong></p>

<h2 className="todd-headline">Education</h2>

<ul className="edu">
<li><strong>Cal State University Fullerton</strong><br />
Web Design and Development - Degree</li>

<li><strong>Coastline Community College</strong><br />
Quality Assurance - Degree</li>

<li><strong>Golden West College</strong><br />
Business Management - Degree</li>

<li><strong>Huntington Beach High School</strong><br />
High School General Courses - Diploma</li>
</ul>


	
</div>


<div className="secondary1 flexcheek" style={{color:'', margin:'',}}>
{/* <h3 className="printonly" style={{textAlign:'right', height:'50px', fontSize:'150%',}}>(228) 239-6088
</h3>  
	 */}
<h2 className="todd-headline">Professional Experience</h2>

<p style={{margin: '0 0 .5rem 0 ',
padding: '0'}}><strong>Todd Lambert Enterprises, 1999 - Present</strong><br />
<em>Sole Proprietor / Photographer</em></p>

<p>Conducted all facets of web development business including meeting with clients, selling web services, and developing methods for improved customer support. <br /> I also like to travel all over the country and photograph spooky and abandoned places at night. <br /><a className="noexit" style={{color:'', textAlign:'center'}} href="https://twilightscapes.com">View @ TwilightScapes.com</a></p>

<p><strong>Primal Health, 2013 - 2014</strong><br /> 
<em>Creative Director / Associate Developer</em>
</p>
<p>
Responsible for all graphic components and direct marketing efforts. Worked with various departments to advance reach through social marketing, engineering and analytics. Also performed SEO and conducted extensive AB testing.</p>

<p><strong>Texas Instruments, 2010 - 2013</strong><br /> 
<em>Style Architect / Front End Developer / Senior UI Designer</em>
</p>
<p>
Worked on all aspects of TIs website, from new ad campaigns and interactive widgets to the core infrastructure including a new re-design and replacement of site navigation site-wide. Championed responsive design techniques and other modern architecture for use on corporate site. Utilized Jquery animation for replacing all of TIs legacy Flash files.</p>

<p><strong>AGJ Systems &amp; Networks, 2008 - 2010 </strong><br />
<em>Web Director / Lead Developer / Senior Designer</em>
</p>
<p>
Solely responsible for all design and development aspects of web department. Interacted with customers and other departments to integrate designs into modern websites catered to customer needs.</p>

<p><strong>TeleVox Software, 2004 - 2007</strong><br />
<em>Director of Web Development</em>
</p>
<p>
Responsible for site architecture, design, graphics, programming, copywriting/editing, project management of all TeleVox websites and online marketing campaigns. Supervised 25 designers and developers.</p>


</div>

 </div>

 <a
            href="https://toddlambert.com/assets/resume-toddlambert.pdf"
            className="post-card button noexit print"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'300px',
              margin:'5vh auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            Download Resume
            <span className="icon -right">
              <VscFilePdf style={{fontSize:'30px'}} />
            </span>

            
          </a>


<br />
</div>

</div>
{/* </ScrollAnimation> */}
</section>








{/* <div className="spacer33"></div>  */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}> */}

<section id="contact" className="child" style={{position:'relative', height:'auto', zIndex:'', padding:'2rem 0', background: 'rgba(196, 189, 179, .5)'}}>




  <div className="outer" style={{margin:'0', outline:'0px solid rgba(121, 115, 115, 0.3)', outlineOffset:'12px', borderRadius:'12px', padding:'0 4%'}}>

    <h3 className="logotype" style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', paddingTop:'1rem'}}>
Contact
</h3>
<p style={{fontSize:'clamp(1.5rem, 2.5vw, 3.8rem)', textAlign:'center'}}>
Looking for innovative design in a top-performing website app?</p>
<p style={{fontSize:'clamp(1.2rem, 2.5vw, 3.8rem)', fontWeight:'bold', textAlign:'center', textShadow:'1px 1px 0 #666'}}>
  Let's create something <span>great together</span>.</p>

<p style={{fontSize:'1.2rem', textAlign:'center', fontWeight:'bold'}}>
Availability: &nbsp; {date}
</p>

<Contact />

</div> 


 </section>
 {/* </ScrollAnimation> */}

 {/* <div className="spacer66"></div>  */}





























 

      
      


<Footer />

    </Layout>
    </CustomBox>
  )
}

export default HomePage