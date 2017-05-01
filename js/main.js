// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c', {});
// windowWidth = window.innerWidth ;
// windowHeight = window.innerHeight;
canvas.setWidth(310);
canvas.setHeight(500);


// add image to canvas
canvas.renderAll();
// ADD EYES
$('#bodyRed').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/red.svg', function(oImg) {
    oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyOrange').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/orange.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyYellow').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/yellow.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyGreen').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/green.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyBlue').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/blue.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyBrown').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/brown.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});


$('#bodyTeal').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/teal.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyIndigo').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/indigo.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyTan').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/tan.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyPurple').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/purple.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});


$('#bodyRainbow').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/rainbow.svg', function(oImg) {
  oImg.scale(1.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyPinkKnit').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/pink-knit.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyGreenWinged').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/green-winged.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyBlack').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/black.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyCoral').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/coral.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#bodyPeach').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/peach.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});


$('#bodyPink').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterBodies/pink.svg', function(oImg) {
  oImg.scale(2.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});







// ADD EYES
$('#eyes1').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes1.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#eyes2').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes2.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#eyes3').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes3.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#eyes4').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes4.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#eyes5').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes5.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#eyes6').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterEyes/eyes6.svg', function(oImg) {
  oImg.scale(0.7);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

// ADD MOUTHS
$('#mouth1').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#mouth2').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#mouth3').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth3.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#mouth4').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth4.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#mouth5').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth5.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#mouth6').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterMouths/mouth6.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});
// end - adding images to canvas



// ADD EXTRAS LIKE HORNS AND HATS
$('#horns1').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/horns1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#horns2').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/horns2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#tiara').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/tiara.png', function(oImg) {
  oImg.scale(0.2);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#pinkFancyHat').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/pinkFancyHat.png', function(oImg) {
  oImg.scale(.8);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#pirateHat').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/pirateHat.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#cowboyHat').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/cowboyHat.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#beard1').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/beard1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#beard2').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/beard2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});
$('#moustache1').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/moustache1.svg', function(oImg) {
  oImg.scale(0.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});
$('#moustache2').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/moustache2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});
$('#moustache3').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/moustache3.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

$('#moustache4').click(function() {
  var image1 = new fabric.Image.fromURL('/images/monsterHeadAccessories/moustache4.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    borderColor: 'gray',
    cornerColor: 'blue',
    cornerSize: 6,
    transparentCorners: false
  })
});

// end - add extras




// save file to new window

    // function saveFile() {

    // var trsvg = canvas.toSVG();
    //   window.open(document.querySelector('canvas').toDataURL());
    // }

    //     document.querySelector('button').addEventListener('click', saveFile, false);










    
    function saveFile() {
      window.open(document.querySelector('canvas').toDataURL());
    }
    //--------

    function handleFileSelect(evt) {
      //make canvas
      var canvasWidth = 500;
      var canvasHeight = 500;
      var file = evt.target.files[0];
      
      //image upload
      reader.onload = function(fileObject) {
        var data = fileObject.target.result;
        
        // Create an image object
        var image = new Image();
        image.onload = function() {
          
          window.imageSrc = this;
          redrawMeme(window.imageSrc, null, null);
        }
        
        // Set image data to background image.
        image.src = data;
        console.log(fileObject.target.result);
      };
      reader.readAsDataURL(file)
    }
    // var file = document.querySelector("#file");
    // file.onchange = handleFileSelect;

        // document.querySelector('button').addEventListener('click', saveFile, false);




// Delete 
$("#delete").click(function(){
    deleteObjects();
  });

// select all objects
function deleteObjects(){
  var activeObject = canvas.getActiveObject(),
    activeGroup = canvas.getActiveGroup();
    if (activeObject) {
      canvas.remove(activeObject);
    }
    else if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
      canvas.remove(object);
      });
    }
}



//  Clear Canvas
$('#clear').click(function() { canvas.clear() });



/**
 * This is the function that will take care of image extracting and
 * setting proper filename for the download.
 * IMPORTANT: Call it from within a onclick event.
*/
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
    
}


/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'c', 'my_monster.png');
}, false);




    (function () {

    // Canvas Object
      var ctx = canvas.getContext('2d');

      // load image from data url
      var imageObj = new Image();
      imageObj.onload = function() {
      ctx.drawImage(this, 0, 0);
      };

      imageObj.src = 'my_monster.png';
        // Twitter oauth handler
        $.oauthpopup = function (options) {
            if (!options || !options.path) {
                throw new Error("options.path must not be empty");
            }
            options = $.extend({
                windowName: 'ConnectWithOAuth' // should not include space for IE
                , windowOptions: 'location=0,status=0,width=800,height=400'
                , callback: function () {
                    debugger;
                    //window.location.reload();
                }
            }, options);
            var oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
            var oauthInterval = window.setInterval(function () {
                if (oauthWindow.closed) {
                    window.clearInterval(oauthInterval);
                    options.callback();
                }
            }, 1000);
        };
        // END Twitter oauth handler
        //bind to element and pop oauth when clicked
        $.fn.oauthpopup = function (options) {
            $this = $(this);
            $this.click($.oauthpopup.bind(this, options));
        };
       $('#shareFB').click(function () {
          var data = $('#c')[0].toDataURL("image/png");
          try {
              blob = dataURItoBlob(data);
          } catch (e) {
              console.log(e);
          }
          FB.getLoginStatus(function (response) {
              console.log(response);
              if (response.status === "connected") {
                  postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
              } else if (response.status === "not_authorized") {
                  FB.login(function (response) {
                      postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
                  }, {scope: "publish_actions"});
              } else {
                  FB.login(function (response) {
                      postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
                  }, {scope: "publish_actions"});
              }
          });
      });
        // $('#shareTW').click(function () {
        //     var dataURL = $('#c')[0].toDataURL("image/png");
        //     $.oauthpopup({
        //         path: './auth/twitter.php',
        //         callback: function () {
        //             console.log(window.twit);
        //             var data = new FormData();
        //             // Tweet text
        //             data.append('status', "Look at the cute panda! HTML5 Canvas to Facebook/Twitter http://bit.ly/1QK0Qbs @jerezb31");
        //             // Binary image
        //             data.append('image', dataURL);
        //             // oAuth Data
        //             data.append('oauth_token', window.twit.oauth_token);
        //             data.append('oauth_token_secret', window.twit.oauth_token_secret);
        //             // Post to Twitter as an update with
        //             return $.ajax({
        //                 url: './auth/share-on-twitter.php',
        //                 type: 'POST',
        //                 data: data,
        //                 cache: false,
        //                 processData: false,
        //                 contentType: false,
        //                 success: function (data) {
        //                     console.log('Posted to Twitter.');
        //                     console.log(data);
        //                 }
        //             });
        //         }
        //     });
        // });
        function postImageToFacebook(token, filename, mimeType, imageData, message) {
            var fd = new FormData();
            fd.append("access_token", token);
            fd.append("source", imageData);
            fd.append("no_story", true);
            // Upload image to facebook without story(post to feed)
            $.ajax({
                url: "https://graph.facebook.com/me/photos?access_token=" + token,
                type: "POST",
                data: fd,
                processData: false,
                contentType: false,
                cache: false,
                success: function (data) {
                    console.log("success: ", data);
                    // Get image source url
                    FB.api(
                        "/" + data.id + "?fields=images",
                        function (response) {
                            if (response && !response.error) {
                                //console.log(response.images[0].source);
                                // Create facebook post using image
                                FB.api(
                                    "/me/feed",
                                    "POST",
                                    {
                                        "message": "",
                                        "picture": response.images[0].source,
                                        "link": "http://bit.ly/1QK0Qbsz",
                                        "name": 'Look at my jawesome monster!',
                                        "description": message,
                                        "privacy": {
                                            value: 'SELF'
                                        }
                                    },
                                    function (response) {
                                        if (response && !response.error) {
                                            /* handle the result */
                                            console.log("Posted story to facebook");
                                            console.log(response);
                                        }
                                    }
                                );
                            }
                        }
                    );
                },
                error: function (shr, status, data) {
                    console.log("error " + data + " Status " + shr.status);
                },
                complete: function (data) {
                    //console.log('Post to facebook Complete');
                }
            });
        }
        function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {type: 'image/png'});
        }
    })();









// // add bodies to bkgd of canvas

// function chooseBody(el) {
//   var useThisId = el.getAttribute('id');
//   var monsterBox = document.getElementsByClassName('dropzone');
//   monsterBox = monsterBox[0];
//   monsterBox.id = '';
//   monsterBox.id = useThisId;
// }

// // end - adding bodies to bkgd