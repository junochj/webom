//커버 제이쿼리
$(function(){

$(window).resize(function () {

	var width = $(window).width();
    if (width >= 1200) {

    $(".cover p button").click(function(){
         $(".cover").animate({marginLeft:"-100%"});
     });
//햄버거 제이쿼리
    $(".header_inner>p:eq(0) button").click(function(){
          $(".gnb_slider").stop().animate({marginLeft:290});
          $(".container").stop().animate({marginLeft:610});

      });
    $(".close p button").click(function(){
          $(".gnb_slider").stop().animate({marginLeft:0});
          $(".container").stop().animate({marginLeft:290});

      });
//스크롤 탑 제이쿼리
    $(".gnb_slider nav ul li:eq(0) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 0});
     });
    $(".gnb_slider nav ul li:eq(1) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 960});
     });
    $(".gnb_slider nav ul li:eq(2) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 2930});
     });
    $(".gnb_slider nav ul li:eq(3) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 5200});
     });
//버튼 누르면 해당 내용이 나오는 부분들
   $(".thumb li:eq(0) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>80%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>포토샵을 활용하여 이미지의 보정이 가능하며, 다양한<br>사이트의 시안작업을 할수 있습니다.</p>");
   });
   $(".thumb li:eq(1) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>75%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>일러스트레이터를 활용하여 다양하고<br> 시각화된 GUI를 제작할수 있습니다.</p>");
   });
   $(".thumb li:eq(2) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>85%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>일러스트레이터를 활용하여 다양하고<br> 시각화된 GUI를 제작할수 있습니다.</p>");
   });
   $(".thumb li:eq(3) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>80%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>하드 코딩이 가능하며 웹접근성을 준수한 HTML5 문서와 연동하여 스타일 제작,<br>미디어쿼리를 활용한 반응형웹 제작이 가능합니다.</p>");
   });
   $(".thumb li:eq(4) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>75%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>하드 코딩이 가능하며 웹접근성을 준수한 HTML5 문서와 연동하여 스타일 제작,<br> 미디어쿼리를 활용한 반응형웹 제작이 가능합니다.</p>");
   });
   $(".thumb li:eq(5) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>65%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>직접 만들어 놓은 소스들을 통하여 사이트에 필요한 움직임을<br> 연출할 수 있습니다.</p>");
   });
//버튼 누르면 해당 내용이 나오는 부분들2
   $(".thumb2 li:eq(0) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>smat 자격증으로 국가공인 자격증 입니다.<br>실무자 서비스 능력을 갖추고 있는 상태 입니다.</p>");
   });
   $(".thumb2 li:eq(1) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>문화체육관광부장관이 지정한 자격증 입니다.<br>국외여행객 인솔이 가능합니다.</p>");
   });
   $(".thumb2 li:eq(2) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>B급</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>O.A능력 자격증으로 취득 기관은 한국생산성 본부입니다.<br> 표작업, 함수등 엑셀의 기능을 다를 줄 압니다.</p>");
   });
   $(".thumb2 li:eq(3) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>항공예약발권 자격증으로 취득 기관은 월드스팬 코리아 입니다.<br>여행객의 예약 업무를 다룰수 있습니다.</p>");
   });
   $(".thumb2 li:eq(4) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실버</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>항공예약발권 자격증으로 취득 기관은 월드스팬 코리아 입니다.<br>여행객의 예약 업무를 다룰수 있습니다.</p>");
   });
   $(".thumb2 li:eq(5) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>수료증</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>바리스타 교육을 수료 하였습니다.<br>에스프레소와 카푸치노를 만들 줄 알며 고객대응 서비스를 할 수 있습니다.</p>");
   });
//버튼 누르면 해당 내용이 나오는 부분들3 웹 사이트 부분
   $(".website_thumb li:eq(0) button").click(function(){
        $(".website_txt li div h3").replaceWith("<h3>안그라픽스</h3>");
        $(".website_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>안그라픽스 웹사이트 리뉴얼</p>");
        $(".website_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100% 코딩 100%</p>");
        $(".website_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".website_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".website_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>Html / Css / jQurey</p>");
        $(".website_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".website_txt li>p:eq(0)").replaceWith("<p><a href='https://junochj.github.io/agraphics/index.html' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   $(".website_thumb li:eq(1) button").click(function(){
        $(".website_txt li div h3").replaceWith("<h3>한솔</h3>");
        $(".website_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>한솔 웹사이트 리뉴얼 제작</p>");
        $(".website_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100% 코딩 100%</p>");
        $(".website_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span><img src='images/hansolcolor.png'></span></p>");
        $(".website_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".website_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>Html / Css / jQurey</p>");
        $(".website_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".website_txt li>p:eq(0)").replaceWith("<p><a href='https://junochj.github.io/hansol_/index.html' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
  
//버튼 누르면 해당 내용이 나오는 부분들3 모바일 사이트 부분
   $(".mobile_thumb li:eq(0) button").click(function(){
        $(".mobilesite_txt li div h3").replaceWith("<h3>withDog</h3>");
        $(".mobilesite_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>파이널 프로젝트 사이트 제작</p>");
        $(".mobilesite_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>후기게시판, index페이지</p>");
        $(".mobilesite_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".mobilesite_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Bootstrap</p>");
        $(".mobilesite_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>JAVA / JavaScript / Css</p>");
        $(".mobilesite_txt li>p:eq(0)").replaceWith("<p><a href='https://www.youtube.com/watch?v=Favi_Ggm4AA&t=3' target='_blank'>시연영상 보러가기</a></p>");
   });
   $(".mobile_thumb li:eq(1) button").click(function(){
        $(".mobilesite_txt li div h3").replaceWith("<h3>withDog</h3>");
        $(".mobilesite_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>withDog 소스코드</p>");
        $(".mobilesite_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>후기게시판</p>");
        $(".mobilesite_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".mobilesite_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Bootstrap</p>");
        $(".mobilesite_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>JAVA / JavaScript / Css</p>");
        $(".mobilesite_txt li>p:eq(0)").replaceWith("<p><a href='http://junochj.github.io/webom/sub_1.html' target='_blank'>소스코드 보러가기</a></p>");
   });
   
   }else if (width < 1200) {

	$(".cover p button").click(function(){
         $(".cover").animate({marginLeft:"-100%"});
     });
//햄버거 제이쿼리
    $(".header_inner>p:eq(0) button").click(function(){
          $(".gnb_slider").stop().animate({marginLeft:"0%"},700);
          $(".container").stop().animate({marginLeft:0});

      });
    $(".close p button").click(function(){
          $(".gnb_slider").stop().animate({marginLeft:"-100%"},700);
          $(".container").stop().animate({marginLeft:0});

      });
//스크롤 탑 제이쿼리
    $(".gnb_slider nav ul li:eq(0) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 0});
     });
    $(".gnb_slider nav ul li:eq(1) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 960});
     });
    $(".gnb_slider nav ul li:eq(2) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 2930});
     });
    $(".gnb_slider nav ul li:eq(3) h2 button").click(function(){
         $("html,body").stop().animate({scrollTop: 5200});
     });
//버튼 누르면 해당 내용이 나오는 부분들
   $(".thumb li:eq(0) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>80%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>포토샵을 활용하여 이미지의 보정이 가능하며, 다양한<br>사이트의 시안작업을 할수 있습니다.</p>");
   });
   $(".thumb li:eq(1) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>75%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>일러스트레이터를 활용하여 다양하고<br> 시각화된 GUI를 제작할수 있습니다.</p>");
   });
   $(".thumb li:eq(2) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>85%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>일러스트레이터를 활용하여 다양하고<br> 시각화된 GUI를 제작할수 있습니다.</p>");
   });
   $(".thumb li:eq(3) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>80%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>하드 코딩이 가능하며 웹접근성을 준수한 HTML5 문서와 연동하여 스타일 제작,<br>미디어쿼리를 활용한 반응형웹 제작이 가능합니다.</p>");
   });
   $(".thumb li:eq(4) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>75%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>하드 코딩이 가능하며 웹접근성을 준수한 HTML5 문서와 연동하여 스타일 제작,<br> 미디어쿼리를 활용한 반응형웹 제작이 가능합니다.</p>");
   });
   $(".thumb li:eq(5) button").click(function(){
        $(".skill_txt li p:eq(1)").replaceWith("<p>65%</p>");
        $(".skill_txt li p:eq(2)").replaceWith("<p>직접 만들어 놓은 소스들을 통하여 사이트에 필요한 움직임을<br> 연출할 수 있습니다.</p>");
   });
//버튼 누르면 해당 내용이 나오는 부분들2
   $(".thumb2 li:eq(0) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>smat 자격증으로 국가공인 자격증 입니다.<br>실무자 서비스 능력을 갖추고 있는 상태 입니다.</p>");
   });
   $(".thumb2 li:eq(1) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>문화체육관광부장관이 지정한 자격증 입니다.<br>국외여행객 인솔이 가능합니다.</p>");
   });
   $(".thumb2 li:eq(2) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>B급</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>O.A능력 자격증으로 취득 기관은 한국생산성 본부입니다.<br> 표작업, 함수등 엑셀의 기능을 다를 줄 압니다.</p>");
   });
   $(".thumb2 li:eq(3) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실무자</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>항공예약발권 자격증으로 취득 기관은 월드스팬 코리아 입니다.<br>여행객의 예약 업무를 다룰수 있습니다.</p>");
   });
   $(".thumb2 li:eq(4) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>실버</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>항공예약발권 자격증으로 취득 기관은 월드스팬 코리아 입니다.<br>여행객의 예약 업무를 다룰수 있습니다.</p>");
   });
   $(".thumb2 li:eq(5) button").click(function(){
        $(".license_txt li p:eq(1)").replaceWith("<p>수료증</p>");
        $(".license_txt li p:eq(2)").replaceWith("<p>바리스타 교육을 수료 하였습니다.<br>에스프레소와 카푸치노를 만들 줄 알며 고객대응 서비스를 할 수 있습니다.</p>");
   });
//버튼 누르면 해당 내용이 나오는 부분들3 웹 사이트 부분
   $(".website_thumb li:eq(0) button").click(function(){
        $(".website_txt li div h3").replaceWith("<h3>안그라픽스</h3>");
        $(".website_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>안그라픽스 웹사이트 리뉴얼</p>");
        $(".website_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100% 코딩 100%</p>");
        $(".website_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".website_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".website_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>Html / Css / jQurey</p>");
        $(".website_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".website_txt li>p:eq(0)").replaceWith("<p><a href='https://junochj.github.io/agraphics/index.html' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   $(".website_thumb li:eq(1) button").click(function(){
        $(".website_txt li div h3").replaceWith("<h3>한솔</h3>");
        $(".website_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>한솔 웹사이트 리뉴얼 제작</p>");
        $(".website_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100% 코딩 100%</p>");
        $(".website_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span><img src='images/hansolcolor.png'></span></p>");
        $(".website_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".website_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>Html / Css / jQurey</p>");
        $(".website_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".website_txt li>p:eq(0)").replaceWith("<p><a href='https://junochj.github.io/hansol_/index.html' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
  
//버튼 누르면 해당 내용이 나오는 부분들3 모바일 사이트 부분
   $(".mobile_thumb li:eq(0) button").click(function(){
        $(".mobilesite_txt li div h3").replaceWith("<h3>withDog</h3>");
        $(".mobilesite_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>파이널 프로젝트 사이트 제작</p>");
        $(".mobilesite_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>후기게시판, index페이지</p>");
        $(".mobilesite_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".mobilesite_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Bootstrap</p>");
        $(".mobilesite_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>JAVA / JavaScript / Css</p>");
        $(".mobilesite_txt li>p:eq(0)").replaceWith("<p><a href='https://www.youtube.com/watch?v=Favi_Ggm4AA&t=3' target='_blank'>시연영상 보러가기</a></p>");
   });
   $(".mobile_thumb li:eq(1) button").click(function(){
        $(".mobilesite_txt li div h3").replaceWith("<h3>withDog</h3>");
        $(".mobilesite_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>withDog 소스코드</p>");
        $(".mobilesite_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>후기게시판</p>");
        $(".mobilesite_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span></p>");
        $(".mobilesite_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Bootstrap</p>");
        $(".mobilesite_txt li div p:nth-of-type(5)").replaceWith("<p>WEB CODING<br>JAVA / JavaScript / Css</p>");
        $(".mobilesite_txt li>p:eq(0)").replaceWith("<p><a href='http://junochj.github.io/webom/sub_1.html' target='_blank'>소스코드 보러가기</a></p>");
   });
  
//버튼 누르면 해당 내용이 나오는 부분들3 지유아이 부분
   $(".jjuny_thumb li:eq(0) button").click(function(){
        $(".gui_txt li div h3").replaceWith("<h3>손수 GUI1</h3>");
        $(".gui_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>GUI 핸드메이드1</p>");
        $(".gui_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100%</p>");
        $(".gui_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span><span></span></p>");
        $(".gui_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".gui_txt li div p:nth-of-type(5)").replaceWith("<p>UNDERSTAN<br>쉬운 GUI 100%</p>");
        $(".gui_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".gui_txt li>p:eq(0)").replaceWith("<p><a href='http://jjuny.dothome.co.kr/m/' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   $(".jjuny_thumb li:eq(1) button").click(function(){
        $(".gui_txt li div h3").replaceWith("<h3>손수 GUI2</h3>");
        $(".gui_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>GUI 핸드메이드2</p>");
        $(".gui_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100%</p>");
        $(".gui_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span><span></span></p>");
        $(".gui_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".gui_txt li div p:nth-of-type(5)").replaceWith("<p>UNDERSTAN<br>쉬운 GUI 100%</p>");
        $(".gui_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".gui_txt li>p:eq(0)").replaceWith("<p><a href='http://jjuny.dothome.co.kr/m/' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   $(".jjuny_thumb li:eq(2) button").click(function(){
        $(".gui_txt li div h3").replaceWith("<h3>손수 GUI3</h3>");
        $(".gui_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>GUI 핸드메이드3</p>");
        $(".gui_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100%</p>");
        $(".gui_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span><span></span></p>");
        $(".gui_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".gui_txt li div p:nth-of-type(5)").replaceWith("<p>UNDERSTAN<br>쉬운 GUI 100%</p>");
        $(".gui_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".gui_txt li>p:eq(0)").replaceWith("<p><a href='http://jjuny.dothome.co.kr/m/' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   $(".jjuny_thumb li:eq(3) button").click(function(){
        $(".gui_txt li div h3").replaceWith("<h3>손수 GUI4</h3>");
        $(".gui_txt li div p:nth-of-type(1)").replaceWith("<p>TITLE<br>GUI 핸드메이드4</p>");
        $(".gui_txt li div p:nth-of-type(2)").replaceWith("<p>PARTICIPATION<br>디자인 100%</p>");
        $(".gui_txt li div p:nth-of-type(3)").replaceWith("<p>COLOR<span></span><span></span></p>");
        $(".gui_txt li div p:nth-of-type(4)").replaceWith("<p>DESIGN<br>Potoshop / Illustrator</p>");
        $(".gui_txt li div p:nth-of-type(5)").replaceWith("<p>UNDERSTAN<br>쉬운 GUI 100%</p>");
        $(".gui_txt li div p:nth-of-type(6)").replaceWith("<p>GUI DESING<br>Only 100%</p>");
        $(".gui_txt li>p:eq(0)").replaceWith("<p><a href='http://jjuny.dothome.co.kr/m/' target='_blank'>웹 컨텐츠 보러가기</a></p>");
   });
   }

});

 $(window).trigger("resize");

});





