# FigcaptionAnimated

**FigcaptionAnimated** is a smart JQuery plugin to add a sexy and animated figcaption to your images.

## How it works
First step, insert following code in a HTML page:

```
<link rel="stylesheet" href="FigcaptionAnimated.css" />
<script type="text/javascript" src="FigcaptionAnimated.js"></script>

<script>
	$(function() {
		$("#img_zoomed").FigcaptionAnimated({
			"message": "Description"
		});
	});
</script>
```
...
```
<img id="img_zoomed" src="my_image.png" width="400" height="400" />
```

The option "message" corresponds to the text that will appear below image.

## Version
v1.0.0 - 2015/5/11

## Author
Wakonda.GURU
