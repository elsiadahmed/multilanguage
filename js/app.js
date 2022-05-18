let arabic=document.getElementById("arabic");
let english=document.getElementById('english');
let title_site=document.getElementById('title_site');
let title=document.getElementById('title');
let welcome_text=document.getElementById('welcome_text');
let about_us=document.getElementById('about_us');
let about_text=document.getElementById('about_text');
let contact=document.getElementById('contact');
arabic.onclick=()=>{setlanguage('arabic');localStorage.setItem("language","arabic");};
english.onclick=()=>{setlanguage('english');localStorage.setItem("language","english");};
onload=()=>{setlanguage(localStorage.getItem('language'));};
function setlanguage(getlanguage)
{
	if(getlanguage==='arabic')
	{
		title.innerHTML='مبرمج شيار';	
		welcome_text.innerHTML='مرحبا بكم فى موقع كودر شيار';
		about_us.innerHTML='حولنا';
		about_text.innerHTML='أنا استاذ برمجيات ومهندس برمجيات';
		contact.innerHTML='اتصل بنا';
		title_site.innerHTML='موقع متعدد اللغات';
	}else if(getlanguage==='english')
	{
		title.innerHTML='Coder Shiyar';
		welcome_text.innerHTML='welcome to website of coder shiyar';
		about_us.innerHTML='About us';
		about_text.innerHTML="i'm a teacher and a software developer";
		contact.innerHTML='Contact us';
		title_site.innerHTML='multilanguage site';		
	}
}