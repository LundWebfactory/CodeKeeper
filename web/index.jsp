<%-- 
    Document   : index
    Created on : Nov 1, 2013, 3:08:34 PM
    Author     : Brian
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 

	<title>Source Code Collector v1</title> 

	<link type="text/css" rel="stylesheet" href="style.css" />

	<script type="text/javascript" src="jquery-latest.js"></script>
	<script type="text/javascript" src="jquery-ui.latest.js"></script>
	<script type="text/javascript" src="jquery.layout-latest.js"></script>
	<script type="text/javascript" src="settings.js"></script>
</head>
<body>
<div class="header"></div>
<div id="layout_container"><!-- Outer Layout Container -->

	<div class="outer-west">
		<div class="desc"><span>Selection</span></div>
	</div>

	<div class="outer-center"><!-- Middle Layout Container -->

		<div class="middle-center"><!-- Inner-North Layout Container -->
			<div class="north-center">
				<div class="desc"><span>Preview</span></div>
			</div>
			<div class="north-east">
				<div class="desc"><span>Information</span></div>
			</div>
		</div>

		<div class="middle-south"><!-- Inner-South Layout Container -->
			<div class="south-west">
				<div class="desc"><span>Javascript</span></div>	
			</div>
			<div class="south-center">
				<div class="desc"><span>CSS</span></div>			
			</div>
			<div class="south-east">
				<div class="desc"><span>HTML</span></div>	
			</div>
		</div>
	</div>
</div>

</body>
</html>