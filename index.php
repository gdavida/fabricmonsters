<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Starter Template - Materialize</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  </head>

  <body class="orange lighten-5">
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1007399402697634";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

<!-- 
s Mobile Devices <= 600px  
m Tablet Devices > 600px
l Desktop Devices > 992px
xl Large Desktop Devices > 1200px
 -->
  <header>
    <div>
      <h3 class="text-center">FABRIC MONSTERS</h3>
    </div>
  </header>

  <main class="row everything-wrapper">
    <div class="share-section">
        <a class="btn-floating btn-large waves-effect waves-light  teal lighten-5" id="download"><i class="teal-text text-darken-3 fa fa-download " aria-hidden="true"></i></a>
        <a class="btn-floating btn-large waves-effect waves-light  teal lighten-5" id="shareFB"><i class="teal-text text-darken-3 fa fa-facebook " aria-hidden="true"></i></a>
    </div>





    <div class="card-section card-panel white">

            <canvas class="dropzone" id="c" width="500px" height="400px"></canvas>
      <div class="icon-wrapper">
        <a class="btn-floating btn-large waves-effect waves-light teal darken-3" id="clear"><i class="white-text fa fa-undo " aria-hidden="true"></i></a>
        <a class="btn-floating btn-large waves-effect waves-light teal darken-3" id="delete"><i class="white-text fa fa-trash " aria-hidden="true"></i></a>
      </div>
    </div>


    <div class="customize-section monsterBodiesAndPartsSection card-section card-panel white">
    
      <ul id="tabs-swipe-demo" class="tabs">
        <li class="tab col s3"><a class="active" href="#test-swipe-1">Bodies</a></li>
        <li class="tab col s3"><a href="#test-swipe-2">Eyes</a></li>
        <li class="tab col s3"><a href="#test-swipe-3">Mouths</a></li>
        <li class="tab col s3"><a href="#test-swipe-4">Etc</a></li>
      </ul>

        <!-- Bodies -->
        <div id="test-swipe-1" class="items-wrapper col s12 bodies">
          <div class="each-item item-wrapper-1 item-1">
              <img src="/fabricmonsters/images/monsterBodies/red.svg" class="responsive-img" id="bodyRed">
            </div>
          <div class="each-item item-wrapper-2 item-2">
              <img src="/fabricmonsters/images/monsterBodies/orange.svg" class="responsive-img" id="bodyOrange">
            </div>
          <div class="each-item item-wrapper-3 item-3">
              <img src="/fabricmonsters/images/monsterBodies/yellow.svg" class="responsive-img" id="bodyYellow">
            </div>
          <div class="each-item item-wrapper-4 item-4">
              <img src="/fabricmonsters/images/monsterBodies/green.svg" class="responsive-img" id="bodyGreen">
            </div>
          <div class="each-item item-wrapper-5 item-5">
              <img src="/fabricmonsters/images/monsterBodies/blue.svg" class="responsive-img" id="bodyBlue">
            </div>
          <div class="each-item item-wrapper-6 item-6">
              <img src="/fabricmonsters/images/monsterBodies/teal.svg" class="responsive-img" id="bodyTeal">
            </div>
          <div class="each-item item-wrapper-7 item-7">
              <img src="/fabricmonsters/images/monsterBodies/indigo.svg" class="responsive-img" id="bodyIndigo">
            </div>
          <div class="each-item item-wrapper-8 item-8">
              <img src="/fabricmonsters/images/monsterBodies/peach.svg" class="responsive-img" id="bodyPeach">
            </div>
          <div class="each-item item-wrapper-9 item-9">
              <img src="/fabricmonsters/images/monsterBodies/coral.svg" class="responsive-img" id="bodyCoral">
            </div>
          <div class="each-item item-wrapper-1 item-10">
              <img src="/fabricmonsters/images/monsterBodies/pink.svg" class="responsive-img" id="bodyPink">
            </div>
          <div class="each-item item-wrapper-1 item-11">
              <img src="/fabricmonsters/images/monsterBodies/purple.svg" class="responsive-img" id="bodyPurple">
            </div>
          <div class="each-item item-wrapper-1 item-12">
              <img src="/fabricmonsters/images/monsterBodies/tan.svg" class="responsive-img" id="bodyTan">
            </div>
          <div class="each-item item-wrapper-1 item-13">
              <img src="/fabricmonsters/images/monsterBodies/brown.svg" class="responsive-img" id="bodyBrown">
            </div>
          <div class="each-item item-wrapper-1 item-14">
              <img src="/fabricmonsters/images/monsterBodies/black.svg" class="responsive-img" id="bodyBlack">
            </div>
          <div class="each-item item-wrapper-1 item-15">
              <img src="/fabricmonsters/images/monsterBodies/rainbow.svg" class="responsive-img" id="bodyRainbow">
            </div>
        </div>

        <!-- Eyes -->
        <div id="test-swipe-2" class="items-wrapper col s12 eyes">
          <div class="each-item item-wrapper-1 item-1">
              <img src="/fabricmonsters/images/monsterEyes/eyes1.svg" class="responsive-img" class="responsive-img" id="eyes1">
            </div>
          <div class="each-item item-wrapper-2 item-2">
              <img src="/fabricmonsters/images/monsterEyes/eyes2.svg" class="responsive-img" class="responsive-img" id="eyes2">
            </div>
          <div class="each-item item-wrapper-3 item-3">
              <img src="/fabricmonsters/images/monsterEyes/eyes3.svg" class="responsive-img" class="responsive-img" id="eyes3">
            </div>
          <div class="each-item item-wrapper-4 item-4">
              <img src="/fabricmonsters/images/monsterEyes/eyes4.svg" class="responsive-img" class="responsive-img" id="eyes4">
            </div>
          <div class="each-item item-wrapper-5 item-5">
              <img src="/fabricmonsters/images/monsterEyes/eyes5.svg" class="responsive-img" class="responsive-img" id="eyes5">
            </div>
          <div class="each-item item-wrapper-6 item-6">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" class="responsive-img" id="eyes6">
            </div>
          <!-- <div class="each-item item-wrapper-7 item-7">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-8 item-8">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-9 item-9">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-10">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-11">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-12">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-13">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-14">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-15">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div>
          <div class="each-item item-wrapper-1 item-16">
              <img src="/fabricmonsters/images/monsterEyes/eyes6.svg" class="responsive-img" id="accessory-item" class="responsive-img" id="eyes-item">
            </div> -->
        </div>

          <!-- Mouths -->
        <div id="test-swipe-3" class="items-wrapper col s12 mouths">
          <div class="each-item item-wrapper-1 item-1">
              <img src="/fabricmonsters/images/monsterMouths/mouth1.svg" class="responsive-img" id="mouth1">
            </div>
          <div class="each-item item-wrapper-2 item-2">
              <img src="/fabricmonsters/images/monsterMouths/mouth2.svg" class="responsive-img" id="mouth2">
            </div>
          <div class="each-item item-wrapper-3 item-3">
              <img src="/fabricmonsters/images/monsterMouths/mouth3.svg" class="responsive-img" id="mouth3">
            </div>
          <div class="each-item item-wrapper-4 item-4">
              <img src="/fabricmonsters/images/monsterMouths/mouth4.svg" class="responsive-img" id="mouth4">
            </div>
          <div class="each-item item-wrapper-5 item-5">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="mouth5">
            </div>
          <div class="each-item item-wrapper-6 item-6">
              <img src="/fabricmonsters/images/monsterMouths/mouth6.svg" class="responsive-img" id="mouth6">
            </div>
<!--           <div class="each-item item-wrapper-7 item-7">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-8 item-8">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-9 item-9">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-10">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-11">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-12">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-13">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-14">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-15">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div>
          <div class="each-item item-wrapper-1 item-16">
              <img src="/fabricmonsters/images/monsterMouths/mouth5.svg" class="responsive-img" id="accessory-item">
            </div> -->
        </div>

        <!-- Accessories -->
        <div id="test-swipe-4" class="items-wrapper col s12 accessory">
          <div class="each-item item-wrapper-1 item-1">
              <img src="/fabricmonsters/images/monsterHeadAccessories/horns1.svg" class="responsive-img" id="horns1">
            </div>
          <div class="each-item item-wrapper-2 item-2">
              <img src="/fabricmonsters/images/monsterHeadAccessories/horns2.svg" class="responsive-img" id="horns2">
            </div>
          <div class="each-item item-wrapper-3 item-3">
              <img src="/fabricmonsters/images/monsterHeadAccessories/tiara.png" class="responsive-img" id="tiara">
            </div>
          <div class="each-item item-wrapper-4 item-4">
              <img src="/fabricmonsters/images/monsterHeadAccessories/pinkFancyHat.png" class="responsive-img" id="pinkFancyHat">
            </div>
          <div class="each-item item-wrapper-5 item-5">
              <img src="/fabricmonsters/images/monsterHeadAccessories/pirateHat.svg" class="responsive-img" id="pirateHat">
            </div>
          <div class="each-item item-wrapper-6 item-6">
              <img src="/fabricmonsters/images/monsterHeadAccessories/cowboyHat.svg" class="responsive-img" id="cowboyHat">
            </div>
          <div class="each-item item-wrapper-7 item-7">
              <img src="/fabricmonsters/images/monsterHeadAccessories/beard1.svg" class="responsive-img" id="beard1">
            </div>
          <div class="each-item item-wrapper-8 item-8">
              <img src="/fabricmonsters/images/monsterHeadAccessories/beard2.svg" class="responsive-img" id="beard2">
            </div>
          <div class="each-item item-wrapper-9 item-9">
              <img src="/fabricmonsters/images/monsterHeadAccessories/moustache1.svg" class="responsive-img" id="moustache1">
            </div>
          <div class="each-item item-wrapper-1 item-10">
              <img src="/fabricmonsters/images/monsterHeadAccessories/moustache2.svg" class="responsive-img" id="moustache2">
            </div>
          <div class="each-item item-wrapper-1 item-11">
              <img src="/fabricmonsters/images/monsterHeadAccessories/moustache3.svg" class="responsive-img" id="moustache3">
            </div>
          <div class="each-item item-wrapper-1 item-12">
              <img src="/fabricmonsters/images/monsterHeadAccessories/moustache4.svg" class="responsive-img" id="moustache4">
            </div>
         <!--  <div class="each-item item-wrapper-1 item-13">
              <img src="/fabricmonsters/images/monsterHeadAccessories/mouth5.svg" class="responsive-img" id="">
            </div>
          <div class="each-item item-wrapper-1 item-14">
              <img src="/fabricmonsters/images/monsterHeadAccessories/mouth5.svg" class="responsive-img" id="">
            </div>
          <div class="each-item item-wrapper-1 item-15">
              <img src="/fabricmonsters/images/monsterHeadAccessories/mouth5.svg" class="responsive-img" id="">
            </div>
          <div class="each-item item-wrapper-1 item-16">
              <img src="/fabricmonsters/images/monsterHeadAccessories/mouth5.svg" class="responsive-img" id="">
            </div> -->
        </div>

      </div>


  </main>
  
<!-- 
  <footer class="page-footer orange">
    <div class="footer-copyright">
      <div class="container">
      &copy; 2017 <a class="orange-text text-lighten-3" href="http://materializecss.com">Fabric Monsters</a>
      </div>
    </div>
  </footer> -->


    <script src='https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.3/fabric.js'></script>
  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/bin/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="https://use.fontawesome.com/d5e7c3d856.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
    <script src="js/base64binary.js"></script>
    <script src="js/controller.js"></script>


  </body>
</html>

