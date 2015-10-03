$(document).ready(main);

function main()
{
	$('iframe').attr('src', getIframeUrl() );
	registerEvents();
	resizeIframe();
}

function getIframeUrl()
{
	var url = window.location.href;
	var iframe_url = 'Gamers.html';
	var param_start = url.indexOf("iframe=");
	if( param_start != -1 )
		iframe_url = url.substr(param_start+7,url.length-param_start-7);
	if( iframe_url.indexOf("http://") == -1)
		iframe_url = "http://" + iframe_url;

	return iframe_url;
}


function resizeIframe()
{
	$("#iframe").height( WindowHeight() - getObjHeight(document.getElementById("radioset")) );
}

function WindowHeight()
{
	var de = document.documentElement;
	return self.innerHeight ||
		(de &amp;amp;amp;&amp;amp;amp; de.clientHeight ) ||
		document.body.clientHeight;
}

function getObjHeight(obj)
{
	if( obj.offsetWidth )
	{
		return obj.offsetHeight;
	}
	return obj.clientHeight;
}

