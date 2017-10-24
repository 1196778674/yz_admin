const common = {
	// ajax
	Ajax: function (url, type, params, callback) {
		$.ajax({
			url: url,
			type: type,
			dataType: 'json',
			data: params,
		})
		.done(function(res) {
			callback(res);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			var progress = $.AMUI.progress;
			progress.start();
			progress.done();
		});
		
	},	

	// dialog提示框
	dialog: function(txt){
		$('#dialog-tips').remove();
		var htm = '<div class="am-modal am-modal-no-btn" tabindex="-1" id="dialog-tips">'+
				  '<div class="am-modal-dialog dialog-modal">'+
				  '<div class="am-modal-hd">'+
				  '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>'+
				  '</div>'+
			      '<div class="am-modal-bd">'+
				      txt +
				  '</div>'+
				  '</div>'+
				  '</div>';
		$('body').append(htm);
		var $modal = $('#dialog-tips');
		$modal.modal();
		setTimeout(() => {
		  this.hideDialog($modal);
		}, 2000);
	},
	hideDialog: function(modal){
		modal.modal('close');
	},
}

export default common;