import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import image1 from "../images/u142.png";
import image2 from "../images/u141.png";
import image3 from "../images/u5.svg";
import image4 from "../images/u4.svg";
import mylogo from "../images/u3.svg";
import image5 from "../images/u11.jpg";
import image6 from "../images/u140.png";
import image8 from "../images/u123.png";
import image9 from "../images/u122.png";
import image10 from "../images/u124.png";
import image11 from "../images/u125.png";
import image12 from "../images/u55.png";
import image13 from "../images/u66.png";
import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks, } from "../components/headers/light.js";
import  { useState } from "react";
import { Link } from 'react-router-dom';




//新增：导航
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, RGB(31, 10, 123), RGB(96, 47, 217));
  /* 渐变从左到右，颜色依次为紫色和深粉色 */
  padding: 0.75rem;
  position: relative;
  /* 让 ::before 相对于 NavbarWrapper 定位 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -4.5rem; /* 根据需要调整半圆的位置 */
    width: 5rem; /* 半圆的宽度 */
    height: 100%; /* 半圆的高度 */
    background: RGB(31, 10, 123); 
    border-radius: 350% 50% 0 0;
  }
`;

//新增
const CustomNavLink = tw.a`
text-lg my-1 lg:text-sm lg:mx-10 lg:my-0
 tracking-wide transition duration-300
 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
 text-white
`;



const StyledHeader = styled(Header)`
  ${tw` max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
//修改：修改了登录按钮的样式
const PrimaryLink = tw(NavLink)`
lg:mx-0
px-6 py-2 rounded bg-purple-400 text-purple-500 
hocus:bg-purple-600 hocus:text-gray-200 focus:shadow-outline
border-b-0 rounded-lg text-sm font-normal
`;

const PrimaryLink1 = tw(NavLink)`
lg:mx-0
px-6 py-2 rounded bg-primary-500 text-white
hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
border-b-0 rounded-lg text-sm font-normal
mt-2
`;
const PrimaryLink2 = tw(NavLink)`
lg:mx-0
px-8 py-6 rounded bg-orange-500 text-white 
hocus:bg-orange-700 hocus:text-gray-200 focus:shadow-outline
border-b-0 rounded-2xl text-2xl font-normal

`;

//修改：删除了背景图片
const Container = styled.div`
  ${tw`relative bg-center bg-cover h-screen min-h-screen`}
  padding: 1rem;
`;
//修改：删除了灰色遮罩层
const OpacityOverlay = tw.div`z-10   bg-gray-200 absolute inset-0  `;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;



//修改了按钮样式
const PrimaryAction = tw.button`rounded-5xl w-full h-full px-2 py-1  text-xs sm:text-3xl  sm:px-8 sm:py-4 bg-gray-100  shadow transition duration-300 
bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline border-solid border-8 border-yellow-500`;//这里添加了 border-solid、border-2 和 border-yellow-500 这三个样式，分别表示边框样式为实线、边框宽度为 2px、边框颜色为黄色（即（255, 188, 0））。




//新增容器样式
const Container1 = styled.div`
  ${tw`flex flex-row h-full flex-wrap `}
  align-content: space-between;
  padding-top:1rem`;
//新增容器样式
const Col1 = styled.div`
  ${tw` h-full bg-gray-200 flex flex-col`}
width:33.7%;
`;



//新增容器样式
const Col2 = styled.div`
  ${tw`flex flex-row h-full  flex-wrap `}
  width:33.8%;

 
`;
//新增容器样式
const Row = styled.div`
  ${tw`w-full bg-gray-200 flex flex-wrap`}
  height: 60%;
   justify-content:space-between;
   padding:0.5rem 1rem;

`;
const Li = styled.div`
  ${tw`bg-white`}
  height: 47%;
  width: 17%;
  border-radius: 0.5rem; /* 添加圆角 */
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  
  align-items: center;

`;
//新增容器样式
const Row1 = styled(Row)`
  ${tw` w-full `}
  height:39%;
  margin-top: 1.5rem;
   margin-bottom: 0;
`;

//新增容器样式
const Row3 = styled(Row)`
  ${tw`flex  flex-row w-full`}
  height:40%;
 margin-top: 0;
   margin-bottom: 0;
`;
//新增容器样式
const Row4 =  styled.div`
  ${tw` w-full `}
  height: 50%; 

`;


//新增容器样式
const Image1 = styled.div`
  ${tw` bg-cover mx-auto `}
  background-image: url(${props => props.bgImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;  
  padding:0;
  height:35%;
  width:50%;
  margin-bottom:1rem;
  margin-top:1rem;
`;


//新增容器样式
const Image2 = styled.div`
  ${tw``}
  background-image: url(${image3});
  width:85%;
  height:50%;
  background-size: contain; 
  background-repeat: no-repeat;  
  background-position: center;   
 background-color: transparent; 

`;

//新增容器样式
const Image3 = styled.div`
  ${tw` `}
  background-image: url(${image4}) ;
  background-size: cover;
  width:23%;
  height:100%;
  background-size: contain; 
  background-repeat: no-repeat;  
  background-position: center; 
  
 
`;

const Link1 = styled(Link)`
${tw` h-full w-full`}
margin:0;
padding:0;
`;





export default () => {
  const navLinks = [
    <NavbarWrapper>
      <NavLinks key={1}>
        <CustomNavLink href="#" >
          职业画像
        </CustomNavLink>
        <CustomNavLink href="#">
          AI求职指导
        </CustomNavLink>
        <CustomNavLink href="/course">
          精品课程
        </CustomNavLink>
        <CustomNavLink href="#">
          多数据源
        </CustomNavLink>
        <CustomNavLink href="/blog">
          博客文章
        </CustomNavLink>
        <CustomNavLink href="/about-us">
          创始团队
        </CustomNavLink>
        <CustomNavLink href="/pricing" >
          价格
        </CustomNavLink>
      </NavLinks>
      <NavLinks key={2} tw="pl-24 pr-12">
        <PrimaryLink href="/login">
          登录
        </PrimaryLink>



      </NavLinks></NavbarWrapper>
      
  ];


  function Link(props) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { clickCount, setClickCount } = props;
  
    function handleClick(event) {
      event.preventDefault();
      setIsAuthorized(true);
      window.open(event.target.href);
      setClickCount(clickCount + 1);
    }
  return (
    <Li>
      <Image1 bgImage={props.image}></Image1><span >{props.name}</span>
      <PrimaryLink1 href={props.link} onClick={handleClick}>
        {isAuthorized ? '已授权' : '点击授权'}
      </PrimaryLink1>
    </Li>
  );
}

const [clickCount, setClickCount] = useState(0);

function handleCountChange(count) {
  setClickCount(count);
}
  return (
    <Container>
<OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} logoLink={<LogoLink href="/"><img src={mylogo} alt="logo" /></LogoLink>} />

        <Container1>
          <Row>
          <Link name="CSDN" link=" https://passport.csdn.net/login?code=public " image={image5} clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="知乎" link="https://www.zhihu.com/signin" image={image1}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="支付宝" link="https://www.alipay.com/" image={image2} clickCount={clickCount} setClickCount={handleCountChange} />
      <Link name="bilibili" link="https://passport.bilibili.com/login" image={image6}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="贴吧" link="https://passport.baidu.com/v2/?login&tpl=tb&u=https%3A%2F%2Ftieba.baidu.com%2Findex.html" image={image12}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="淘宝" link="https://login.taobao.com/member/login.jhtml" image={image8}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="京东" link="https://passport.jd.com/new/login.aspx" image={image9}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="github" link="https://github.com/login" image={image13}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="豆瓣" link="https://accounts.douban.com/passport/login?source=main" image={image10}  clickCount={clickCount} setClickCount={handleCountChange}/>
      <Link name="微博" link="https://passport.weibo.com/visitor/visitor?entry=miniblog&a=enter&url=https%3A%2F%2Fweibo.com%2F&domain=.weibo.com&ua=php-sso_sdk_client-0.6.36&_rand=1613961514.6169" image={image11}  clickCount={clickCount} setClickCount={handleCountChange} />

          </Row>
          <Row1>
          <Col1>
          <Image2></Image2>
          <Image2></Image2>
          </Col1>
          <Col2>
          <Row3>
          <Image3></Image3>
          <PrimaryLink2>已授权：{clickCount}/10</PrimaryLink2>
          </Row3> 
          <Row4>
          <Link1 to="https://jobflowai.onrender.com/">
             <PrimaryAction >上传pdf简历</PrimaryAction>
             </Link1>

              </Row4> 
          
          </Col2>
          </Row1>
        </Container1>
      </HeroContainer>
    </Container>
    
  );
}; 
