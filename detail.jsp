<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "java.sql.DriverManager" %> 
<%@ page import = "java.sql.Connection" %> 
<%@ page import = "java.sql.Statement" %> 
<%@ page import = "java.sql.ResultSet" %> 
<%@ page import = "java.sql.SQLException" %>

<%
    // Ajax 부분
    request.setCharacterEncoding("UTF-8");
    String code = request.getParameter("code");


    // DB 부분

    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;

    // 제목, 평점, 평가인원, 연령, 스토리, 감독, 배우, 장르, 국가, 개봉 - 10개
    String[] value = new String[11];
    try { 
        String jdbcDriver = "jdbc:mysql://192.168.91.42:5010/dockerdb";
        String dbUser = "root";
        String dbPass = "123";

        // Create DB Connection
        conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);

        // Create Statement
        stmt = conn.createStatement();

        String query = "";

        query = "SELECT * FROM movie WHERE code = '" + code + "'"; 
                                                
        // Run Qeury
        rs = stmt.executeQuery(query);
        // Print Result (Run by Query)

        while(rs.next()) {
            value[0] = rs.getString("title");
            value[1] = rs.getString("rate");
            value[2] = rs.getString("participate");
            value[3] = rs.getString("age");
            value[4] = rs.getString("story");
            value[5] = rs.getString("directors");
            value[6] = rs.getString("actors");
            value[7] = rs.getString("genre");
            value[8] = rs.getString("nation");
            value[9] = rs.getString("openDate");
            value[10] = rs.getString("openYear");
        }
%>
        <result>
            <title><%= value[0] %></title>
            <rate><%= value[1] %></rate>
            <participate><%= value[2] %></participate>
            <age><%= value[3] %></age>
            <story><%= value[4] %></story>
            <directors><%= value[5] %></directors>
            <actors><%= value[6] %></actors>
            <genre><%= value[7] %></genre>
            <nation><%= value[8] %></nation>
            <openDate><%= value[9] %></openDate>
            <openYear><%= value[10] %></openYear>
        </result>
        
<%
        
    } catch(SQLException ex) { 
        //out.println(ex.getMessage()); 
        ex.printStackTrace(); 
    } finally { 
        // Close Statement
        if (rs != null) try { rs.close(); } catch(SQLException ex) {} 
        if (stmt != null) try { stmt.close(); } catch(SQLException ex) {} 
        
        // Close Connection 
        if (conn != null) try { conn.close(); } catch(SQLException ex) {} 
    } 

%>