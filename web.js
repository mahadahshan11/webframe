alert('welcom to my page');
document.write('make yourself at home');
var username=prompt('Please Enter Your favorite social media','facebook linkedin');
if(username=='facebook'){
 document.write('<img style="width:100px ;" src="https://www.facebook.com/images/fb_icon_325x325.png">')
 document.write(`<h1>${username}</h1>`)
} 
if(username=='linkedin'){
    document.write('<img style="width:100px ;" src="https://temitopeadelekan.files.wordpress.com/2015/05/linkedin_logo_initials.png">')
    document.write(`<h1>${username}</h1>`)
}
