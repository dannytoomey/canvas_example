
function create_new_texture(x,y,size,color){
    // this gets the canvas element from the html page by ID ('canvas')
    var canvasEl = document.getElementById('canvas');
    // this gets the dimensions of the canvas
    let canvas_width = canvasEl.width;
    let canvas_height = canvasEl.height;
    // this sets the coordinates for the textures to be added
    // relative to the center of the canvas
    let screen_center_x = canvas_width/2;
    let screen_center_y = canvas_height/2;
    // this 'gets' (creates) a new texture on the canvas
    var new_texture = canvasEl.getContext('2d');
    // this sets the texture to the specified color
    new_texture.fillStyle = color;
    new_texture.borderStyler = 'solid';
    // this creates a texture at location x,y of size px by px as specified by the call
    new_texture.fillRect(screen_center_x-(size/2)+x, screen_center_y-(size/2)+y, size, size);


}

// create a white 10px by 10px square at the center of the canvas
create_new_texture(0,0,10,'white')