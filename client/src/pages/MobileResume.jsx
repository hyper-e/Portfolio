import React, { Component, createRef } from "react";
import { Document, Page } from "react-pdf";
import renderPDF from "../components/pdf/Resume2.0.pdf";
import Footer from "../components/Footer";

const hey = () => {
  if (window.scrollY !== 0) {
    return true;
  } else {
    return false;
  } 
};

class MobileResume extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      sticky: false
    }
  }
componentDidMount(){
  window.addEventListener("scroll", () => {
    this.setState({sticky: hey()})
  })
}
//  componentDidUpdate() {
//   this.nav();
//  }
//  nav = () => {
//   window.addEventListener("scroll", () => {
//     console.log(hey())
    
//    this.setState({sticky: hey()})
//   })
//   console.log(this.state.sticky)
//  }

//   componentDidMount() {
//     this.a();
//     this.setState({size: window.scrollY})
//   }

//  a = () => {
//   window.addEventListener("scroll", () => {
//     const top = document.getElementById("mobResMain");
//     const x = top.screenTop
//     console.log(x)
//     this.setState({screenTop: x})
//     console.log(this.state.scrollTop);
//   })
//  }

  // const scrollTop = this.myRef.current.scrollTop;
  // this.setState({scrollTop: scrollTop})
  // console.log(this.state.scrollTop)

  // const x = document.getElementsByTagName("body");
  //  x.setAttribute("style", "{{overflow-y: 'hidden'}}")

  
//  onScroll = () => {
//  // const scrollTop = this.myRef.current.scrollTop;
//  // console.log(scrollTop);
//  const x = document.getElementsByTagName("body")[0];
//  const att = document.createAttribute("ref");
//  att.value = this.myRef.current.scrollTop;
//  x.setAttribute(att);
//  // this.setState({scrollTop: x})
//   console.log(this.state.z)
//  };
//  this.myFunction()
//     // window.addEventListener("scroll", () => {
//     //  if()
//     //   // this.setState({
//     //   //   sticky: true
//     //   // })
//     // })

//   }
// a = () => {
//   let a = document.getElementById("mobResMain");
//  // let b = a.scrollTop;
//  // console.log(b)
// }

//  change = () => {

//   // this.setState({scrollTop: window.scrollY})
//   window.addEventListener("scroll", window.scrollY)

// }


  // window.addEventListener('scroll', change)
  // console.log(this.state.scrollTop)
  render() {

    return (
      
      <div id="mobResMain">
        <nav className={this.state.sticky ? "mobileRes active" : "mobileRes"} 
        // style={this.state.sticky ? {backgroundColor: "#222831", position: "sticky", top: 0} : {backgroundColor: "red"}}
        ><a className="mobResBack" href="/">Back to Home</a></nav>
        <div className="mobResBody">
            <Document
          file={renderPDF}
          className="pdF"
          loading="Loading PDF..."
          noData="No PDF found!"
          renderMode="canvas"
        >
          <Page pageNumber={1} height={1000} />
        </Document>
        </div>
        <Footer styleButton="none" />
      </div>
    );
  }
}

export default MobileResume;
