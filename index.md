<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA_Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Couvee</title>
    <link rel="shortcut icon" href="https://www.couvee.co.id/wp-content/uploads/2019/08/favicon.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"> <!-- header -->
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet"> <!-- sitata -->
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"> <!-- textp -->
    <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"> <!-- ssh2 -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet"> <!-- ssp -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/lightslider.css">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnMj8Xc5_jA0tqVHCoFHCk-2sHt4imItA&callback=initMap&libraries=&v=weekly" defer></script>
    <script type="text/javascript" src="js/Jquery.js"></script>
    <script type="text/javascript" src="js/lightslider.js"></script>
</head>
<body>

<div class="header" id="header">

    <label for="check" id="open" onclick="openNav()">&#9776;</label>   

    <div class="bg-image"></div>

    <div class="bg-text" id="bg-text">

      <label for="check" id="openclo" onclick="closeNav()">&#x2715;</label>

      <a href="#mid" id="ab" onmouseover="big(this)" onmouseout="small(this)">about</a>
      <a href="#slider" onmouseover="big(this)" onmouseout="small(this)" >products</a>

      <img id="logo" onclick="return_top()" src="https://www.couvee.co.id/wp-content/themes/couvee/assets/images/logo-white.png" alt="" width="7%"> 

      <a href="#location_page" onmouseover="big(this)" onmouseout="small(this)">location</a>
      <a href="#contact" onmouseover="big(this)" onmouseout="small(this)" id="acont">contact</a>
    </div>
    

    <div class="main-image">
        <img id="cou" src="https://www.couvee.co.id/wp-content/uploads/2019/07/couvee-text.png" alt="">
        <img id="counone" src="https://www.couvee.co.id/wp-content/uploads/2019/07/couvee-text.png" alt="">
    </div>
    <div class="secondar-image">
        <img id="hand1" src="images/1.png" alt="">
        <img id="hand2" src="images/2.png" alt="">

        <img id="hand1none" src="images/1.png" alt="">
        <img id="hand2none" src="images/2.png" alt="">
    </div>   
    
</div>

<div class="mid" id="mid">
    <img id="splash" src="images/splash.png" alt=""> 
        <div class="text">
            <p id="textp">Couvee comes from the idea that everyone can enjoy coffee. <br>
            It doesn’t matter if you like your coffee light and sweet, or you prefer strong coffee with no sugar, you can always enjoy it with your personal preferences in here. <br>
            It’s our pleasure to help you find the best crafted drink that suits your taste in the best way.</p>
        </div>
</div>

<div class="row"> 
    <div class="column" id="first_column">
        <img src="images/cou.jpg" style="width:100%">
        <img src="images/c11.jpg" style="width:100%">
    </div>
    <div class="column" id="second_column">
        <img src="images/c2.jpg" style="width:100%" height="50%">
        <img src="images/sq.jpg" style="width:100%">
    </div>  
    <div class="column">
        <img src="images/dlina.jpeg" style="width:100%">
        <img src="images/c22.jpg" style="width:100%">
    </div>
    <div class="column">
        <img src="images/indoor.jpg" style="width:100%">
        <img src="images/pered.jpg" style="width:100%">
    </div>
    <div class="column" id="last_col">
        <img src="images/couu.jpg" style="width:100%">
        <img src="images/c.jpg" style="width:100%">
    </div>
</div>

<div class="zhai" >
    <img id="bcggrey" src="images/decoration-1.jpg" alt="">
    <img id="fr-cof"  src="images/fr-cof.jpg" alt="">
        <div class="sitata"> 
            <p id="sitp"><i>"A cup of coffee shared with a friend is happiness tasted and time well spent."</i></p>
        </div>  
</div> 

<div class="popup1">
    <div class="content">
        <img onclick="close_popup1()" class="closed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png" alt="" width="1.5%">
        <p id="descr">A classic drink with chocolate cookies and vanilla cream.</p>
    </div>
</div>
<div class="popup2">
    <div class="content">
        <img onclick="close_popup2()" class="closed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png" alt="" width="1.5%">
        <p id="descr">Our favorite red velvet drink with cream cheese notes.</p>
    </div>
</div>
<div class="popup3">
    <div class="content">
        <img onclick="close_popup3()" class="closed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png" alt="" width="1.5%">
        <p id="descr">Our signature caffe latte sweetened with premium palm sugar.</p>
    </div>
</div>
<div class="popup4">
    <div class="content">
        <img onclick="close_popup4()" class="closed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png" alt="" width="1.5%">
        <p id="descr">Combination of purple sweet potato and creamy milk.</p>
    </div>
</div>
<div class="popup5">
    <div class="content">
        <img onclick="close_popup5()" class="closed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png" alt="" width="1.5%">
        <p id="descr">Creamy and leafy, the best twist of Japanese classic drink.</p>
    </div>
</div>

<section class="slider" id="slider">
    
<h2 id="menuh2">PRODUCTS</h2>

	<ul id="autoWidth" class="cs-hidden">
    <!--1------------------------------------>	
    <li class="item-a">
   <!--box-slider--------------->

	   <div class="box">
    <!--img-box---------->
    
	<div class="slide-img">
	<img alt="1" src="images/menu1.jpg">
    <!--overlayer---------->
    
	<div class="overlay">
	<!--buy-btn------>	
    <button class="buy-btn" id="blackcookie" onclick="popup1()" 
                  >See Description</button>
    </div>
    
    </div>
    
	<!--detail-box--------->
	<div class="detail-box" id="detail">
    <!--type-------->
    
	<div class="type">
        <h4>Black Cookie Latte</h4>
    </div>
    
    <!--price-------->
    <h6 class="price">$23</h6>
	</div>
	
         </div>	
         </li>

    <!--2------------------------------------>	
    <li class="item-b">
    <!--box-slider--------------->
        <div class="box">
        <!--img-box---------->
        <div class="slide-img">
        <img alt="2" src="images/menu2.jpg">
        <!--overlayer---------->
        <div class="overlay">
        <!--buy-btn------>	
        <button class="buy-btn" id="redv" onclick="popup2()">See Description</button>	
        </div>
        </div>
        <!--detail-box--------->
        <div class="detail-box">
        <!--type-------->
        <div class="type">
            <h4>Red Velvet Latte</h4>
        </div>
        
        <!--price-------->
        <h6 class="price">$25</h6>
        </div> 
        </div>
         </li>
         
    <!--3------------------------------------>
    <li class="item-c">
        <!--box-slider--------------->
            <div class="box">
            <!--img-box---------->
            <div class="slide-img">
            <img alt="3" src="images/menu3.jpg">

            <!--overlayer---------->
            <div class="overlay">
            <!--buy-btn------>	
            <button class="buy-btn" id="melac" onclick="popup3()">+See Description</button>	
            </div>
            </div>

            <!--detail-box--------->
            <div class="detail-box">
            <!--type-------->
            <div class="type">
                <h4>Melacca</h4>
            </div>
            
            <!--price-------->
            <h6 class="price">$24</h6>
            </div> 
            </div>
        </li>

    <!--4------------------------------------>
    <li class="item-d" id="itemd">
    <!--box-slider--------------->
        <div class="box">
        <!--img-box---------->
        <div class="slide-img">
        <img alt="4" src="images/menu4.jpg">

        <!--overlayer---------->
        <div class="overlay">
        <!--buy-btn------>	
        <button class="buy-btn" id="taro" onclick="popup4()" >+See Description</button>
        </div>
        </div>

        <!--detail-box--------->
        <div class="detail-box">
        <!--type-------->
        <div class="type">
            <h4>Taro Latte</h4>
        </div>
        
        <!--price-------->
        <h6 class="price">$22</h6>
        </div> 
        </div>
    </li>

    <!--5------------------------------------>
    <li class="item-e">
            <!--box-slider--------------->
        <div class="box">
                <!--img-box---------->
            <div class="slide-img">
                <img alt="5" src="images/menu5.jpg">
        
                <!--overlayer---------->
                <div class="overlay">
                <!--buy-btn------>	
                <button class="buy-btn" id="matcha" onclick="popup5()">+See Description</button>	
                </div>
            </div>
        
                <!--detail-box--------->
                <div class="detail-box">
                <!--type-------->
                <div class="type">
                    <h4>Matcha Latte</h4>
                </div>
                
                <!--price-------->
                <h6 class="price">$24</h6>
                </div> 

        </div>
    </li>

    </ul>
</section>

<div class="about_locations">

    <div class="left_text">
        <div class="ab_loc_text">
            <p>You can found us in Yogyakarta. Every store has their own unique ambience, let’s click All Locations below to know which one is gonna be your favorite!</p>
        </div>
        <div class="ab_loc_but">
            <a href="#location_page" class="fa" id="butt2"><span id="all_lo">ALL LOCATIONS</span>  &#xf175;</a>
        </div>
    </div>

    <div class="right_img">
        <div class="sloi2">
            <img id="sloi2" src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-2.jpg" alt="">
        </div>
        <div class="sloi1">
            <img id="sloi1" src="https://www.couvee.co.id/wp-content/uploads/2019/07/locations.jpg" alt="">
        </div>
    </div>

</div>
 
<div class="location_page" id="location_page">

    <div class="all">
        <h3>ALL LOCATIONS</h3>
    </div>

    <div class="location1_row">
    <div class="location1">
        <div class="loc_image">
            <img id="loc_image" src="https://www.couvee.co.id/wp-content/uploads/2019/07/couvee-seturan.jpg" alt="">
        </div>
        <div class="loc_txt">
            <h6>Jl Seturan, Yogyakarta</h6> <br>
            <p class="fa"> <spann style="color: rgb(155, 155, 155);"> &#xf08d;</spann> <span id="all_loc">Jl. Seturan Raya No.88, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta</span> </p><br>
            <p class="fa" id="p"> <spann style="color: rgb(155, 155, 155);"> &#xf017;</spann> <span id = "all_loc"> Opens at <b>09.00 AM - 12.00 AM</b></span></p><br>
            <a href="https://www.google.com/maps/place/Couvee+-+Seturan/@-7.7718389,110.4073637,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a590e156f7c1f:0x2502cff3b7310971!8m2!3d-7.7717774!4d110.4095386" id="map_btn">GET DIRECTION</a>
        </div>
    </div>

    <div class="location2">
        <div class="loc_image">
            <img id="loc_image2" src="https://www.couvee.co.id/wp-content/uploads/2019/07/foto-jakal-1-e1605407061186-294x300.jpeg" alt="">
        </div>
        <div class="loc_txt">
            <h6>Jl Kaliurang, Yogyakarta</h6> <br>
            <p class="fa"> <spann style="color: rgb(155, 155, 155);"> &#xf08d;</spann> <span id = "all_loc"> Jalan Kaliurang Km 5.2, Manggung, Caturtunggal, Depok, Sleman, DIY 55281</span></p><br>
            <p class="fa" id="p"> <spann style="color: rgb(155, 155, 155);"> &#xf017;</spann>  <span id = "all_loc">Opens at <b>08.00 AM - 12.00 AM</b></span></p> <br>
            <a href="https://www.google.com/maps/place/Couvee+-+Jalan+Kaliurang/@-7.7588019,110.3792548,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a59ac8cfe7685:0xda4257bfd1fb71da!8m2!3d-7.7588019!4d110.3814435" id="map_btn">GET DIRECTION</a>
        </div>
    </div>
    </div>

    <div class="location2_row">

    <div class="location3">
        <div class="loc_image">
            <img id="loc_image" src="https://www.couvee.co.id/wp-content/uploads/2019/07/couvee-notoprajan.jpg" alt="">
        </div>
        <div class="loc_txt">
            <h6>Jl Ahmad Dahlan, Yogyakarta</h6> <br>
            <p class="fa"> <spann style="color: rgb(155, 155, 155);"> &#xf08d;</spann> <span id = "all_loc"> Jl. KH. Ahmad Dahlan No.98, Notoprajan, Ngampilan, Yogyakarta</span></p><br>
            <p class="fa" id="p"> <spann style="color: rgb(155, 155, 155);"> &#xf017;</spann> <span id = "all_loc"> Opens at <b>09.00 AM - 12.00 AM</b></span></p><br>
            <a href="https://www.google.com/maps/place/Couvee+-+Ahmad+Dahlan/@-7.8009865,110.3564587,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a57626f42dd41:0xa1a979f98e9aabcc!8m2!3d-7.8011084!4d110.3585764" id="map_btn">GET DIRECTION</a>
        </div>
    </div>
    

    </div>
</div>

<div class="contact" id="contact">

    <div class="hero_img">

        <form class="needs-validation">
        <h1 id="shh2">Say Hello!</h1>
        <p id="shp">Send us a message and we’ll get back to you as soon as possible. Looking forward to hearing from you! </p>
        
        <div class="form-group">
             <label id="labn" for="name">Name</label><br> 
             <input id="name" type="text" class="form-control" name = "name" placeholder="Enter your name" required>
        </div>

        <div class="form-group">
             <label id="labe" for="email">Email</label><br> 
             <input id="email" type="email" class="form-control" name = "email" placeholder="Enter your email" required >
        </div>
     
        <div class="form-group">
            <label id="labm" for="mes">Message</label> 
            <input id="mes" type="text" class="form-control" name = "message" placeholder="Enter your message" required>
        </div>
    
        <div class="end">
             <button id="but2" class="btn">Send Message</button> 
        </div>

      </form>
    </div>
</div>

<div class="last_page">

    <div class="find">
        <img id="foot_logo" src="https://www.couvee.co.id/wp-content/uploads/2019/07/logo-black.png"alt="">
        <img id="foot_logo_mobile" src="https://www.couvee.co.id/wp-content/themes/couvee/assets/images/logo-white.png" alt=""> 
        <h2 id="find_h2">FIND US ON INSTAGRAM!</h2>
    </div>

    <hr>

    <div class="footer">

        <div class="footer_text">

            <div class="foot_logo">
                <img id="foot_img" src="https://www.couvee.co.id/wp-content/themes/couvee/assets/images/logo.png" alt="">
            </div>

            <div class="links">
                <div class="title1">
                    <h5>LINKS</h5>
                </div>
                <div class="title1_content">
                    <a href="#header">Homepage</a>
                    <a href="#mid">About us</a>
                    <a href="#slider">Menu</a>
                    <a href="#location_page">Location</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <div class="contacts">
                <div class="title2">
                    <h5>CONTACTS</h5>
                </div>
                <div class="title2_content">
                    <p class="fa">&#xf003; Hello@couvee.co.id</p>
                    <p class="fa">&#xf095; Phone num</p>
                </div>
            </div>

            <div class="socials">
                <div class="title3">
                    <h5>SOCIALS</h5>
                </div>
                <div class="title3_content">
                    <a href="https://www.instagram.com/couvee.idn/" class="fa">&#xf16d; <span id="span_inst">couvee.idn </span></a>
                </div>
            </div>



        </div>
    </div>

    <div class="last_line">

        <div class="last_line_cont">
            <p>© 2019 Couvee</p>
        </div>
        
    </div>


</div>

    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>
