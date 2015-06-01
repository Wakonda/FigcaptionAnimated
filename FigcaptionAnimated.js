(function($)
{
	$.fn.FigcaptionAnimated = function(options)
	{
		var defaults = {
			"message": ""
		};

		options = $.extend(defaults, options);

		this.each(function()
		{
			var img = $(this);

			// Get real size of the image
			var height = img.height();
			var width = img.width();
			
			$("<figure class='animated_caption_figure'></figure>").insertAfter(img);
			
			var animatedCaptionFigure = $(".animated_caption_figure");
			animatedCaptionFigure.append(img);
			animatedCaptionFigure.append("<figcaption class='animated_caption_figcpation'>" + options.message + "</figcaption>");

			var animatedCaptionFigCaption = $(".animated_caption_figcpation");
			// CSS
			animatedCaptionFigure.width(img.width());
			animatedCaptionFigure.height(img.height());
			animatedCaptionFigCaption.width(img.width());
			animatedCaptionFigCaption.css('top',img.height()+'px');

			var figcaptionPaddingTop = animatedCaptionFigCaption.css('padding-top');
			var figcaptionPaddingBottom = animatedCaptionFigCaption.css('padding-bottom');

			var figcaptionPadding = (parseInt(figcaptionPaddingTop.replace(/px/,""))+parseInt(figcaptionPaddingBottom.replace(/px/,"")));
			var figcaptionSize = img.height() - (figcaptionPadding + animatedCaptionFigCaption.height());

			animatedCaptionFigure.hover(function(){
				$(this).find(animatedCaptionFigCaption).stop().animate({'top':figcaptionSize + 'px'}, 200, function(){});
			},function(){
				$(this).find(animatedCaptionFigCaption).stop().animate({'top':img.height()+'px'}, 200, function(){});
			});
		});
	};
})(jQuery)