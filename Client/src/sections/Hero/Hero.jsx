import "./Hero.css";
import { Button, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {

  const titleRef = useRef(null);
  const subRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {

    gsap.from(titleRef.current,{
      y:120,
      opacity:0,
      duration:1.2,
      ease:"power4.out"
    });

    gsap.from(subRef.current,{
      y:50,
      opacity:0,
      delay:.5,
      duration:1
    });

    gsap.from(statsRef.current.children,{
      opacity:0,
      y:40,
      stagger:.2,
      delay:1
    });

  },[]);

  return (

<section className="hero">

<div className="blob blob1"></div>

<div className="blob blob2"></div>

<div className="blob blob3"></div>

<div className="grid-bg"></div>

<div className="container hero-content">

<h1 ref={titleRef} className="hero-title">

CREATE

<br/>

CONNECT

<br/>

DOMINATE

</h1>

<p ref={subRef} className="hero-subtitle">

Become one of the world's biggest creators.

Network with brands.

Meet your audience.

Grow your influence.

</p>

<Space size={25} className="hero-buttons">

<Button
type="primary"
className="apply-btn"
size="large"
>

Apply Now

</Button>

<Button
className="learn-btn"
size="large"
>

Learn More

<ArrowRightOutlined/>

</Button>

</Space>

<div className="hero-stats" ref={statsRef}>

<div>

<h2>50K+</h2>

<p>Visitors</p>

</div>

<div>

<h2>200+</h2>

<p>Creators</p>

</div>

<div>

<h2>AUG 14-16</h2>

<p>2026</p>

</div>

</div>

<div className="scroll-indicator">

<span></span>

</div>

</div>

</section>

  );
}

export default Hero;