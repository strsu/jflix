<%@ page contentType = "text/html; charset=utf-8" %> 
<%@ page import = "java.sql.DriverManager" %> 
<%@ page import = "java.sql.Connection" %> 
<%@ page import = "java.sql.Statement" %> 
<%@ page import = "java.sql.ResultSet" %> 
<%@ page import = "java.sql.SQLException" %> 
<html> 
    <head>
        <title>Member List</title>
    </head>
    <body> 
        MEMBMER Table Contents 
        <table width="100%" border="1"> 
            <tr>
                <td>개봉년도</td>
                <td>제목</td>
                <td>장르</td>
                <td>국가</td>
                <td>상영시간</td>
                <td>연령</td>
                <td>개봉일</td>
                <td>평점</td>
                <td>평가인원</td>
                <td>감독</td>
                <td>배우</td>
            </tr> 
            <%
                // MySQL JDBC Driver Loading 
                Class.forName("com.mysql.jdbc.Driver");
                Connection conn = null;
                Statement stmt = null;
                ResultSet rs = null;
                try { 
                    String jdbcDriver = "jdbc:mysql://192.168.140.127:5010/dockerdb";
                    String dbUser = "root";
                    String dbPass = "123";
                    String query = "select * from movie";

                    // Create DB Connection
                    conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);
                    
                    // Create Statement
                    stmt = conn.createStatement();
                    
                    // Run Qeury
                    rs = stmt.executeQuery(query); 
                    
                    // Print Result (Run by Query) 
                    while(rs.next()) { 
                        %> 
            <tr> 
                <td><%= rs.getString("openYear") %></td>
                <td><%= rs.getString("title") %></td>
                <td><%= rs.getString("genre") %></td>
                <td><%= rs.getString("nation") %></td>
                <td><%= rs.getString("playTime") %></td>
                <td><%= rs.getString("age") %></td>
                <td><%= rs.getString("openDate") %></td>
                <td><%= rs.getString("rate") %></td>
                <td><%= rs.getString("vote") %></td>
                <td><%= rs.getString("director") %></td>
                <td><%= rs.getString("actors") %></td>
            </tr> 
            <% 
                }
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
        </table>
    </body>
</html>
