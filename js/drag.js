var _DRAGGGING_STARTED = 0;
var _LAST_MOUSEMOVE_POSITION = { x: null, y: null };
var _DIV_OFFSET = $('#image-container').offset();
var _CONTAINER_WIDTH = $("#image-container").outerWidth();
var _CONTAINER_HEIGHT = $("#image-container").outerHeight();
var _IMAGE_WIDTH;
var _IMAGE_HEIGHT;
var _IMAGE_CUR_WIDTH;
var _IMAGE_CUR_HEIGHT;
var _IMAGE_LOADED = 0;
var _HOLD;

$('input[type=file]').on('change', function () {
	ImageLoaded();
});

function ImageLoaded() {
	var fileInput = $('input[type=file]')[0];
	if (fileInput.files && fileInput.files[0]) {
		var img = new Image();
        img.src = window.URL.createObjectURL( fileInput.files[0] );
		img.onload = function() {
            _IMAGE_CUR_WIDTH = img.naturalWidth,
			_IMAGE_CUR_HEIGHT = img.naturalHeight;
        };
	}
	
	var image = $('#drag-image');
	image.removeAttr("style");
	
	_IMAGE_WIDTH = _IMAGE_CUR_WIDTH;
	_IMAGE_HEIGHT = _IMAGE_CUR_HEIGHT;
	_IMAGE_LOADED = 1;	
}

$('#image-container').on('mousedown', function(event) {
	if(_IMAGE_LOADED == 1) { 
		_DRAGGGING_STARTED = 1;

		_LAST_MOUSE_POSITION = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
	}
});

$('#image-container').on('mouseup', function() {
	_DRAGGGING_STARTED = 0;
});

$('#image-container').on('mousemove', function(event) {
	if(_DRAGGGING_STARTED == 1) {
		var current_mouse_position = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
		var change_x = current_mouse_position.x - _LAST_MOUSE_POSITION.x;
		var change_y = current_mouse_position.y - _LAST_MOUSE_POSITION.y;

		_LAST_MOUSE_POSITION = current_mouse_position;

		var img_top = parseInt($("#drag-image").css('top'), 10);
		var img_left = parseInt($("#drag-image").css('left'), 10);

		var img_top_new = img_top + change_y;
		var img_left_new = img_left + change_x;

		if(img_top_new > 0)
			img_top_new = 0;
		if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_CUR_HEIGHT))
			img_top_new = _CONTAINER_HEIGHT - _IMAGE_CUR_HEIGHT;

		if(img_left_new > 0)
			img_left_new = 0;
		if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_CUR_WIDTH))
			img_left_new = _CONTAINER_WIDTH - _IMAGE_CUR_WIDTH;

		$("#drag-image").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
	}
});

function zoomIn() {
	_HOLD = setInterval(function() {
		var image = $('#drag-image');
		var width = image.width() - 10;
		var height = image.height() - 10;
		
		var limitLeft = _CONTAINER_WIDTH - width;
		var limitTop = _CONTAINER_HEIGHT - height;
		
		var currentLeft = parseInt(image.css('left'));
		var currentTop = parseInt(image.css('top'));

		if (width >= _CONTAINER_WIDTH && height >= _CONTAINER_HEIGHT) {
			setSize(image, width, height);
			
			if (currentLeft < limitLeft) {
			image.css('left', limitLeft);
			}
			
			if (currentTop < limitTop) {
				image.css('top', limitTop);
			}
		}
	}, 100)
}

function zoomOut() {
	_HOLD = setInterval(function() {
		var image = $('#drag-image');
		var width = image.width() + 10;
		var height = image.height() + 10;
		
		setSize(image, width, height);
	}, 100);
}

function clearZoom() {
	clearInterval(_HOLD);
}

function setSize(image, width, height) {
	if (width > height) {
		if (height > _CONTAINER_HEIGHT) {
			image.css('height', height+'px');
			setCurrentSize(width, height);
		}
	} else {
		if (width > _CONTAINER_WIDTH) {
			image.css('width', width+'px');
			setCurrentSize(width, height);
		}
	}
}

function setCurrentSize(width, height) {
	_IMAGE_CUR_WIDTH = width;
	_IMAGE_CUR_HEIGHT = height;
}