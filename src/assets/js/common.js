const common = {
	// ajax
	Ajax (url, params, type, callback) {
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
			var progress = $.AMUI.progress;
			console.log(progress);
			progress.start();
			progress.done();
		})
		.always(function() {
			var progress = $.AMUI.progress;
			progress.start();
			progress.done();
		});
		
	},	

	// dialog提示框
	dialog (txt){
		$('#dialog-tips').remove();
		var htm = '<div class="am-modal am-modal-no-btn" tabindex="-1" id="dialog-tips">'+
				  '<div class="am-modal-dialog dialog-modal">'+
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
	hideDialog (modal){
		modal.modal('close');
	},

	// button的loading效果
	btnDialog (e){
		var $btn = $(e.target);
		$btn.button('loading');
		setTimeout(function(){
		    $btn.button('reset');
		}, 3000);
	},

	// 左侧边栏
	autoLeftNav () {
	    $('.tpl-header-switch-button').on('click', function() {
	        if ($('.left-sidebar').is('.active')) {
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').removeClass('active');
	            }
	            $('.left-sidebar').removeClass('active');
	        } else {

	            $('.left-sidebar').addClass('active');
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').addClass('active');
	            }
	        }
	    })
	    if ($(window).width() < 1024) {
	        $('.left-sidebar').addClass('active');
	    } else {
	        $('.left-sidebar').removeClass('active');
	    }
	},

	// 初始化下拉
	initSelect () {
		$(function(){
			$('select').selected();
		})
	},

	// 删除确认模态框
	deleteModal (e, id, callback) {
		$('#delete_modal').remove();
		var modal = '<div class="am-modal am-modal-prompt" tabindex="-1" id="delete_modal">'+
					'<div class="am-modal-dialog">'+
					'<div class="am-modal-hd">确认删除当前数据!</div>'+
					'<div class="am-modal-footer">'+
			      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
			      	'<span class="am-modal-btn" data-am-modal-confirm>删除</span>'+
				    '</div>'+
				  	'</div>'+
					'</div>';
		$('body').append(modal);
	    $('#delete_modal').modal({
			relatedTarget: $(e.target),
			onConfirm: function(e) {
				callback();
			}
		});
	},

	// 编辑添加modal
	addEditFn (e, id, htm, callback) {
		$('#add-edit-modal').remove();
		$('body').append(htm);
		var $modal = $('#add-edit-modal');
	    var $target = $(e.target);
		$modal.modal({
			relatedTarget: $(e.target),
			onConfirm: function(e) {
				callback();
			}
		});
	},

	// 打印
	print (id) {
		$(id).jqprint();
	}
	





}

export default common;