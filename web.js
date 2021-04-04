alert('welcom to my page');
document.write('make yourself at home');
var username = prompt('Please Enter Your favorite social media', 'facebook linkedin');
if (username == 'facebook') {
    document.write('<img style="width:500px ;" src="https://www.facebook.com/images/fb_icon_325x325.png">')
    document.write(`<h1>${username}</h1>`)
}
if (username == 'linkedin') {
    document.write('<img style="width:500px ;" src"https://temitopeadelekan.files.wordpress.com/2015/05/linkedin_logo_initials.png">')
    document.write(`<h1>${username}</h1>`)
}
var bandType = prompt('choose your favorite music band');
while (bandType !== 'ArcticMonkeys' && bandType !== 'pinkFloyed' && bandType !== 'OneDirection') {
    bandType = prompt('please choose ArcticMonkeys OR pinkFloyed OR OneDirection')
}

var userInput = prompt('on a scale from 1 to 10 how much do you like the band of your choice');
for (var i = 0; i < userInput; i++) {
    if (bandType == 'OneDirection') {
        document.write('<img src="https://pyxis.nymag.com/v1/imgs/722/364/d21523fc7215b4547847e70e709198cbf1-11-one-direction-01.2x.rsocial.w600.jpg">');
    } else if (bandType == 'ArcticMonkeys') {
        document.write('<img src="https://66.media.tumblr.com/fe97fb4faace07ee756f2530bbcd44dd/tumblr_inline_pjcdxoig971s9on4d_540.jpg"/>');
    }
    else {
        document.write('<img src="https://garciabodan.com/wp-content/uploads/2020/01/Pink-Floyd-1.jpg"/>');
    }
}

 function printName() {
 console.log('maha fan page');
 }
 function printConsolNumner(parm1, parm2){
 for(var i=parm1; i< parm2; i++){
 console.log(i);
 }
 }
 printName();
 printConsolNumner(1,100);
