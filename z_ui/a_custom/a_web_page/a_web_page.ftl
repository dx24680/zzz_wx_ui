<!DOCTYPE html>
<html>

<head>
	<title>
		${entity_page.wpage_name}
	</title>
	<script src="/__api_java__/z_app/web_page/web/comp.js?${V}"></script>
	<link rel="stylesheet" href="/__api_java__/z_app/web_page/web/comp.css?${V}" />
	<style>
	pre {
		width: 800px;
		background-color: lightgray;
	}
	</style>
</head>

<body>
	<#assign EMPTY="" />
	<pre>
		site_id: ${site_id}
		dir: ${dir}
		file_name: ${file_name}
		input_data: ${input_data}
</pre>
	<#list list_page_comp as comp_item>
		<#assign comp_data=comp_item.data />
		<pre>
${comp_item?string}
</pre>
		<#include "a_web_page/${site_id}/comp/${comp_item.wcomp_type}.ftl" />
		${EMPTY}
	</#list>
</body>

</html>