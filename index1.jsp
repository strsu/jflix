<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "java.sql.DriverManager" %> 
<%@ page import = "java.sql.Connection" %> 
<%@ page import = "java.sql.Statement" %> 
<%@ page import = "java.sql.ResultSet" %> 
<%@ page import = "java.sql.SQLException" %> 
<html>
    <head>
		<title>prup</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main2.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>

    <body>

        <div id="root"> <!--  -->
            <nav class="navBar navBar-inverse"> <!-- 네비게이션 -->
                <a class="logo" href="#"><img alt="Yacha" src="./images2/prup.png"></a>
                <section class="navSection">
                    <ul>
                        <li><a href="#">홈</a></li>
                        <li><a href="#">탐색하기</a></li>
                        <li><a href="#">평가하기</a></li>
                    </ul>
                    <ul aria-label="보관함">
                        <li><a href="#">이어보기</a></li>
                        <li><a href="#">다 본 작품</a></li>
                        <li><a href="#">평가한 작품</a></li>
                    </ul>
                </section>
            </nav>

            <div class="navTop"> <!-- 검색바 -->
                <nav class="nav_top">
                    <div class="navSearchBox">
                        <form>
                            <input type="text" placeholder="제목, 감독, 배우로 검색"/>
                        </form>
                    </div>
                </nav>

            </div>

            <main class="mediaView">

                <%
                    //https://kamang-it.tistory.com/entry/RESTfulajaxajax%EB%9E%80-XMLHttpRequest%EC%82%AC%EC%9A%A9%EB%B2%95-1
                    // MySQL JDBC Driver Loading 
                    Class.forName("com.mysql.jdbc.Driver");
                    Connection conn = null;
                    Statement stmt = null;
                    ResultSet rs = null;
                    try { 
                        String jdbcDriver = "jdbc:mysql://192.168.91.42:5010/dockerdb";
                        String dbUser = "root";
                        String dbPass = "123";

                        // Create DB Connection
                        conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);

                        // Create Statement
                        stmt = conn.createStatement();

                        String query = "";
                %>
                
                <div class="imagesArea">
                    <div class="images">
                        <span></span>
                    </div>
                </div>
                
                <section class="videosArea">
                    <ul class="lineList">
                        <li class="lineVideo"> <!-- 한 줄,  -->
                            <div class="videoTitle"><h3>이어보기</h3></div> <!-- 타이틀 -->
                            <a href="#">모두 보기</a> <!-- 모두 보기 -->
                            <section>
                                <li> <!-- 한 줄, 이 태그는 왜 있는지는 잘 모르겠다 -->
                                    <div class="videoRow"> <!-- 영상 가운데 정렬 -->
                                        <ul class="lineMoving">
                                            <li class="eachVideo"> <!-- 각 영상 썸네일 -->
                                                <div class="videoCol">
                                                    <div class="thumbnail"> <!-- 영상 썸네일 -->
                                                        <span style="background-image: url('./images2/2.jpg');"></span>
                                                    </div>
                                                    <div class="thumbnailTitle"> <!-- 영상 제목 -->
                                                        제목입니다.
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="eachVideo"> <!-- 각 영상 썸네일 -->
                                                <div class="videoCol">
                                                    <div class="thumbnail"> <!-- 영상 썸네일 -->
                                                        <span style="background-image: url('./images2/3.jpg');"></span>
                                                    </div>
                                                    <div class="thumbnailTitle"> <!-- 영상 제목 -->
                                                        제목입니다.
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="eachVideo"> <!-- 각 영상 썸네일 -->
                                                <div class="videoCol">
                                                    <div class="thumbnail"> <!-- 영상 썸네일 -->
                                                        <span style="background-image: url('./images2/4.jpg');"></span>
                                                    </div>
                                                    <div class="thumbnailTitle"> <!-- 영상 제목 -->
                                                        제목입니다.
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </section>
                        </li>

                        <%
                            String[] genres = {"드라마","판타지","서부","공포","멜로/로맨스","모험","스릴러","느와르","컬트",
                                              "다큐멘터리","코미디","가족","미스터리","전쟁","애니메이션","범죄","뮤지컬","SF","액션",
                                              "무협","에로","서스펜스","서사","블랙코미디","실험"};
                            String[] genre = {"드라마","판타지","서부","공포","멜로/로맨스","모험","스릴러"};
                            
                            for(int i=0; i < genre.length; i++) {
                        %>

                        <li class="lineVideo"> <!-- 한 줄,  -->
                            <div class="videoTitle"><h3><%= genre[i] %></h3></div> <!-- 타이틀 -->
                            <a href="#">모두 보기</a> <!-- 모두 보기 -->
                            <section>
                                <li> <!-- 한 줄, 이 태그는 왜 있는지는 잘 모르겠다 -->
                                    <div class="videoRow"> <!-- 영상 가운데 정렬 -->
                                        <ul class="lineMoving">
                                            <%
                                                query = "SELECT * FROM movie WHERE genre LIKE '%" + genre[i] + "%' ORDER BY RAND() LIMIT 50";
                                                //out.println(query);
                                                
                                                // Run Qeury
                                                rs = stmt.executeQuery(query);
                        
                                                // Print Result (Run by Query) 
                                                while(rs.next()) { 
                                                    out.println("<li class='eachVideo " + rs.getString("code") + "'>"); 
                                            %>
                                            <!-- li class="eachVideo" --> <!-- 각 영상 썸네일 -->
                                                <div class="videoCol">
                                                    <div class="thumbnail"> <!-- 영상 썸네일 -->
                                                        <!-- span style="background-image: url('./images2/3.jpg');"></span -->
                                                        <%
                                                            String urls = "./poster/w100/" + rs.getString("openYear") + "/" + rs.getString("code") + ".png";
                                                        %>
                                                        <span style="background-image: url('<%= urls %>');"></span>
                                                    </div>
                                                    <div class="thumbnailTitle"> <!-- 영상 제목 -->
                                                        <%= rs.getString("title") %>
                                                    </div>
                                                    
                                                    <!-- 비디오가 확대되면 나타나는 정보 -->
                                                    <div class="videoInfo">
                                                        <div id="tar">
                                                            <span id="videoPlay" onclick="location.href='/video.jsp';"></span>
                                                            <!-- title, age, runningTime-->
                                                            <span id="tar_tar" onclick="location.href='/video.jsp';">
                                                                <div id="tar_t">
                                                                    <%= rs.getString("title") %>
                                                                </div>
                                                                <div id="tar_ar">
                                                                    <span><%= rs.getString("age") %></span>
                                                                    <span><%= rs.getString("runningTime") %></span>
                                                                </div>
                                                            </span>
                                                            <span id="videoAdd" onclick="console.log('add');"></span>
                                                        </div>
                                                        <div id="story" onclick="location.href='/video.jsp';">
                                                            <%= rs.getString("story") %>
                                                        </div>
                                                        <div id="moreInfo" onclick='mouseEv("moreInfo",<%= i %>, <%= rs.getString("code") %>)'>
                                                            <span></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>

                                            <%
                                                }
                                            %>
                                        </ul>
                                        <div class="moveLeft" onclick="mouseEv('moveLeft', <%= i %>)"></div>
                                        <div class="moveRight" onclick="mouseEv('moveRight', <%= i %>)"></div>
                                    </div>
                                    <div class="detail">
                                        <div class="detailEnter">
                                            <div class="detailContent">
                                                <div class="detailImage">
                                                    <div class="detailImage_background"></div>
                                                    <div class="detailImage_hole"></div>
                                                    <div class="detailImage_left"></div>
                                                </div>

                                                <div class="detailExit" onclick="mouseEv('detailExit', <%= i %>)" >
                                                    <span class="detailExit_img"></span>
                                                </div>

                                                <div class="detailInfo">
                                                    <div class="detailInfo_title">영화제목</div>
                                                    <!-- 이건 시리즈가 여러개인 경우에만 노출 -->
                                                    <div class="detailInfo_cool">
                                                        <div class="detailInfo_cool_menu">
                                                            <div class="detailInfo_cool_menu_1">
                                                                <div class="detailInfo_cool_menu_1t">1기2기3기</div>
                                                                <span class="detailInfo_cool_menu_1s">
                                                                    <svg class="SVGInline-svg closed-svg css-qszlzp-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                                                        <g fill="none" fill-rule="evenodd">
                                                                            <path d="M0 0h16v16H0z"></path>
                                                                            <path fill="#D8D8D8" d="M8 10.5l5-5H3z"></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div class="detailInfo_cool_menu_2">
                                                                <div class="detailInfo_cool_menu_2t">1기</div>
                                                                <div class="detailInfo_cool_menu_2t">2기</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="detailInfo_rate">
                                                        <div class="detailInfo_rate_total">
                                                            <div class="detailInfo_rate_net">
                                                                <div class="detailInfo_rate_net_t">네티즌 평점</div>
                                                                <div class="detailInfo_rate_net_r"></div>
                                                            </div>
                                                            <div class="detailInfo_rate_par">
                                                                <div class="detailInfo_rate_par_t">평가 인원</div>
                                                                <div class="detailInfo_rate_par_r"></div>
                                                            </div>
                                                        </div>
                                                        <div class="detailInfo_rate_ageEpisode">연령, 에피소드 개수</div>
                                                    </div>

                                                    <div class="detailInfo_sdaf">
                                                        <div class="detailInfo_sdaf_s"></div>
                                                        <ul class="detailInfo_sdaf_daf">
                                                            <li class="detailInfo_sdaf_daf_li">
                                                                <span class="detailInfo_sdaf_daf_l">감독</span>
                                                                <span class="detailInfo_sdaf_daf_r"></span>
                                                            </li>
                                                            <li class="detailInfo_sdaf_daf_li">
                                                                <span class="detailInfo_sdaf_daf_l">출연</span>
                                                                <span class="detailInfo_sdaf_daf_r"></span>
                                                            </li>
                                                            <li class="detailInfo_sdaf_daf_li">
                                                                <span class="detailInfo_sdaf_daf_l">개요</span>
                                                                <span class="detailInfo_sdaf_daf_r"></span>
                                                            </li>
                                                        </ul>
                                                        <div class="detailInfo_sdaf_ptws">
                                                            <a class="detailInfo_sdaf_ptws_p">
                                                                <svg class="SVGInline-svg css-69tmbr-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <g fill="none" fill-rule="evenodd">
                                                                        <circle cx="12" cy="12" r="11" stroke="#FFF" stroke-width="2"></circle>
                                                                        <path fill="#FFF" d="M8.5 7l9 4.872L8.5 17z"></path>
                                                                    </g>
                                                                </svg>
                                                                재생
                                                            </a>
                                                            <div class="detailInfo_sdaf_ptws_t">
                                                                <span class="SVGInline css-16dnw4s">
                                                                    <svg class="SVGInline-svg css-16dnw4s-svg" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.79 21.7038C19.6062 21.2814 23.3431 18.2201 23.3431 14.5063C23.3431 10.5037 19.0025 7.25903 13.6481 7.25903C8.29372 7.25903 3.95312 10.5037 3.95312 14.5063C3.95312 17.6262 6.59049 20.2857 10.2896 21.3069C10.0854 22.3898 9.73373 23.386 9.06406 24.5365C11.2417 23.8738 13.0756 23.0317 14.79 21.7038ZM10.353 14.8481C10.353 15.5911 9.75078 16.1933 9.00785 16.1933C8.26492 16.1933 7.66266 15.5911 7.66266 14.8481C7.66266 14.1052 8.26492 13.5029 9.00785 13.5029C9.75078 13.5029 10.353 14.1052 10.353 14.8481ZM13.6482 16.1933C14.3912 16.1933 14.9934 15.5911 14.9934 14.8481C14.9934 14.1052 14.3912 13.5029 13.6482 13.5029C12.9053 13.5029 12.303 14.1052 12.303 14.8481C12.303 15.5911 12.9053 16.1933 13.6482 16.1933ZM19.6336 14.8481C19.6336 15.5911 19.0313 16.1933 18.2884 16.1933C17.5455 16.1933 16.9432 15.5911 16.9432 14.8481C16.9432 14.1052 17.5455 13.5029 18.2884 13.5029C19.0313 13.5029 19.6336 14.1052 19.6336 14.8481ZM15.6479 23.1513C17.846 22.845 19.8455 22.0399 21.4231 20.8607C23.4682 19.3319 24.8789 17.1013 24.8789 14.506C24.8789 13.6389 24.7215 12.8124 24.4354 12.0393C26.7532 13.1986 28.2794 15.1734 28.2794 17.4146C28.2794 19.5992 26.8294 21.5306 24.6096 22.7004C24.8866 23.8454 25.412 24.8407 26.2388 25.7807C24.4326 25.5414 22.6869 24.7571 21.3152 23.7553C20.7713 23.8355 20.209 23.8775 19.6336 23.8775C18.1961 23.8775 16.8406 23.6153 15.6479 23.1513Z" fill="white"></path>
                                                                    </svg>
                                                                </span>
                                                                <span class="detailInfo_sdaf_ptws_t1">같이보기</span>
                                                            </div>
                                                            <div class="detailInfo_sdaf_ptws_w">
                                                                <button class="detailInfo_sdaf_ptws_w_b">
                                                                    <span class="SVGInline css-1ch6v4l">
                                                                        <svg class="SVGInline-svg css-1ch6v4l-svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1458 10.0833V2.75H9.85417V10.0833H2.75V12.375H9.85417V19.25H12.1458V12.375H19.25V10.0833H12.1458Z" fill="white" fill-opacity="0.5"></path>
                                                                        </svg>
                                                                    </span>
                                                                    보고싶어요
                                                                </button>
                                                            </div>
                                                            <div class="detailInfo_sdaf_ptws_s"></div>
                                                        </div>
                                                        <div class="detailInfo_sdaf_myrate">
                                                            <span class="detailInfo_sdaf_myrate_already">이미 본 작품인가요?</span>
                                                            <div class="detailInfo_sdaf_myrate_star">
                                                                <div class="detailInfo_sdaf_myrate_star_">
                                                                    <div class="detailInfo_sdaf_myrate_star_empty">☆☆☆☆☆</div>
                                                                    <div class="detailInfo_sdaf_myrate_star_full">★★★★★</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <ul class="detaileMenu">
                                                    <li class="detaileMenu_click">기본정보</li>
                                                    <li class="detaileMenu_none">상세정보</li>
                                                    <li class="detaileMenu_none">비슷한 작품</li>
                                                </ul>

                                                <div class="detailWhat">
                                                    <p class="detailWhat_p"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </section>
                        </li>
                        <%
                            }
                        %>
                    </ul>
                </section>

                <% 
                    } catch(SQLException ex) { 
                        out.println(ex.getMessage()); 
                        ex.printStackTrace(); 
                    } finally { 
                        // Close Statement
                        if (rs != null) try { rs.close(); } catch(SQLException ex) {} 
                        if (stmt != null) try { stmt.close(); } catch(SQLException ex) {} 
                        
                        // Close Connection 
                        if (conn != null) try { conn.close(); } catch(SQLException ex) {} 
                    } 
                %>

            </main>

        </div>

        <script defer>

            function mouseEv(...arg) {
                if(arg[0] == 'moveLeft') {
                    leftBtn(arg[1]);
                } else if(arg[0]=='moveRight') {
                    rightBtn(arg[1]);
                } else if(arg[0]=='moreInfo') {
                    moreInfo(arg[1], arg[2]);
                } else if(arg[0]=='detailExit') {
                    detailExit(arg[1]);
                }
            }

            function leftBtn(where) {
                let ul = document.getElementsByClassName('videoRow')[where+1].getElementsByTagName('ul')[0];
                let moved = parseInt(ul.style.transform.replace("translate(","").replace("px)",""));
                let videoWidth = ul.getElementsByClassName('eachVideo')[0].clientWidth;
                let parentWidth = document.getElementsByClassName('videoRow')[where+1].clientWidth; //보이는 line의 길이
                let fullWidth = ul.scrollWidth; // ul의 전체 길이
                let lineWidth = ul.clientWidth; // li의 길이
                
                let sideWidth = (parentWidth - lineWidth)/2;
                    lineWidth += sideWidth;
                if(!moved) moved = 0;
                if(moved >= 0) return;
                
                ul.style.transform = "translate(" + ( parseInt(moved) + lineWidth ) + "px, 0px)";
            }

            function rightBtn(where) {
                let ul = document.getElementsByClassName('videoRow')[where+1].getElementsByTagName('ul')[0];
                let moved = parseInt(ul.style.transform.replace("translate(","").replace("px)",""));
                let videoWidth = ul.getElementsByClassName('eachVideo')[0].clientWidth;
                let parentWidth = document.getElementsByClassName('videoRow')[where+1].clientWidth; //보이는 line의 길이
                let fullWidth = ul.scrollWidth; // ul의 전체 길이
                let lineWidth = ul.clientWidth; // li의 길이
                
                let sideWidth = (parentWidth - lineWidth)/2;
                    lineWidth += sideWidth;
                
                if(!moved) moved = 0;
                if(Math.abs(moved) >= Math.abs(fullWidth-lineWidth)) return;
                
                ul.style.transform = "translate(" + ( moved + lineWidth * -1 ) + "px, 0px)";
            }

            function moreInfo(where, code) {
                let detail = document.getElementsByClassName('detail');
                
                for(let i=0; i < detail.length; i++) {
                    if(i == where) continue;
                    detail[i].style.display = 'none';
                }

                let element = document.getElementsByClassName("detailInfo_sdaf_daf_r");
                for(let i=0; i<element.length; i++) {
                    while (element[i].firstChild) {
                        element[i].removeChild(element[i].firstChild);
                    }
                }

                detail = document.getElementsByClassName('detail')[where];
                detail.style.display = 'block';

                let xmlHttp = new XMLHttpRequest();
                // true는 동기방식을 의미한다
                xmlHttp.open("GET", "http://192.168.91.42:5000/detail.jsp?code="+code, true);
                xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

                xmlHttp.onreadystatechange = function() {
                    if(this.status == 200 & this.readyState == this.DONE) {
                        let res = xmlHttp.responseText;
                        let parser = new DOMParser();
                        let xmlDoc = parser.parseFromString(res, "text/xml");
                        let val = '';

                        //console.log(xmlDoc.getElementsByTagName('title')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('rate')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('participate')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('age')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('story')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('directors')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('actors')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('genre')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('nation')[0].innerHTML);
                        //console.log(xmlDoc.getElementsByTagName('openDate')[0].innerHTML);

                        // 포스터 설정
                        val = detail.getElementsByClassName('detailInfo_title')[0].innerHTML = xmlDoc.getElementsByTagName('openYear')[0].innerHTML;
                        detail.getElementsByClassName('detailImage_background')[0].style.backgroundImage = "url('./poster/w300/" + val + "/" + code + ".png')";

                        detail.getElementsByClassName('detailInfo_title')[0].innerHTML = xmlDoc.getElementsByTagName('title')[0].innerHTML;

                        val = xmlDoc.getElementsByTagName('rate')[0].innerHTML;
                        if(val) {
                            detail.getElementsByClassName('detailInfo_rate_net_r')[0].innerHTML = val;
                        } else {
                            detail.getElementsByClassName('detailInfo_rate_net_r')[0].innerHTML = '0';
                        }

                        val = xmlDoc.getElementsByTagName('participate')[0].innerHTML;
                        if(val) {
                            detail.getElementsByClassName('detailInfo_rate_par_r')[0].innerHTML = val;
                        } else {
                            detail.getElementsByClassName('detailInfo_rate_par_r')[0].innerHTML = '0';
                        }

                        detail.getElementsByClassName('detailInfo_rate_ageEpisode')[0].innerHTML = xmlDoc.getElementsByTagName('age')[0].innerHTML;

                        detail.getElementsByClassName('detailInfo_sdaf_s')[0].innerHTML = xmlDoc.getElementsByTagName('story')[0].innerHTML;
                        
                        val = xmlDoc.getElementsByTagName('directors')[0].innerHTML.split(',');
                        for(let i=0; i<val.length; i++) {
                            let tmp = document.createElement("span");
                            tmp.innerHTML = val[i];
                            detail.getElementsByClassName('detailInfo_sdaf_daf_li')[0].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            if(i < val.length-1) {
                                tmp = document.createElement("span");
                                tmp.innerHTML = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[0].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            }
                        }

                        val = xmlDoc.getElementsByTagName('actors')[0].innerHTML.split(',');
                        for(let i=0; i<val.length; i++) {
                            let tmp = document.createElement("span");
                            tmp.innerHTML = val[i];
                            detail.getElementsByClassName('detailInfo_sdaf_daf_li')[1].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            if(i < val.length-1) {
                                tmp = document.createElement("span");
                                tmp.innerHTML = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[1].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            }
                        }

                        val = xmlDoc.getElementsByTagName('genre')[0].innerHTML.split(',');
                        for(let i=0; i<val.length; i++) {
                            let tmp = document.createElement("span");
                            tmp.innerHTML = val[i];
                            detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            if(i < val.length-1) {
                                tmp = document.createElement("span");
                                tmp.innerHTML = " · ";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            }
                        }

                        val = xmlDoc.getElementsByTagName('nation')[0].innerHTML.split(',');
                        for(let i=0; i<val.length; i++) {
                            if(i == 0) {
                                let tmp = document.createElement("span");
                                tmp.innerHTML = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            }
                            let tmp = document.createElement("span");
                            tmp.innerHTML = val[i];
                            detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            if(i < val.length-1) {
                                tmp = document.createElement("span");
                                tmp.innerHTML = " · ";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            }
                        }

                        val = xmlDoc.getElementsByTagName('openDate')[0].innerHTML;
                        if(val) {
                            let tmp = document.createElement("span");
                                tmp.innerHTML = "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;";
                                detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                            
                            tmp = document.createElement("span");
                            tmp.innerHTML = val;
                            detail.getElementsByClassName('detailInfo_sdaf_daf_li')[2].getElementsByClassName('detailInfo_sdaf_daf_r')[0].append(tmp);
                        }

                    }
                }
                xmlHttp.send();
            }

            function detailExit(where, code) {
                let detail = document.getElementsByClassName('detail')[where];
                    detail.style.display = 'none';
                
                let element = document.getElementsByClassName("detailInfo_sdaf_daf_r");
                for(let i=0; i<element.length; i++) {
                    while (element[i].firstChild) {
                        element[i].removeChild(element[i].firstChild);
                    }
                }
            }


        </script>

    </body>

</html>